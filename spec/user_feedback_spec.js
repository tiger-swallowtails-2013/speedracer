describe ('word_highlight', function(){
  var text, span1;
  beforeEach(function(){
    span1 = document.createElement('span');
    span1.id = "word1";
    span1.innerHTML = "type";
    document.body.appendChild(span1);
    span2 = document.createElement('span');
    span2.id = "word2";
    span2.innerHTML = "these";
    document.body.appendChild(span2);
  });
  afterEach(function(){
    document.body.removeChild(span1);
    document.body.removeChild(span2);
  });

  it ('highlight first word', function(){
    changeColor(1);
    expect(span1.style.color).toBe('green');
  });

  it ('highlight subsequent word after previous word is typed correctly', function(){
    changeColor(2);
    expect(span2.style.color).toBe('green');
  });

  it ('return previous word to original color', function(){
    changeColor(2);
    expect(span1.style.color).toBe('black');
  });
});

describe ('placeText', function(){
  beforeEach(function())

  it ('gets the first word'){

  }
  it ('shifts current_word into past_text'){}
  it ('shifts new current_word from future_text'){}
  it ('maintains continuity of original text'){}
});

