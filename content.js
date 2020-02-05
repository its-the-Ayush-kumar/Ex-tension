console.log("content script running!");

/*chrome.runtime.onMessage.addListener(async (msg, sender, response) => {
    if(msg.from == "popup" && msg.subject == "gettingText"){
        let selectedText = window.getSelection().toString();
        let resp = {
            selectedText: selectedText
        };
        response(resp);
    }
});
*/

window.addEventListener('mouseup', () => {
    let selectedText = window.getSelection().toString();
    if(selectedText.length > 0){
        let message = {
            from: "content",
            to: "background",
            subject: "getImage",
            tag: selectedText
        };

        chrome.runtime.sendMessage(message);
    }
});
