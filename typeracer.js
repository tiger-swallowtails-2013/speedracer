// function getText()
// {
//   var string = [];
//   document.getElementById("input").addEventListener("keydown", string);
//   console.log(string);
//   if string[0] != nil {
//       document.getElementById("test").innerHTML="chagned"
//     };
// }

// function loadArray(array){
//   var tempArray << array[0]
//   document.getElementById("test").innerHTML=tempArray[0]
// }

// function makeChange(){
//   var string = [];
//   document.getElementById("input").addEventListener("keydown", loadArray(string));

// }

var keys_pressed = []

document.onkeypress = function(event) {

  keys_pressed.push(String.fromCharCode(event.keyCode));

  // document.getElementById("test").innerHTML = keys_pressed.join("");
  // console.log(keys_pressed)
  charCompare()
}

function charCompare(){
  var last_key = keys_pressed[keys_pressed.length-1]
  console.log(last_key)
  // console.log(keys_pressed)
  if (last_key === "a") {
    document.getElementById("test").innerHTML = "Correct! you typed: " + last_key
  } else {
    document.getElementById("test").innerHTML = "please type a lowercase \"a\"!"
  }
}
