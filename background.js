console.log("background running");
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    chrome.tabs.sendMessage(tab.id)
}
if(!localStorage.first){
    chrome.tabs.create({
       url : "welcome.html"
    });
    localStorage.first = "true";
}