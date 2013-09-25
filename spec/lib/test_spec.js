describe ("test", function() { 
  beforeEach(function () {
    var input = document.createElement('input')
    input.id = 'test_Id'
    document.body.appendChild('input')
  });

  afterEach(function () {
    document.body.removeChild('input')
  });
  it ("changes to a button", function() {
    test_function();
    expect(input.type).toEqual('button'); 
  });

  it ("has child", function() {
    expect(document.body.firstElementChild).toEqual('input');
  });
});
