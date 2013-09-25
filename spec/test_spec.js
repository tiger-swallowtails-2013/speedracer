describe ("test", function() { 
  beforeEach(function () {
    input = document.createElement('input')
    input.id = 'test_Id'
    document.body.appendChild(input)
  });

  afterEach(function () {
    document.body.removeChild(input)
  });

  it ("changes to a button", function() {
    test_function();
    input.dispatchEvent(new Event('click'));
    expect(input.type).toEqual('button'); 
  });
});
