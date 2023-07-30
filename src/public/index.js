document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to sockets");
    let socket = io();

    let input = document.getElementById("chat_box")
    let msgList = document.getElementById("msg_list")
    let send = document.getElementById("send")

    send.addEventListener('click', ()=>{
        let msg = input.value;
        socket.emit('new_msg', {
            message: msg
        })
        input.value = ''
    })

    socket.on('msg_rcvd', (data)=>{
        let msg = document.createElement('li');
        msg.textContent = data.message;
        msgList.appendChild(msg);
    })
})
