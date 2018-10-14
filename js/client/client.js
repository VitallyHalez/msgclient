var socket = new WebSocket('wss://msgserver.herokuapp.com')

socket.onmessage = function(event) {
    handleMessage(JSON.parse(event.data));
}

let msgCount = 1;

function handleMessage(message) {
    if (message.method === "msgtoclient"){
        if(msgCount == 1){
            btnchat.appendChild(createBadge(msgCount));
        }
        else if(msgCount<10){
            notify.innerText=msgCount;
        }
        else{
            notify.innerText='9+'
            return
        }
        msgCount++
        messages.appendChild(AppendMessage(msgText, GetDate()));
        messages.scrollTop = 9999;
    } 
    else return;
}