/* Function to save options. */
function saveOptions(){
    var zoomFactor = document.getElementById('zoom-factor').value;
    chrome.storage.local.set({
        zoomFactor: parseFloat(zoomFactor)
    });

    document.getElementById("zoom-percentage").innerHTML = Math.round(zoomFactor * 100);
}

/* Function to restore options. */
function restoreOptions(){
    chrome.storage.local.get({
        zoomFactor: 1.0
    }, function(items){
        document.getElementById('zoom-factor').value = parseFloat(items.zoomFactor.toFixed(2));
        document.getElementById("zoom-percentage").innerHTML = Math.round(items.zoomFactor * 100);
    });
}

/* Event listeners. */
document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('zoom-factor').addEventListener('change', saveOptions);
