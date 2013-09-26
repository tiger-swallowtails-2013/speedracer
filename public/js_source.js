var spot = 0

var moveImage = function() {
  var carElement = document.getElementById("car");
  var carLocation = carElement.style.left;
  console.log(carLocation)
  spot += 100
  carLocation = spot + "px"
  console.log(carLocation)
  carElement.style.left = carLocation;
  trackLength = screen.width
  wordsToWrite = document.getElementById("expectedText").innerHTML
  console.log(wordsToWrite)
};

compareText = function(word){
  inputText = document.getElementById('inputBox').value;
  if (inputText === word) {
    return true;
  } 
};

function bindListenersForInputBox(inputBox, game) {
  inputBox.addEventListener("input", game.checkUserInput);
  inputBox.addEventListener("keypress", timer.startTimer);
}

function Timer() {
  var log = {}

  this.startTimer= function(event) {
    startTime = new Date().getTime();
    inputBox.removeEventListener("keypress", timer.startTimer);
    log.startTime = startTime;
  };

  this.endTimer= function() {
    endTime = new Date().getTime();
    log.endTime = endTime;
  };

  this.calculateTime= function(){
    return log.endTime - log.startTime;
  };
};

