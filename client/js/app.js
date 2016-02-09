console.log('app.js loaded!');

var app = angular.module("hangmanApp", [])
  .controller('hangmanController', hangmanController);

function hangmanController() {
  console.log('hangmanController online');
  this.controllerWorks = true;
}
