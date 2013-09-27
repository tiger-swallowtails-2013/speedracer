// describe ('word_highlight', function(){
//   var text, span1;
//   beforeEach(function(){
//     span1 = document.createElement('span');
//     span1.id = "word1";
//     span1.innerHTML = "type";
//     document.body.appendChild(span1);
//     span2 = document.createElement('span');
//     span2.id = "word2";
//     span2.innerHTML = "these";
//     document.body.appendChild(span2);
//   });
//   afterEach(function(){
//     document.body.removeChild(span1);
//     document.body.removeChild(span2);
//   });

//   it ('highlight first word', function(){
//     changeColor(1);
//     expect(span1.style.color).toBe('green');
//   });

//   it ('highlight subsequent word after previous word is typed correctly', function(){
//     changeColor(2);
//     expect(span2.style.color).toBe('green');
//   });

//   it ('return previous word to original color', function(){
//     changeColor(2);
//     expect(span1.style.color).toBe('black');
//   });
// });

// describe ('gameplay', function(){
//   beforeEach(function())
//   it ('gets the first word'){
//     // currentSentence = "type this stuff"
//     // document.createElement('span')
//   }
//   it ('shifts current_word into past_text'){}
//   it ('shifts new current_word from future_text'){}
//   it ('maintains continuity of original text'){}
// });

describe ('endgame', function(){
  it ('does not have a current_word', function(){
    var inputBox = document.createElement("inputBox")
    inputBox.id = "inputBox";
    document.body.appendChild(inputBox)
    var pastWord = document.createElement("span")
    pastWord.id = "past";
    document.body.appendChild(pastWord);
    var currentWord = document.createElement("span");
    currentWord.id = "current";
    document.body.appendChild(currentWord);
    var futureWord = document.createElement("span")
    futureWord.id = "future";
    document.body.appendChild(futureWord);
    var stringHandler = new StringHandler();
    stringHandler.initialize("A Test String");
    stringHandler.shift()
     stringHandler.shift()
      stringHandler.shift()
      stringHandler.updateDom()
    expect(currentWord.innerText).toEqual("")
  });
  it ('displays the users time', function(){
    var timeDisplay = document.createElement("span")
    timeDisplay.id = "time"
    document.body.appendChild(timeDisplay)
    var timer = new Timer()
    timer.startTimer()
    timer.endTimer()
    timeCalc = timer.calculateTime()
    timeDisplay.innerText = timeCalc
    expect(timeDisplay.innerText).toMatch(/\d*/)
    // this passes if the removeEventListener in Timer.startTimer is commented out
  });
});

describe ('restartgame', function(){
  it ('clears the input field', function(){});
  it ('clears the time display', function(){});
  it ('clears the past_text span element', function(){});
  it ('populates the future_text span element', function(){});
});
