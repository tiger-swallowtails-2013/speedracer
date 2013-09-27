

function Game(){
  var gameWords;
  var that = this;
  this.start = function(){
    gameWords = new StringHandler()
    gameWords.initialize(textStorage());
    timer = new Timer();
    bindListeners(this);
  }
  this.end = function(){
    timer.endTimer();
    var totalTime = Math.round(timer.calculateTime()/1000);
    alert("You finished in " + totalTime +" seconds");
    inputBox.removeEventListener("input", game.checkUserInput);
  };
  this.reset = function(){
    document.getElementById("inputBox").value="";
    that.start();
  }
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
