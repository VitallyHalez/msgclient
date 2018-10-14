btnmsg.onclick = () => {
    if(inpmsg.value == "")
        return;
    AppendMessage(inpmsg.value, null);
    socket.send(JSON.stringify( {msg: inpmsg.value, method:'msgtoserver'} ));
    inpmsg.value = "";
}

btnchat.onclick = () => {
    msgCount = 1;
    if(btnchat.lastChild.nodeName == 'SPAN')
        btnchat.lastElementChild.remove()
}

inpmsg.onkeyup = e => {
    if (e.keyCode === 13) 
        btnmsg.click()
    return false;
}