/**
 * Calculates total number of words.
 * @param {object} wordList
 * @returns {number} total number of words
 */
export const calculateTotalWords = (wordList) => {
  let numberOfWords = Object.values(wordList).reduce(
    (partialSum, a) => partialSum + a,
    0
  );
  return numberOfWords;
};

/**
 * Calculates most common character(s).
 * @param {object} wordList
 * @returns {strin[g]} most common character(s)
 */
export const calculateMostCommonCharacter = (wordList) => {
  const joinedList = wordList.join("");
  let characterCount = {};
  // character count
  for (let i of joinedList) {
    if (!characterCount[i]) {
      characterCount[i] = 1;
    } else {
      characterCount[i]++;
    }
  }
  const sorted = Object.entries(characterCount).sort(function (a, b) {
    return b[1] - a[1];
  });

  const mostCommonCharacters = [];
  const maxOccurence = sorted[0][1];

  // if there are several words are occur in the text
  // same number of times, add these words to the created
  // array
  for (const character of sorted) {
    if (character[1] === maxOccurence) {
      mostCommonCharacters.push(character[0]);
    }
  }

  return mostCommonCharacters;
};

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
  console.log("hhj*******");
  // Create object to keep the word and the number of
  // occurrence in key/value pairs. Same goes for length.
  let wordCount = {};
  let wordLength = {};
  let characters = 0; // total characters

  if (!wordList) {
    return null;
  }
  // if no word added yet, add to the object.
  // if the word is already in the object, increase its
  // occurrence.
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

  return { mostCommonWords, longestWords, characters };
};

/**
 * Splits uploaded text into array of individual words and
 * replaces special characters and spaces
 * @param {string} uploadedText
 * @returns {object}
 */

export const processWordsInText = (uploadedText) => {
  const wordList = uploadedText.split(" ").map((word) => {
    word = word.replace(/[^\w\s\r\n]/gi, "");
    word = word.replace(/(\r\n|\n|\r)/gm, "");
    word = word.replace(/[0-9]/g, "");
    word = word.toLowerCase();

    return word;
  });

  const filteredList = wordList.filter((word) => !!word);
  // BUG - HELLO THIS MERGED INTO HELLOTHIS
  const result = findMostCommonAndLongestWord(filteredList);
  const totalWords = filteredList.length;
  const mostCommonCharacter = calculateMostCommonCharacter(filteredList);

  return { ...result, totalWords, mostCommonCharacter };
};
