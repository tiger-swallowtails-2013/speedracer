
var keys_pressed = [];
var test_string = "Type these words";

document.onkeypress = function(event) {

  keys_pressed.push(String.fromCharCode(event.keyCode));

  charCompare()
};

function charCompare(){
  var last_key = keys_pressed[keys_pressed.length-1]
  // console.log(last_key)
  if (last_key === test_string.charAt(0)) {
    document.getElementById("test").innerHTML = "Correct! you typed: " + last_key
    test_string = test_string.slice(1);
  } else {
    document.getElementById("test").innerHTML = "please type a lowercase " + test_string.charAt(0)
  }
    // console.log(test_string)

};
