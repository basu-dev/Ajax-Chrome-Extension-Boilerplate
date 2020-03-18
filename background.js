chrome.runtime.onMessage.addListener(function(msg, sender) {
  let toBeSent = null;
  const ajaxCall = () => {
    $.ajax({
      type: "GET",
      url: "https://jsonplaceholder.typicode.com/users",

      success: function(response) {
        chrome.tabs.query({ currentWindow: true, active: true }, function(
          tabs
        ) {
          chrome.tabs.sendMessage(tabs[0].id, response);
        });
        toBeSent = response;
      }
    });
  };
  ajaxCall();
});
