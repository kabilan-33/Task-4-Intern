const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const TimeSchema = new mongoose.Schema({
  userId: String,
  site: String,
  duration: Number,
  date: Date
});
const TimeEntry = mongoose.model('TimeEntry', TimeSchema);

app.post('/api/saveTime', async (req, res) => {
  const { userId, site, duration } = req.body;
  const entry = new TimeEntry({ userId, site, duration, date: new Date() });
  await entry.save();
  res.json({ success: true });
});

app.get('/api/report/:userId', async (req, res) => {
  const { userId } = req.params;
  const report = await TimeEntry.find({ userId });
  res.json(report);
});

app.listen(5000, () => console.log('API running on port 5000'));
