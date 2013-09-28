function MoveImage() {
  var idealPace;
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
  this.reset = function(){
    carElement.style.left = 0;
    ghostElement.style.left = -300;
    carSpot = 0;
    ghostSpot = 0;
  }
};

function Timer() {
  var that = this;
  this.startTimer= function() {
    that.startTime = new Date().getTime();
    that.previousTime = that.startTime
    inputBox.removeEventListener("keypress", timer.startTimer);
  };
  this.endTimer= function() {
    that.endTime = new Date().getTime();
  };
  this.calculateTime= function(){
    return Math.round((that.endTime - that.startTime)/1000);
  };

  this.rate= function(){
    var currentTime = new Date().getTime();
    var timeChange = currentTime - that.previousTime;
    that.previousTime = currentTime;
    return timeChange
  }
};

