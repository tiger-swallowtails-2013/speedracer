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