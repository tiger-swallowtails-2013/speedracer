// in order to a given and an expected beyond hardcoding them 
// we need a user input

// type follow is dealing with char characters; 
//create function to handle that separately

var typeFollow = function(charCodes, expectedWord) {
  var feedbackStr = ""
  for(var i = 0; i < charCodes.length; i++){
    if (String.fromCharCode(charCodes[i]) != expectedWord[i]) {
      feedbackStr += "Fail!";
    } 
    else {
    feedbackStr += "Success!";
    }
  }
  return feedbackStr
};


