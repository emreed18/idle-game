var score = 1; // Create a variable to store the score in

var title = new Title('Welcome to the jungle'); // Create a title element
var button = new Button('coins', btnPress);   // Create a button element
var hidden = new Button('coins');
var pl1 = new Button('player 1');
hidden.hide();
var scr = new Text(score);                    // Create a text element
var pl1 = new Button('player 2')
setInterval(btnPress, 1);   // Set up a loop

function btnPress() {
  score++;
  scr.edit(score);
}
