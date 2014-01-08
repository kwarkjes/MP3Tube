chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
//    alert(youtube_parser(url) + jQuery('#loading').text());
    if (!youtube_parser(url)) {
        jQuery('body').addClass('no-youtube');
    }
            jQuery('#loading').text(youtube_parser(url));
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