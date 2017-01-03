// YOUR CODE HERE:
var app = {
  // init: function() {

  // } 
};

// 
app.allMessages = [];

app.init = function() {
  // preventDefault()
    // setInterval(function() {
    //   app.fetch('https://api.parse.com/1/classes/messages', {

    //   }, function(result) {
    //     console.log('result', result);
    //     for (var i = result.results.length - 1; i >= 0; i--) {
    //       app.renderMessage(result.results[i]);
    //     }
    //   } );
    // }, 2000);

  // $('#send .submit').submit(app.handleSubmit());
  // 
  app.fetch('https://api.parse.com/1/classes/messages', {

  }, function(result) {
    console.log('result', result);
    for (var i = result.results.length - 1; i >= 0; i--) {
      app.renderMessage(result.results[i]);
    }
  } );

};

app.send = function(message, success, dataType) {
  // $('#send .submit').click(app.handleSubmit());
  $.ajax({
      // This is the url you should use to communicate with the parse API server.
    url: 'https://api.parse.com/1/classes/messages',
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
  // app.fetch('https://api.parse.com/1/classes/messages', {

  // }, function(result) {
  //   // console.log('result', result);
  //   for (var i = 0; i < result.results.length; i++) {
  //     app.renderMessage(result.results[i]);
  //   }
  // } );
};

app.fetch = (url, data, success, dataType) => {
  $.ajax({
    url: url,
    data: {
      // limit: 100000,
      order: '-createdAt'
    },
    success: success,
    dataType: dataType,
  });

};

// app.fetch = () => {
//   $.get('https://myAppID:6UJYuifdHSHnOvG2DiYXU6cwluUvgDiVOpr8Weqi-keygYu7Z35zwiNz4BaNgwyaq9u9A36eVHd38MiDvCH5@api.parse.com/1/classes/messages', function(data, status) {
//     return data;
//   });

// };

app.clearMessages = () => {
  $('#chats').empty();
  console.log("cleared");
};

// render a single piece of message as a div inside chats
app.renderMessage = function(message) {  
  $('#chats').append('<div class="chat"> <h3 class="username" onclick="app.handleUsernameClick()">' + message.username + '</h3>' + '<p class="text">' 
    + message.text + '</p>' + '<a class="roomname" onclick="functionCall()">' 
    + message.roomname + '</a>' + '</div>');   

};

// filter the messages with roomname
app.renderRoom = function(roomname) {
  $('select').append('<option class="roomname">' + roomname + '</option>');

  // fetch messages with 'roomname'

  // render messages in chats div

};

app.handleUsernameClick = function() {

};


app.handleSubmit = function() {
  // console.log('working');
  // var a = 
  // console.log(a);
  // var obj = 
  // console.log(obj);
  var messagetxt = $('.submit:input').val();
  app.send({
    username: this.username,
    text: messagetxt,
    roomname: 'lobby'
  });
  // send message to server
  app.clearMessages();
  app.fetch('https://api.parse.com/1/classes/messages', {}, function(result) {
      // console.log('result', result);
    for (var i = 0; i < result.results.length; i++) {
      app.renderMessage(result.results[i]);
    }
  });
  // refresh the chats div 

};

// // Get more messages by clicking the button refresh
// $('#refresh').click(function() {

//   // fetch all messages

//   // render messages

// });

// var message = {
//   'username': 'greg',
//   'message': 'hello',
//   'roomname': 'lobby'
// };


// Click the roomname, shows all messages in that room
// var room = $('#chats a').value();
// app.renderRoom(room);




app.init();

