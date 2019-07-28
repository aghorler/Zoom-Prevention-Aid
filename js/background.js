/* Function to detect tab zoom change events and reset zoom settings if required. */
chrome.tabs.onZoomChange.addListener(function(details){
    chrome.storage.local.get({zoomFactor: 1.0}, function(items){
        if(parseFloat(details.newZoomFactor.toFixed(2)) !== parseFloat(items.zoomFactor.toFixed(2))){
            console.log("Resetting tab ID " + details.tabId + " to zoom factor " + parseFloat(items.zoomFactor.toFixed(2)));

            chrome.tabs.setZoom(details.tabId, parseFloat(items.zoomFactor.toFixed(2)));
        }
    });
});

/* Open options page on toolbar icon click. */
chrome.browserAction.onClicked.addListener(function(){
    chrome.runtime.openOptionsPage();
});

/* Open options page on install. */
chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        chrome.runtime.openOptionsPage();
    }
});
