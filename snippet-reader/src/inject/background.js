chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	console.log(request);
    if (request.linkToLoad){
      $.get(request.linkToLoad, function(res){
      	 sendResponse({data: res});
      })
    }
    return true;
  });