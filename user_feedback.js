function changeColor(wordNum){
  // document.getElementById("word" + wordNum).style.color = "green";
  // if (wordNum >= 2){
  //   document.getElementById("word" + (wordNum-1)).style.color = "black";
  // }


}

// function selectWord(wordNum){
//   for(var i = 1; i < 4; i++){
//     changeColor(i);
//   }
// }

function placeText(text, location){
  document.getElementById(location).innerText = text
}


function match(){
  if(match === true){
    shiftWords()
  }

}


function shiftWords(original_string){
  past_text = ""
  past_text += current_word

  i = future_text.indexOf(" ")
  current_word = future_text.substring(0,i)

  future_text = future_text.substring(i,future_text.length)
}


var wordShifter = new shiftWords("this is a string");
if (wordCompare){
  wordShifter.shift
}



// function textSplicer(){
//   past_text: null
//   current_word
//   future_text
// }

function textStorage(){
  var collection = ["The quick brown fox jumped over the lazy dog", "When it rains it pours", "The rain in spain falls mainly on the plain"]
  return collection[Math.floor(Math.random() * collection.length)]
}
