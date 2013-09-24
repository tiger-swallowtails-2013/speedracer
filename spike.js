//the text box should call up a function and within that function there is the word/sentece/paragraph we're trying to write; when letter typed is the correct on, turn green and move forward, when incorrect one, turn red and stay place until a backspace followed by the correct letter is done...then move forward.

//2 options: js for loop which feeds us the correct letter, compares it to user input, and then moves forward or not and colors or not based on that OR
//two local variables within the function that dictate where we are in the word and the word itself


var word = ["w", "o", "r", "d", " ", "o", "n", "e"]
var currentIndex = 0
// var typedChar = ""

function restart() {
  document.getElementById('box').setAttribute("type", "text")
  document.getElementById('box').value = ""
  printText()
  currentIndex = 0
}

typingFunction = function(event) {
  var typedChars = document.forms["input"]["box"].value

  if (typedChars.length < word.slice(0, currentIndex+1).length){
    currentIndex--
    currentIndex--
  }
  var currentLetter = word[currentIndex]
  if (currentIndex === (word.length-1)) {
    if (typedChars[typedChars.length-1] === currentLetter) {
      document.getElementById('box').style.backgroundColor="white"
      document.getElementById('text').innerHTML = "You're done!"
      document.getElementById('box').value = "play again"
      document.getElementById('box').setAttribute("type", "button")
    } 
    else {
      document.getElementById('box').style.backgroundColor="red"
    }
  }
  else {
    if (typedChars === word.slice(0, currentIndex+1).join("")) {
      currentLetter = word[currentIndex]
      document.getElementById('box').style.backgroundColor="white"
    } 
    else {
      document.getElementById('box').style.backgroundColor="red"
    }
    if (typedChars.length === word.slice(0, currentIndex+1).length) {
      currentIndex += 1
    }
  }
}

function printText() {
  document.getElementById("text").innerHTML = word.join("")
}
