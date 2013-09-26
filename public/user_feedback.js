function placeText(text, location){
  document.getElementById(location).innerText = text;
}

function ShiftWords(){
  var strings = {};
  var that = this;
  this.initialize = function(original_string){
    strings.past_text = "";
    strings.current_word = "";
    strings.future_text = original_string;

    this.shift();
    placeText(strings.past_text,"past");
    placeText(strings.current_word,"current");
    placeText(strings.future_text,"future");
  };
  this.evaluate = function(){
    if (compareText(strings.current_word)){
      if(that.shift() === false){
        //final word remains orange bug
        return false
      }
      document.getElementById("inputBox").value="";
      placeText(strings.past_text,"past");
      placeText(strings.current_word,"current");
      placeText(strings.future_text,"future");
    }
  };
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

