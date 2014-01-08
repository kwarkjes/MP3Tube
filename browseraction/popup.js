chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
//    var console = chrome.extension.getBackgroundPage().console; //develpment
    var apiURL = 'http://youtubeinmp3.com/fetch/?video=http://www.youtube.com/watch?v=';
    if (!youtube_parser(url)) {
        jQuery('body').addClass('no-youtube');
    }else {
        jQuery('a.link').click(function() {
            chrome.tabs.create({'url': apiURL+youtube_parser(url)});
        });
    }
});

function youtube_parser(url){
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match&&match[2].length==11){
        return match[2];
    }
    else{
        return false;
    }
}