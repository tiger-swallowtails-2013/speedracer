//the text box should call up a function and within that function there is the word/sentece/paragraph we're trying to write; when letter typed is the correct on, turn green and move forward, when incorrect one, turn red and stay place until a backspace followed by the correct letter is done...then move forward.

//2 options: js for loop which feeds us the correct letter, compares it to user input, and then moves forward or not and colors or not based on that OR
//two local variables within the function that dictate where we are in the word and the word itself


var word = ["w", "o", "r", "d"]
var currentIndex = 0
var currentLetter = word[currentIndex]


typingFunction = function(event) {
  if (currentIndex < word.length) {
      if (String.fromCharCode(event.charCode) === currentLetter) {
      currentIndex += 1
      currentLetter = word[currentIndex]
      document.getElementById('box').style.backgroundColor="white"
    } else {
      document.getElementById('box').style.backgroundColor="red"
    }
  } else {
    alert("You're finished! Wahoo!")
  }
}

function printText() {
  document.getElementById("text").innerHTML = word.join("")
}
