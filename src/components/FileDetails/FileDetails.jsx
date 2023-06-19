import { useEffect, useState } from "react";
import { useAppContext } from "../../context";
import Title from "../Title";
import { processWordsInText } from "../../utilities/textProcess";
import {
  StyledFileDetails,
  StyledIcon,
  StyledWord,
} from "./FileDetails.styled";

/**
 * FileDetails component show the detail of the uploaded
 * file such as the most common word(s), longest word(s),
 * total number of words, total number of charactres and
 * the most common character.
 */
function FileDetails() {
  const { processedText, replaceText, toggleModal } = useAppContext();

  const [mostCommonWord, setMostCommonWord] = useState([]);
  const [longestWord, setLongestWord] = useState([]);
  const [totalWords, setTotalWords] = useState(0);

  const [totalCharacters, setTotalCharacters] = useState(0);
  const [mostCommonCharacter, setMostCommonCharacter] = useState([]);

  const closeModal = () => {
    toggleModal();
  };

  useEffect(() => {
    if (!processedText) {
      return;
    }
    const {
      mostCommonWords,
      longestWords,
      characters,
      totalWords,
      mostCommonCharacter,
    } = processWordsInText(processedText);
    setMostCommonWord(mostCommonWords);
    setLongestWord(longestWords);
    setTotalWords(totalWords);
    setTotalCharacters(characters);
    setMostCommonCharacter(mostCommonCharacter);

    let replaced = processedText;
    for (const commonWord of mostCommonWords) {
      var regexp = new RegExp("\\b" + commonWord + "\\b", "gmi");
      replaced = replaced.replaceAll(regexp, `foo${commonWord}bar`);
    }

    replaceText(replaced);
  }, [processedText]);

  if (!processedText) {
    return;
  }
  return (
    <>
      <StyledFileDetails data-testid="file-details">
        <StyledIcon className="fa-solid fa-x" onClick={closeModal}></StyledIcon>
        <Title title="File details" />
        <div>
          Most common word:{" "}
          {mostCommonWord.map((word) => (
            <StyledWord key={word}>{word}</StyledWord>
          ))}
        </div>
        <div>
          Longest word:{" "}
          {longestWord.map((word) => (
            <StyledWord key={word}>{word} </StyledWord>
          ))}
        </div>
        <div>
          Total words: <StyledWord>{totalWords}</StyledWord>
        </div>
        <div>
          Total characters: <StyledWord>{totalCharacters}</StyledWord>
        </div>
        <div>
          Most common character:
          {mostCommonCharacter.map((character) => (
            <StyledWord key={character}> {character} </StyledWord>
          ))}
        </div>
      </StyledFileDetails>
    </>
  );
}

export default FileDetails;
