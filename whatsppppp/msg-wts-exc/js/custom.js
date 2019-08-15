var messages = document.getElementById ("messages");
var textbox = document.getElementById ("textbox");
var button = document.getElementById ("button");;
var messages1 = document.getElementById ("messages1");
var textbox1 = document.getElementById ("textbox1");
var button1 = document.getElementById ("button1");;

function CreateElemMsg(liClass,inputMsg){
    let elemMsg= document.createElement('li')
    elemMsg.innerHTML= inputMsg;
    elemMsg.classList.add(liClass);
    return  elemMsg;
}

button.addEventListener("click",function(){

    // var newMessage = document.createElement("li");
    


    
    
    messages.appendChild(CreateElemMsg('user1',textbox.value));
    messages1.appendChild(CreateElemMsg('user2',textbox.value));
 
    
  

})
button1.addEventListener("click",function(){

    // var newMessage = document.createElement("li");
    


    
    
    messages.appendChild(CreateElemMsg('user2',textbox1.value));
    messages1.appendChild(CreateElemMsg('user1',textbox1.value));
 
    
  

})



var bleep = new Audio ();
bleep.src = "inquisitiveness.mp3";
