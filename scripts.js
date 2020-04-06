var currentRoom = "start";
var commands = ["go", "inventory", "take"];
var inventory = ["sword"];

function changeRoom(dir) {
  if(rooms[currentRoom].directions[dir] !== undefined) {
    currentRoom = rooms[currentRoom].directions[dir]
    $('#game-text').append("<p>" + rooms[currentRoom].description + "</p>");
  } else {
      $('#game-text').append("<p>You cannot go that way!</p>");
  }
}

function showHelp() {
  $('#game-text').append("<h3>Help</h3><p>You must type ''go'' infront of\
   the direction,\ you want to move in,\
    and you must start with ''in''\<br>\</br> Here\
     are the possible commands: \</p>");
  $('#game-text').append("<ul><p>");
  for(var i = 0; i < commands.length; i++) {
    $('#game-text').append("<li>" + commands[i] + "</li>");
  }
  $('#game-text').append("</ul></p>");
}

function showInventory() {
  if (inventory.length === 0) {
    $('#game-text').append("<p>You are not carrying anything.</p>");
    return;
  }
  $('#game-text').append("<p>Here is your inventory: </p>");
  $('#game-text').append("<ul><p>");
  for(var i = 0; i < inventory.length; i++) {
    $('#game-text').append("<li>" + inventory[i] + "</li>");
  }
  $('#game-text').append("</ul></p>");
}

//this is the "look" command, i am attemting to make (insert).
//in which where the player can use the check a given room has any items in that location.
function useLook() {
  if(rooms[currentRoom].items !== undefined) {
    item = rooms[currentRoom].items
    $('#game-text').append("<p>" + item[currentRoom] + "</p>");
  } else {
    $('#game-text').append("<p>There is nothing here!</p>");
  }
}

//this is the "take" command, sometimes known as a "pick up" command, elsewhere.
//this command should able the player to take items into their inventory, if a item is in the current room. 
function TakeItem() {
  inventory[inventory.length] = item+(" ")[1];
  $('#game-text').append("<p>" + "You have taken [items]" + "</p>");
}

function playerInput(input) {
  var command = input.split(" ")[0];
  switch (command) {
    case "go":
      var dir = input.split(" ")[1];
      changeRoom(dir);
      break;
    case "help":
      showHelp();
      break;
    case "inventory":
      showInventory();
      break;
    case "look":
      useLook();
      break;
    case "take":
      var items = input.split(" ")[1];
      take(items);
      break;
    default:
    $('#game-text').append("<p>Invalid command</p>");
    }
}

$(document).ready(function(){
  $('#game-text').append("<p>" + rooms.start.description + "</p>");

$(document).ready(function(){
  $(document).keypress(function(key){
    if (key.which === 13 && $('#user-input').is(':focus')) {
    //var value = document.getElementById('user-input');
    var value = $('#user-input').val().toLowerCase();
    $('#user-input').val("");
    playerInput(value);
      }
    })
  })
})
