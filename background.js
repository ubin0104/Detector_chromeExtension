var req;
fucntion openURL(){
    var msg={};
    req=new XMLHttpRequest();
    req.onreadystatechange=handleStateChange;
    req.open("POST","https://www.naver.com", flase);
    req.setRequestHeader("content-Type","application/json;charset=utf-8");
    req.send(JSON.stringify(msg));
}
function handleStateChange(){
    if(req.readystae == 4){
        if(req.status ==200){
            alert("성공 "+ req.responseText);
        }
        else{
            alert("실패 "+req.status);
        }
    }
}
chrome.contextMenus.creat({"title":"테스트입니다.","contexts":["all"],"onclick":openURL});
