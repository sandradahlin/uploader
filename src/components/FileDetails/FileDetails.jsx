import { useEffect, useState } from "react";
import { useAppContext } from "../../hooks/useAppContext";
import Title from "../Title";
import { processWordsInText } from "../../utilities/textProcess";
import { StyledFileDetails, StyledIcon,StyledWord } from "./FileDetails.styled";

/**
 * FileDetails component show the detail of the uploaded
 * file such as the most common word(s), longest word(s),
 * total number of words, total number of charactres and
 * the most common character.
 */
function FileDetails() {
  const { processedText, replaceText,toggleModal } = useAppContext();

  const [mostCommonWord, setMostCommonWord] = useState([]);
  const [longestWord, setLongestWord] = useState([]);
  const [totalWords, setTotalWords] = useState(0);

  const [totalCharacters, setTotalCharacters] = useState(0);
  const [mostCommonCharacter, setMostCommonCharacter] = useState([]);

  const closeModal = () => {
    toggleModal();
  }
  useEffect(() => {
    console.log("hej", processedText);

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
    // TODO: replace several words
    const replaced = processedText
      .toLowerCase()
      .replaceAll(mostCommonWords[0], `foo${mostCommonWords[0]}bar`);
    replaceText(replaced);
  }, [processedText]);
  // TODO: add loader
  return (
    <>
      <StyledFileDetails>
      <StyledIcon className="fa-solid fa-x" onClick={closeModal}></StyledIcon>
        <Title title="File details" />
        <div>
          Most common word:{" "}
          {mostCommonWord.map((word) => (
            <StyledWord>{word} </StyledWord>
          ))}
        </div>
        <div>
          Longest word:{" "}
          {longestWord.map((word) => (
            <StyledWord>{word} </StyledWord>
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
            <StyledWord>{character} </StyledWord>
          ))}
        </div>
      </StyledFileDetails>
    </>
  );
}

export default FileDetails;
