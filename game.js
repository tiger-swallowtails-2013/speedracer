window.onload = function () {
  console.log("window loaded")
  game = new Game();
  game.start();
};

function Game(){
  var gameWords;
  this.start = function(){
    gameWords = new ShiftWords
    gameWords.initialize(textStorage());
    timer = new Timer();
    inputBox = document.getElementById('inputBox');
    bindListenersForInputBox(inputBox, gameWords);
  }
  this.end = function(){};
}


function textStorage(){
  var collection = ["The quick brown fox jumped over the lazy dog", "When it rains it pours", "The rain in spain falls mainly on the plain"];
  return collection[Math.floor(Math.random() * collection.length)];
}
