console.log("popup script running!");

let params = {
    active: true,
    currentWindow: true
};

chrome.tabs.query(params, tabs => {
    /*let msgContent = {
        from: "popup",
        subject: "gettingText",
        txt: "Wassup!"
    }

    window.selectedText = "";

    chrome.tabs.sendMessage(tabs[0].id, msgContent, response => {
        window.selectedText = response.selectedText;
        console.log(window.selectedText);
    });

    console.log(window.selectedText);

    let msgBackground = {
        from: "popup",
        subject: "gettingImage",
        txt: window.selectedText
    }

    chrome.tabs.sendMessage(tabs[0].id, msgBackground, response => {
        document.getElementById('image').src = response.image;
    });*/

    let bgPage = chrome.extension.getBackgroundPage();
    let imageURL = bgPage.imageURL;

    document.getElementById('image').src = imageURL;
});
