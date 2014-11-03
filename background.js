function imgur(info, tab)
{
        var imageurl = info.srcUrl;
        chrome.tabs.create({url: "http://imgur.com/api/upload/?url=" + imageurl});
}

chrome.contextMenus.create({title: "Upload to Imgur", contexts:["image"], "onclick": imgur});


