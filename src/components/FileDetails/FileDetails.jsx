import { useEffect, useState } from "react";
import { useAppContext } from "../../hooks/useAppContext";
import Title from "../Title";
import { processWordsInText } from "../../utilities/textProcess";
import { StyledFileDetails } from "./FileDetails.styled";

/**
 * FileDetails component show the detail of the uploaded
 * file such as the most common word(s), longest word(s),
 * total number of words, total number of charactres and
 * the most common character.
 */
function FileDetails() {
  const { processedText, replaceText } = useAppContext();

  const [mostCommonWord, setMostCommonWord] = useState([]);
  const [longestWord, setLongestWord] = useState([]);
  const [totalWords, setTotalWords] = useState(0);

  const [totalCharacters, setTotalCharacters] = useState(0);
  const [mostCommonCharacter, setMostCommonCharacter] = useState([]);

  useEffect(() => {
    const {
      mostCommonWords,
      longestWords,
      characters,
      totalWords,
      mostCommonCharacter,
    } = processWordsInText(processedText);
    console.log(characters);
    setMostCommonWord(mostCommonWords);
    setLongestWord(longestWords);
    setTotalWords(totalWords);
    setTotalCharacters(characters);
    setMostCommonCharacter(mostCommonCharacter);
    // TODO: replace several words
    const replaced = processedText
      .toLowerCase()
      .replaceAll(mostCommonWords[0], `foo${mostCommonWords[0]}bar`);
    replaceText(replaced);
  }, [processedText]);
  // TODO: add loader
  return (
    <StyledFileDetails>
      <Title title="File details" />
      <div>
        Most common word:{" "}
        {mostCommonWord.map((word) => (
          <span>{word} </span>
        ))}
      </div>
      <div>
        Longest word:{" "}
        {longestWord.map((word) => (
          <span>{word} </span>
        ))}
      </div>
      <div>
        Total words: <span>{totalWords}</span>
      </div>
      <div>
        Total characters: <span>{totalCharacters}</span>
      </div>
      <div>
        Most common character:
        {mostCommonCharacter.map((character) => (
          <span>{character} </span>
        ))}
      </div>
    </StyledFileDetails>
  );
}

export default FileDetails;
