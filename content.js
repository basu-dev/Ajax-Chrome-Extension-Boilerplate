$(document).ready(()=>{
    chrome.runtime.sendMessage("basu");
    chrome.runtime.onMessage.addListener(function (request, sender) {
    console.log('done', request);
})})