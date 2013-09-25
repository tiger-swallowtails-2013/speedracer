describe ('typing in box', function() {
  var inputBox; var expectedText;

  beforeEach ( function() {
    inputBox = document.createElement('input');
    inputBox.id = 'inputBox';
    document.body.appendChild(inputBox);
    inputBox.value = "I'm the inputbox!";
    expectedText = document.createElement('p');
    expectedText.id = "expectedText";
    expectedText.value = "work damn it!"
    bindListenersForInputBox(inputBox);
  });

  afterEach (function() {
    document.body.removeChild(inputBox);
  });
  
  it ('tracks what we have typed', function() {
    inputBox.dispatchEvent(new Event('input'));
    expect(typeFollow()).toEqual(inputBox.value);
  });

  it ('returns true if written text matches expected', function() {
    expectedText.value = "I'm the inputbox!";
    document.body.appendChild(expectedText);
    inputBox.dispatchEvent(new Event('input'));
    expect(compareText()).toEqual('True');
    document.body.removeChild(expectedText);
  });

  it ('returns false if written text does not match expected', function() {
    expectedText.value = "I'm not the inputbox!";
    document.body.appendChild(expectedText);
    inputBox.dispatchEvent(new Event('input'));
    expect(compareText()).toEqual('False');
    document.body.removeChild(expectedText);
  }); //it
}); //context

