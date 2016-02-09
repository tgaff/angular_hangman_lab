console.log('app.js loaded!');

angular.module("hangmanApp", [])
  .controller('hangmanController', hangmanController);

function hangmanController() {
  console.log('hangmanController online');
  this.controllerWorks = true;
  this.game = new HangmanGame('elephant');
  this.newGuess = '';
  this.checkGuess = checkGuess;


  function checkGuess() {
    console.log('checking');
    this.game.guess(this.newGuess);
    this.newGuess = '';
  }
}
