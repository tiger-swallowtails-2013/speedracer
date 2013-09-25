describe ('timer', function(){
  var input;
  beforeEach(function() {
    timer = new Timer(); //determine way to pass in timer to bindListeners func so don't have to name timer same variable name as in production?
    input = document.createElement('textarea');
    input.id = "inputBox";
    document.body.appendChild(input);
    bindListenersForInputBox(input);
  });

  afterEach(function() {
    document.body.removeChild(input);
  });
  it ('records start time on first keypress', function() {
    input.dispatchEvent(new Event('keypress'));
    expect(timer.startTime).toBeDefined;
  });

  it('start time should not be defined when timer has not started', function() {
    expect(timer.startTime).toBeUndefined;
  });

  it ('end time should be a number', function() {
    expect(timer.endTimer()).toMatch(/\d+/);
  });

  // write test for end timer trigger

  it ('calculates the difference in time', function() {
    timer.startTime = 0;
    timer.endTime = 10;
    expect(timer.calculateTime()).toEqual(10);
  });
});
