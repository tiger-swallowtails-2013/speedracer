function Game(){
  var stringHandler;
  var that = this;
  this.start = function(){
    stringHandler = new StringHandler()
    stringHandler.initialize();
    timer = new Timer();
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
    if (stringHandler.evaluate() === false){
      that.end();
    }
  }
}
