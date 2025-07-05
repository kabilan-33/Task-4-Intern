chrome.storage.local.get(['timeData'], data => {
  const timeData = data.timeData || {};
  const labels = Object.keys(timeData);
  const durations = Object.values(timeData).map(ms => ms / 60000);

  new Chart(document.getElementById('productivityChart'), {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Minutes Spent',
        data: durations,
        backgroundColor: durations.map(val => val > 30 ? 'red' : 'green')
      }]
    }
  });
});
