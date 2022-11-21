// random value generated
  var y = Math.floor(Math.random() * 10 + 1);
// counting the number of guesses
if(x == y){

alert("Congratulations!!!" +playername+"you guessed it right in " + guess + "Guess");
guess= 1;
}
// made for correct Guess
else if(x > y) {
guess++;
alert("oops sorry!! try a smaller number");
}
  else
  {
guess++;
alert("oops sorry!! try a greater number");
  }
// function for number guessed by user     
var x = document.getElementById("guessfield").value;

function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}