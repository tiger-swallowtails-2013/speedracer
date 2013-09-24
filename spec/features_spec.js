describe ('timer', function(){
  var input;
  beforeEach(function() {
    input = document.createElement('textarea');
    input.id = "inputBox";
    document.body.appendChild(input);
    bindListenersForInputBox(input);
  });

  afterEach(function() {
    document.body.removeChild(input);
  });
  it ('records start time on first keypress', function() {
    expect(startTimer()).not.toBeNull();
  });

  it ('records end time at completion of text', function() {
    expect(endTimer()).not.toBeNull();
  });

  it ('the end time is greater than the start time', function() {
    expect(startTimer()).toBeLessThan(endTimer());
  });
});
