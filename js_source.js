function typeFollow(event) {
  if (String.fromCharCode(event.charCode) === 'm') {
    console.log("Success! You typed 'm'!");
  } else {
    console.log("Fail! You did not type 'm'!");
  }
// console.log(result);
}

function bindListenersForInputBox(inputBox) {
  inputBox.addEventListener("keypress", typeFollow);
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
