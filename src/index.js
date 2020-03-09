function addMessage(message, me = true) {
  const template = `<div class="message">
    <div class="${
      me ? "myMessage" : "fromThem"
    }" data-date="${new Date().toLocaleTimeString()}">
      <p>${message}</p>
      <date> ${new Date().toLocaleTimeString()} </date>
    </div>
  </div>`;

  document.querySelector(".chat .messages").innerHTML += template;
}

function typing() {
  document.querySelector(".typing").classList.toggle("active");
  setTimeout(() => {
    document.querySelector(".typing").classList.toggle("active");
  }, 1000);
}

addMessage("Hi!", false);
addMessage("In this exercise you will work with events in JS", false);
addMessage("Let's go!");
addMessage("Let's go!");

/**
 * Listen to the submit of the form and add a new message
 * with addMessage()
 */

// Code here

var logMessage = function(event) {
  event.preventDefault();
  var message = document.getElementById("message-text");
  var messageContent = message.value;
  addMessage(messageContent, true);
  message.value = "";
};

var chatBox = document.getElementsByTagName("form");
chatBox = chatBox[0];
chatBox.addEventListener("submit", logMessage);

/**
 * Listen to the click on each message and create an alert
 * with the date from 'data-date'
 */
// Code here

// create event handler to listen to click on message

var messages = document.getElementsByClassName("messages");

var handleMessageClick = function() {
  alert(new Date().toLocaleTimeString());
};

for (var message of messages) {
  message.addEventListener("click", handleMessageClick);
}

/*  var myMessage = document.getElementsByClassName("message");
for (var i = 0; i < myMessage.length; i++) {
  myMessage[i].addEventListener("click", function() {
    preventDefault();
    console.log(myMessage[i]);
  });
} */
/*
 * Listen to every keypress (from the keyboard) in the input and call
 * the function typing()
 */

// Code here

var input = document.getElementById("message-text");
input.addEventListener("keydown", typing);
