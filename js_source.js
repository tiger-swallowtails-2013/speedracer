// in order to a given and an expected beyond hardcoding them 
// we need a user input

// type follow is dealing with char characters; 
//create function to handle that separately

var typeFollow = function(gameTextInput, expectedText) {
  var result = ""
  if (gameTextInput != expectedText) {
    result = "Fail!";
  } 
  else {
    result = "Success!";
  }
  return result
};


var inputReceive = function(){
  // console.log(expectedText = document.getElementById("expectedText"));
  expectedText = document.getElementById("expectedText").innerHTML;
  gameTextInput = document.getElementById("gameTextInput").innerHTML;//.addEventListener("
    // input", typeFollow(input, expectedText));
  return typeFollow(gameTextInput, expectedText);
};
