//the text box should call up a function and within that function there is the word/sentece/paragraph we're trying to write; when letter typed is the correct on, turn green and move forward, when incorrect one, turn red and stay place until a backspace followed by the correct letter is done...then move forward.

//2 options: js for loop which feeds us the correct letter, compares it to user input, and then moves forward or not and colors or not based on that OR
//two local variables within the function that dictate where we are in the word and the word itself


typingFunction = function(event) {
  if (event.charCode === 87) {
    console.log("success");
    console.log(event.charCode)
  } else {
    console.log("failure");
    console.log(event.charCode)
  }
}
//typingFunction = function(event) {
//   if event.charCode == "87" {
//     alert("you're correct")
//   } else {
//     alert("type a W")
//   }
// }

