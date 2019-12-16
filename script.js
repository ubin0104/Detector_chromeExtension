//var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
//  Source: css-tricks
//(function(){
  //  var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;

    //var link=document.location.href;
    //document.write(newURL);
//})
function getCurrentTabUrl(callback){
    var queryInfo={
        active:true,
        currentWindow:true
    };

    chrome.tabs.query(queryInfo,function(tabs){
        var tab=tabs[0];
        var url=tab.url;
        callback(url);
    });
}
function renderURL(statusText){
    document.getElementById('urls').textContent=statusText;
}
//function send(url){
//   document.location.href="localhost/api/whites/"+url;
//}


document.addEventListener('DOMContentLoaded',function(){
    var link=document.getElementById('getUrl');

    link.addEventListener('click',function(){
        getCurrentTabUrl(function(url){
            renderURL(url);
            var link="localhost:8000/check/"+url;
            window.open(link,'_blank');
        });
    });
});
document.addEventListener('DOMContentLoaded',function(){
    var link=document.getElementById('updateBlack');

    link.addEventListener('click',function(){
        getCurrentTabUrl(function(url){
            renderURL(url);
            var link="localhost:8000/insert_black";
            window.open(link,'_blank');
        });
    });
});


