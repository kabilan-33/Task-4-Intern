document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get(['timeData'], data => {
    const timeData = data.timeData || {};
    let html = '<ul>';
    for (const [site, ms] of Object.entries(timeData)) {
      const minutes = (ms / 60000).toFixed(1);
      const status = classifySite(site) ? '✅ Productive' : '❌ Unproductive';
      html += `<li>${site}: ${minutes} mins - ${status}</li>`;
    }
    html += '</ul>';
    document.getElementById('report').innerHTML = html;
  });
});

function classifySite(site) {
  const productiveSites = [
    'stackoverflow.com',
    'github.com',
    'leetcode.com'
  ];
  return productiveSites.some(prod => site.includes(prod));
}

function openFullDashboard() {
  chrome.tabs.create({ url: chrome.runtime.getURL('dashboard.html') });
}
