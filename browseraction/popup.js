chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    var console = chrome.extension.getBackgroundPage().console;
    var apiURL = 'http://youtubeinmp3.com/fetch/?video=http://www.youtube.com/watch?v=';
//    var apiURL = 'http://www.video2mp3.net/loading.php?url=http://www.youtube.com/watch?v='+url;
//    alert(youtube_parser(url) + jQuery('#loading').text());
    if (!youtube_parser(url)) {
        jQuery('body').addClass('no-youtube');
    }else {
        jQuery('a.link').click(function() {
            console.log(apiURL+youtube_parser(url));

        });
        jQuery('#loading').text(youtube_parser(url));
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