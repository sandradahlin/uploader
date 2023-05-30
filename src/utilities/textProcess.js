/**
 * Loops through the given word list and finds the most
 * common and the longest word. If several words have the same
 * occurrence / length in the text, then several words are
 * returned. Returns also total number of characters of the
 * words.
 * @param {string[]} wordList
 * @returns {object}
 */

export const findMostCommonAndLongestWord = (wordList) => {
  // Create object to keep the word and the number of
  // occurrence in key/value pairs. Same goues for length
  let wordCount = {};
  let wordLength = {};
  let characters = 0; // total characters

  if (!wordList) {
    return null;
  }
  // if no word added yet, add to the object
  // if the word is already in the object, increase its
  // occurrence
  for (const word of wordList) {
    if (!wordCount[word]) {
      characters = characters + word.length;
      wordCount[word] = 1;
      wordLength[word] = word.length;
    } else {
      wordCount[word]++;
    }
  }

  // sort the word list in descending order
  const sorted = Object.entries(wordCount).sort(function (a, b) {
    return b[1] - a[1];
  });

  const sortedLength = Object.entries(wordLength).sort(function (a, b) {
    return b[1] - a[1];
  });

  const maxOccurence = sorted[0][1];
  const maxLength = sortedLength[0][1];

  const mostCommonWords = [];
  const longestWords = [];

  // if there are several words are occur in the text
  // same number of times, add these words to the created
  // array
  for (const word of sorted) {
    if (word[1] === maxOccurence) {
      mostCommonWords.push(word[0]);
    }
  }
  // if there are several wordsthat have the same length,
  // add these words to the created array
  for (const word of sortedLength) {
    if (word[1] === maxLength) {
      longestWords.push(word[0]);
    }
  }
console.log(characters);
  return { mostCommonWords, longestWords, characters };
};

/**
 * Splits uploaded text into array of individual words and
 * replaces special characters and spaces
 * @param {string} uploadedText
 * @returns {object}
 */

export const processWordsInText = (uploadedText) => {
  console.log(uploadedText, "tobe processed");
  const wordList = uploadedText.split(" ").map((word) => {
    word = word.replace(/[^\w\s\r\n]/gi, "");
    word = word.replace(/(\r\n|\n|\r)/gm, "");
    word = word.replace(/[0-9]/g, "");
    word = word.toLowerCase();
    return word;
  });

  const filteredList = wordList.filter((word) => !!word);
  const result = findMostCommonAndLongestWord(filteredList);

  return result;
};
