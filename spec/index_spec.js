describe ('typing in box', function() {
  var inputBox; var expectedText;

  beforeEach ( function() {
    inputBox = document.createElement('input');
    inputBox.id = 'inputBox';
    inputBox.value = "I'm the inputbox!";
    document.body.appendChild(inputBox);
    expectedText = document.createElement('p');
    expectedText.id = "expectedText";
    document.body.appendChild(expectedText);
    bindListenersForInputBox(inputBox);
  });

  afterEach (function() {
    document.body.removeChild(inputBox);
    document.body.removeChild(expectedText);
  });
  
  it ('tracks what we have typed', function() {
    inputBox.dispatchEvent(new Event('input'));
    expect(typeFollow()).toEqual(inputBox.value);
  });

  it ('returns true if written text matches expected', function() {
    expectedText.value = "I'm the inputbox!";
    inputBox.dispatchEvent(new Event('input'));
    expect(compareText()).toEqual('True');
  });

  it ('returns false if written text does not match expected', function() {
    expectedText.value = "I'm not the inputbox!";
    inputBox.dispatchEvent(new Event('input'));
    expect(compareText()).toEqual('False');
  }); //it
}); //context

