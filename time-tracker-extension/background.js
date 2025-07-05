let currentSite = '';
let startTime = 0;

chrome.tabs.onActivated.addListener(activeInfo => {
  chrome.tabs.get(activeInfo.tabId, tab => {
    handleNewSite(tab.url);
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.active) {
    handleNewSite(tab.url);
  }
});

function handleNewSite(url) {
  const domain = extractDomain(url);
  const now = Date.now();

  if (currentSite) {
    const duration = now - startTime;
    saveTimeData(currentSite, duration);
  }

  currentSite = domain;
  startTime = now;
}

function extractDomain(url) {
  try {
    return new URL(url).hostname;
  } catch (e) {
    return '';
  }
}

function saveTimeData(site, duration) {
  chrome.storage.local.get(['timeData'], data => {
    const timeData = data.timeData || {};
    timeData[site] = (timeData[site] || 0) + duration;
    chrome.storage.local.set({ timeData });
  });
}
