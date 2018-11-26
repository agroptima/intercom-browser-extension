chrome.tabs.onCreated.addListener(overwriteStyles);
chrome.tabs.onUpdated.addListener(function(tabId, info, tab) {
    if (info.status == 'complete') overwriteStyles(tab);
});

function overwriteStyles(tab) {
    var tabUrl = tab.url;
    if (tabUrl && tabUrl.indexOf("https://app.intercom.io") != -1) {
        chrome.tabs.insertCSS(tab.id, {
            file: "styles.css"
        });
    }
}



