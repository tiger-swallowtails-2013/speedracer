function StringHandler(){
  this.strings = {
    past_text: "",
    current_word: "",
    future_text: this.newGameText()
  };
  this.shift();
  this.updateDom();
  this.compareText = function(inputText){
    if (inputText === this.strings.current_word) {
      return true;
    }
  }
};

StringHandler.prototype.placeText = function(text, location){
    document.getElementById(location).innerText = text;
  }

StringHandler.prototype.updateDom = function(){
    document.getElementById("inputBox").value="";
    this.placeText(this.strings.past_text,"past");
    this.placeText(this.strings.current_word,"current");
    this.placeText(this.strings.future_text,"future");
  }

StringHandler.prototype.newGameText = function(){
  var collection = [
  "The quick brown fox jumped over the lazy dog.",
  "When it rains it pours.",
  "The rain in spain falls mainly on the plain."
  ];
  var n = Math.floor(Math.random() * collection.length)
  return collection[n];
}

StringHandler.prototype.shift = function(){
  var i = this.strings.future_text.indexOf(" ");
  if(this.strings.future_text === ""){
    document.getElementById("inputBox").value="";
    this.strings.past_text += this.strings.current_word;
    this.strings.current_word = ""
    return false;
  }
  if (i === -1){
    this.strings.past_text += this.strings.current_word;
    this.strings.current_word = this.strings.future_text;
    this.strings.future_text = "";
  }
  else {
    this.strings.past_text += this.strings.current_word;
    this.strings.current_word = this.strings.future_text.substring(0,i+1);
    this.strings.future_text = this.strings.future_text.substring(i+1,this.strings.future_text.length);
  }
};
