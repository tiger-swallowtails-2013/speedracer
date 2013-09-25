describe ('word_highlight', function(){
  var text;
  var sentence;
  beforeEach(function(){
    text = document.createElement('p');
    text.id = "text_to_type";
    text.innerHTML = "type these words";
    sentence = [text.innerHTML.split(" ")];
    console.log(sentence);
    document.body.appendChild(text);
  });
  afterEach(function(){
    document.body.removeChild(text);
  });

  it ('highlight first word', function(){
    // document.getElementById("text_to_type").style.color = "green";
    changeColor();
    expect(text.style.color).toBe('green');
  });

  xit ('highlight subsequent word after previous word is typed correctly')
});

describe ('show_typing_error', function(){
  
});
