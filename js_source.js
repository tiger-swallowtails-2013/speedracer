var typeFollow = function () {
  var written_text = inputBox.value
  expectedText = document.getElementById("expectedText").innerHTML;
};

function bindListenersForInputBox(inputBox) {
  inputBox.addEventListener("input", typeFollow);
  inputBox.addEventListener("keypress", timer.startTimer);
}

function Timer() {
  var startTime, endTime;

  Timer.prototype.startTimer= function(event) {
    startTime = new Date().getTime();
    inputBox.removeEventListener("keypress", timer.startTimer);
    return startTime;
  }

  Timer.prototype.endTimer= function() {
    endTime = new Date().getTime();
    return endTime;
  } //need to add 'event' arg that triggers endTimer

  Timer.prototype.calculateTime= function(startTime, endTime){
    return this.endTime - this.startTime;
  }
}

