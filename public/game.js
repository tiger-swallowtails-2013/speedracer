window.onload = function () {
  game = new Game();
  game.start();
};

function Game(){
  var gameWords;
  var that = this;
  this.start = function(){
    gameWords = new ShiftWords
    gameWords.initialize(textStorage());
    timer = new Timer();
    carMovement = new MoveImage;
    ghostMovement = new MoveImage;
    carMovement.calculateIdealPace;
    ghostMovement.calculateIdealPace
    console.log(carMovement.calculateIdealPace());
    inputBox = document.getElementById('inputBox');
    bindListenersForInputBox(inputBox, this);
  }
  this.end = function(){
    timer.endTimer();
    var totalTime = Math.round(timer.calculateTime()/1000);
    alert("You finished in " + totalTime +" seconds")
    //display stats
    //reset game
  };
  this.checkUserInput = function(){
    if (gameWords.evaluate() === false){
      that.end();
    }
  }
}

function textStorage(){
  var collection = ["The quick brown fox jumped over the lazy dog.", "When it rains it pours.", "The rain in spain falls mainly on the plain."];
  return collection[Math.floor(Math.random() * collection.length)];
}
