// that the typefollow function returns a success or failure based on key input
// if it's a success it moves on to next character of word
// if it's a failure it keeps the same character expectation
// the timer starts
// the timer ends
// alert sounds when end of sentence text is reached
// alert tells wpm

describe("Type follow", function() {
  it ("returns a success with letter 'm' given and expected", function() {
    expect(typeFollow("m", "m")).toBe("Success!");
    });
});

describe("inputReceive", function() {
    it ("returns a success with letter 'm' given and expected", function() {
    var expectedText = document.createElement("p");
    expectedText.setAttribute("id", "expectedText");
    expectedText.innerHTML = 'm';
    var gameText = document.createElement("p");
    gameText.setAttribute("id", "gameText");
    gameText.innerHTML = 'm';
    console.log(document);
    expect(inputReceive()).toBe("Success!");
    });
});
  // it ("returns a failure with letter 'z' given but not expected", function() {
  //   expect(typeFollow([122], "m")).toBe("Fail!");
  // });

  // it ("returns a success with any letter given and expected", function() {
  //   expect(typeFollow([110], "n")).toBe("Success!");
  // });

  // it ("returns a success with any word given and expected", function() {
  //   var charCodes = [110, 111]
  //   expect(typeFollow(charCodes, "no")).toBe("Success!Success!");
  // });

  // it ("returns feedback on each letter", function() {
  //   var charCodes = [110, 109]
  //   expect(typeFollow(charCodes, "no")).toBe("Success!Fail!");
  // });

  // it ("returns feedback on each letter", function() {
  //   var charCodes = [110, 109]
  //   expect(typeFollow(charCodes, "no")).toBe("Success!Fail!");
  // });
// });

