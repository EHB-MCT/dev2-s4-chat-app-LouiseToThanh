"use strict";

const chat = {
    author: "yourName",
    init() {
        this.fetchMessages();
    },
    sendMessage() {
    },
    fetchMessages() {
        fetch('https://dev2chat.onrender.com/messages')
        .then(function(response){                           //get messages 
            return response.json(); 
        })

        .then(function(messages){                           // show messages 
            console.log(messages);
            const message = messages[0]; 
            
            const select =  document.querySelector('#messageContainer').insertAdjacentHTML ('beforeend', htmlString);
            this.renderMessage();
        });

       

    },

    renderMessage(message) {
        let htmlString = `<div class="messageItem">
        <div class="header">
            <span class="author">${message.author}</span>
            <span class="time">${message.time}</span>
        </div>
        <p>
           ${message.p}
        </p>
    </div> `; 
    }
  
}

chat.init();