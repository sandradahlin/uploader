import * as utils from "./textProcess";

describe("textProcess utilities", () => {
  it("gives correct result when processWordsInText is called", () => {
    const result = utils.processWordsInText("hej hej test teeeeest hej");
    expect(result.longestWords[0]).toBe("teeeeest");
    expect(result.mostCommonCharacter[0]).toBe("e");
    expect(result.totalWords).toBe(5);
    expect(result.mostCommonWords[0]).toBe("hej");
  });

  it("gives correct result when processWordsInText is called with several common words", () => {
    const result = utils.processWordsInText(
      "hej hej test teeeeest hej test test"
    );
    expect(result.mostCommonWords[0]).toBe("hej");
    expect(result.mostCommonWords[1]).toBe("test");
  });

  it("gives correct result when processWordsInText is called with several common letters", () => {
    const result = utils.processWordsInText("aaa eee");
    expect(result.mostCommonCharacter[0]).toBe("a");
    expect(result.mostCommonCharacter[1]).toBe("e");
  });

  it("gives correct result when processWordsInText is called with several longest words", () => {
    const result = utils.processWordsInText("teeeest heeeejj");
    expect(result.longestWords[0]).toBe("teeeest");
    expect(result.longestWords[1]).toBe("heeeejj");
  });

  it("gives correct result when processWordsInText is called with several longest words", () => {
    const result = utils.processWordsInText("teeeest heeeejj");
    expect(result.longestWords[0]).toBe("teeeest");
    expect(result.longestWords[1]).toBe("heeeejj");
  });

  const list = [
    "hello",
    "this",
    "is",
    "a",
    "test",
    "file",
    "meant",
    "to",
    "test",
    "this",
    "test",
    "application",
  ];

  it("finds the most common and longest word correctly", () => {
    const result = utils.findMostCommonAndLongestWord(list);
    expect(result.longestWords[0]).toEqual("application");
    expect(result.mostCommonWords[0]).toEqual("test");
  });

  it("returns null if no wordList when calling findMostCommonAndLongestWord", () => {
    const result = utils.findMostCommonAndLongestWord();
    expect(result).toEqual(null);
  });

  it("finds the most common character correctly", () => {
    const result = utils.calculateMostCommonCharacter(list);
    expect(result[0]).toBe("t");
  });
});

// characters wrong
