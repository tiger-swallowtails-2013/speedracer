function Game(){
  var stringHandler;
  var that = this;
  this.start = function(){
    stringHandler = new StringHandler()
    stringHandler.initialize();

    timer = new Timer();

    carMovement = new MoveImage;
    ghostMovement = new MoveImage;
    carMovement.calculateIdealPace();
    
    inputBox = document.getElementById('inputBox');
    bindListeners(this);
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
    that.start();
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
}
