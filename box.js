
var message = ["Hello.", "Hi.","How are you?", "I'm fine."]
var imgsrc = ["./dialog1.png","./dialog2.png"]
var centered = ["centered1", "centered2"];
var container = ["container1", "container2"];
var i = 0;
var j=0;
var offset = 0;
function myfunction(){
    var box = document.getElementById("box")
    var msg = document.getElementById("msg")
    var cont = document.getElementById("cont")
    // console.log("replace")
    toggleClass(cont,container[0],container[1]);
    box.src = imgsrc[++i % 2];
    msg.innerHTML = message[++j % 4];
    // console.log("done")

    var body = document.getElementById("b")
    if(offset == 0){
        body.style.backgroundPositionX = 40+"%";
        offset=1;
    }
    else
    {
        body.style.backgroundPositionX = 60 + "%";
        offset = 0;

    }
        

}

function toggleClass(ele, cls1, cls2) {
   if(ele.className == cls1)
    ele.className = cls2;
   else
    ele.className = cls1;
}