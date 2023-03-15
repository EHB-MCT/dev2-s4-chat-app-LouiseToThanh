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
            document.querySelector('#messageContainer').innerHTML = messages[0].message;


        });

       

    },

    renderMessage(message) {
    }

}

chat.init();