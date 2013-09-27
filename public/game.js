function Game(){
  var stringHandler;
  var that = this;
  this.start = function(){
    stringHandler = new StringHandler();

    timer = new Timer();

    carMovement = new MoveImage;
    ghostMovement = new MoveImage;
    carMovement.calculateIdealPace();
    
    inputBox = document.getElementById('inputBox');
    this.bindListeners();
  }
  this.bindListeners = function(){
    inputBox = document.getElementById('inputBox');
    inputBox.addEventListener("input", this.checkUserInput);
    inputBox.addEventListener("keypress", timer.startTimer);
    button = document.getElementById("restart");
    button.addEventListener("click", this.reset);
  }
  this.checkUserInput = function(){
    var inputText = document.getElementById('inputBox').value;
    if (stringHandler.compareText(inputText)){
      carMovement.moveImage();
      ghostMovement.moveImage();

      var anyMoreWords = stringHandler.shift();
      stringHandler.updateDom();
      if(anyMoreWords === false){
        that.end();
      }
    }
  }
  this.end = function(){
    inputBox.removeEventListener("input", game.checkUserInput);
    timer.endTimer();
    var totalTime = timer.calculateTime();
    var results_string = "You finished in " + totalTime + " seconds!"
    stringHandler.placeText(results_string, "time")
  };
  this.reset = function(){
    document.getElementById("inputBox").value="";
    document.getElementById("time").innerText = "";
    carMovement.reset()
    ghostMovement.reset()
    that.start();
  }
}
