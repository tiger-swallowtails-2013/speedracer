compareText = function(word){
  inputText = document.getElementById('inputBox').value;
  if (inputText === word) {
    return true;
  } 
};

function bindListenersForInputBox(inputBox, gameWords) {
  inputBox.addEventListener("input", gameWords.evaluate);
  inputBox.addEventListener("keypress", timer.startTimer);
}

function Timer() {
  var startTime, endTime;

  this.startTimer= function(event) {
    startTime = new Date().getTime();
    inputBox.removeEventListener("keypress", timer.startTimer);
    return startTime;
  };

  this.endTimer= function() {
    endTime = new Date().getTime();
    return endTime;
  }; //need to add 'event' arg that triggers endTimer

  this.calculateTime= function(startTime, endTime){
    return this.endTime - this.startTime;
  };
};

