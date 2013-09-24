function typeFollow(event) {
  if (String.fromCharCode(event.charCode) === 'm') {
    console.log("Success! You typed 'm'!");
  } else {
    console.log("Fail! You did not type 'm'!");
  }
// console.log(result);
}

function startTimer(event) {
  var startTime = new Date().getTime();
  inputBox.removeEventListener("keypress", startTimer);
}


function bindListenersForInputBox(inputBox) {
  inputBox.addEventListener("keypress", typeFollow);
  inputBox.addEventListener("keypress", startTimer);
}

document.addEventListener('readystatechange', function (e) {
  console.log(e);
  console.log(document.readyState);
});
