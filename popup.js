/*function findMetaTag ()
{
// 	  var metas = document.getElementsByTagName("body");
// 	  //console.log(chrome.runtime.getURL());
// chrome.tabs.getSelected(null, function(tab){
//     console.log(tab);
// });

// chrome.tabs.executeScript(null, {file: "content_script.js"});


// // 	  var author = metas
// // var t = document.createTextNode("CLICK ME");       // Create a text node
// // btn.appendChild(t);                                // Append the text to <button>
// // document.body.appendChild(btn);  

// 	  // return metas;

}


document.addEventListener('DOMContentLoaded', () => {

	findMetaTag();
});
*/


chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    message.innerText = request.source;
  }
});

function onWindowLoad() {

  var message = document.querySelector('#message');

  chrome.tabs.executeScript(null, {
    file: "getPagesSource.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      message.innerText = 'Not Defined';
      //message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }
  });

}

window.onload = onWindowLoad;