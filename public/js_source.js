function MoveImage() {
  var idealPace;
  var pace = 0;
  var carLocation = 0;
  var spot = 0;

  this.moveImage = function() {
    var carElement = document.getElementById("car");
    var carLocation = carElement.style.left;
    spot += idealPace;
    carLocation = spot + "px";
    carElement.style.left = carLocation;
  };

  this.countTotalExpectedWords = function () {
    var currentArray = [];
    var total_words = 0;
    currentWord = document.getElementById("current").innerHTML;
    futureWords = document.getElementById("future").innerHTML;
    currentArray.push(currentWord);
    currentArray.push(futureWords.split(" "));
    total_words = 1 + currentArray[1].length;
    return total_words;
  };

  this.calculateIdealCarPace = function () {
    trackLength = screen.width
    idealPace = trackLength/this.countTotalExpectedWords();
    return idealPace
  }
};


compareText = function(word){
  inputText = document.getElementById('inputBox').value;
  if (inputText === word) {
    imageMovement.moveImage();
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

