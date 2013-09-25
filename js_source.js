typeFollow = function () {
  var inputBox = document.getElementById('inputBox');
  var writtenText = inputBox.value;
  return writtenText;
};

compareText = function () {
  var writtenText = typeFollow();
  var expectedText = document.getElementById("expectedText").value;
  if (writtenText === expectedText) {
    return "True";
  } else {
    return "False";
  }
};

function bindListenersForInputBox(inputBox) {
  inputBox.addEventListener("input", compareText);
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

