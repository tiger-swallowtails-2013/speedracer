function StringHandler(){
  var strings = {};
  var that = this;
  this.initialize = function(original_string){
    strings.past_text = "";
    strings.current_word = "";
    strings.future_text = original_string;
    this.shift();
    this.updateDom();
  };
  this.updateDom = function(){
    document.getElementById("inputBox").value="";
    this.placeText(strings.past_text,"past");
    this.placeText(strings.current_word,"current");
    this.placeText(strings.future_text,"future");
  }
  this.placeText = function(text, location){
    document.getElementById(location).innerText = text;
  }
  this.evaluate = function(){
    if (that.compareText(strings.current_word)){
      if(that.shift() === false){
        that.updateDom()
        return false
      }
      that.updateDom()
    }
  };
  this.compareText = function(word){
    var inputText = document.getElementById('inputBox').value;
    if (inputText === word) {
      return true;
    }
  }
  this.shift = function(){
    var i = strings.future_text.indexOf(" ");
    
    if(strings.future_text === ""){
      document.getElementById("inputBox").value="";
      strings.past_text += strings.current_word;
      strings.current_word = ""
      return false;
    }
    if (i === -1){ 
      strings.past_text += strings.current_word;
      strings.current_word = strings.future_text;
      strings.future_text = "";
    } 
    else {
      strings.past_text += strings.current_word;
      strings.current_word = strings.future_text.substring(0,i+1);
      strings.future_text = strings.future_text.substring(i+1,strings.future_text.length);
    }
  };
};

