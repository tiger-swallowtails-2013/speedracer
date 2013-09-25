function changeColor(wordNum){
  document.getElementById("word" + wordNum).style.color = "green";
  if (wordNum >= 2){
    document.getElementById("word" + (wordNum-1)).style.color = "black";
  }
}

// function selectWord(wordNum){
//   for(var i = 1; i < 4; i++){
//     changeColor(i);
//   }
// }
