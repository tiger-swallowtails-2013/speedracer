// that the typefollow function returns a success or failure based on key input
// if it's a success it moves on to next character of word
// if it's a failure it keeps the same character expectation
// the timer starts
// the timer ends
// alert sounds when end of sentence text is reached
// alert tells wpm



describe("Type follow", function() {
  it ("returns a success with letter 'm' given and expected", function() {
    expect(typeFollow(109)).toBe("Success! You typed 'm'!");
  });

  it ("returns a failure with letter 'z' given but not expected", function() {
    expect(typeFollow(122)).toBe("Fail! You did not type 'm'!");
  });
});
