// that the typefollow function returns a success or failure based on key input
// if it's a success it moves on to next character of word
// if it's a failure it keeps the same character expectation
// the timer starts
// the timer ends
// alert sounds when end of sentence text is reached
// alert tells wpm
alert('Hi I\'m here!');


// describe("Type follow", function() {
//   it ("return a letter", function() {
//     expect(typeFollow()).toMatch(/./);
//   });
// });


describe("Type follow", function() {
  it ("returns a success with letter 'm' given and expected", function() {
    expect(typeFollow(77)).andReturn("Success! You typed 'm'!");
  });
});
