function addChat(){
    
    var input = document.getElementById('chat'); 
    input.addEventListener("keyup", function(event){
        event.preventDefault(); 
        if(event.keyCode === 13){
                var chatMessage = document.getElementById('chat').value; 
                console.log(chatMessage); 
                if(chatMessage == null || chatMessage == ""){
                    alert('Please specify a message'); 
                    document.getElementById('chat').focus();
                }else{
                    postChat(chatMessage); 
                    //after the method call, clear the chat window
                    document.getElementById('chat').value = ""; //reset it to an empty string
                    //refocus the chat
                    document.getElementById('chat').focus();
                }
        }
    });    

}

function manualChat(){
    var chatMessage = document.getElementById('chat').value; 
    // console.log(chatMessage); 
    if(chatMessage == null || chatMessage == ""){
        alert('Please specify a message'); 
        document.getElementById('chat').focus(); 
    }else{
        postChat(chatMessage); 
        //after the method call, clear the chat window
        document.getElementById('chat').value = ""; //reset it to an empty string
        document.getElementById('chat').focus(); 
    }
}

function postChat(msg){

    if(msg == null || msg == ""){
        alert("Please specify a message"); 
        return; //return out if the message cannot be posted
    }

    var p = document.createElement("p"); 
    p.className = 'chat-entry'; 
    var pText = document.createTextNode(msg); 
    p.appendChild(pText); 
    var mainWindow = document.getElementById("window"); 
    mainWindow.appendChild(p); //appending p to it
}