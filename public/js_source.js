function bindListeners(game) {
  inputBox = document.getElementById('inputBox');
  inputBox.addEventListener("input", game.checkUserInput);
  inputBox.addEventListener("keypress", timer.startTimer);
  button = document.getElementById("restart");
  button.addEventListener("click", game.reset);
}

function Timer() {
  var log = {}

  this.startTimer= function() {
    startTime = new Date().getTime();
    inputBox.removeEventListener("keypress", timer.startTimer);
    log.startTime = startTime;
  };

  this.endTimer= function() {
    endTime = new Date().getTime();
    log.endTime = endTime;
  };

  this.calculateTime= function(){
    return Math.round((log.endTime - log.startTime)/1000);
  };
};

