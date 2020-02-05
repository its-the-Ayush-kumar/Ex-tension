console.log("background script running!");

let Access_key = 'dda5123fde005b5061b86f15837d07189c5f30680b232170a39e355f5b02d7be';
let Secret_Key = '8aee4b4ba2a4ece8641a34ac1e48c5c13120b4a3bf4877034cfcd60ab7004c6c';

window.imageURL = "URL not present";

chrome.runtime.onMessage.addListener(async (msg, sender) => {
    if(msg.from == "content" && msg.subject == "getImage"){
        let url = 'https://api.unsplash.com/search/photos?page=1&query=' + `${msg.tag}` + '&client_id=' + `${Access_key}`;
        let image = await fetch(url);
        image = await image.json();
        image = image.results[0];
        console.log(image);
        image = image.urls.raw;

        window.imageURL = image;
    }
});
