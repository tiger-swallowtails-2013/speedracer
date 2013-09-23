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

  document.getElementById("test").innerHTML = keys_pressed.join("");
  console.log(keys_pressed)
}

