function MoveImage() {
  var idealPace;
  var pace = 0;
  var carLocation = 0;
  var ghostLocation = 0;
  var carSpot = 0;
  var ghostSpot = 0;
  var carElement = document.getElementById("car");
  var ghostElement = document.getElementById("ghost");

  this.moveImage = function() {
    var carLocation = carElement.style.left;
    carSpot += idealPace;
    carLocation = carSpot + "px";
    carElement.style.left = carLocation;

    var ghostLocation = ghostElement.style.left;
    if (ghostSpot === 0) {
      ghostSpot += idealPace - 300;
    }
    else {
      ghostSpot += idealPace + (timer.rate()/45);
    }
    ghostLocation = ghostSpot + "px";
    ghostElement.style.left = ghostLocation;
    if (carSpot - ghostSpot < 50){
      alert("The ghost caught you! Type faster!")
      ghostSpot -= 200
    }
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

  this.calculateIdealPace = function () {
    trackLength = window.innerWidth - (carElement.width)
    idealPace = trackLength/this.countTotalExpectedWords();
    pacePercentageOfWidth = idealPace/trackLength * 100;
    console.log(pacePercentageOfWidth);
    return idealPace
  }
};


compareText = function(word){
  inputText = document.getElementById('inputBox').value;
  if (inputText === word) {
    carMovement.moveImage();
    ghostMovement.moveImage();
    return true;
  } 
};

function bindListenersForInputBox(inputBox, game) {
  inputBox.addEventListener("input", game.checkUserInput);
  inputBox.addEventListener("keypress", timer.startTimer);
}

function Timer() {
  var log = {}
  var previousTime = new Date().getTime()

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

  this.rate= function(){
    var currentTime = new Date().getTime();
    timeChange = currentTime - previousTime;
    previousTime = currentTime;
    return timeChange
  }
};

