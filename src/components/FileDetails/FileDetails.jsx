import { useEffect, useState } from "react";
import { useAppContext } from "../../hooks/useAppContext";
import Title from "../Title";
import { processWordsInText } from "../../utilities/textProcess";
import { StyledFileDetails } from "./FileDetails.styled";

function FileDetails() {
  const { processedText, replaceText } = useAppContext();

  const [mostCommonWord, setMostCommonWord] = useState([]);
  const [longestWord, setLongestWord] = useState([]);

  useEffect(() => {
    const { mostCommonWords, longestWords } = processWordsInText(processedText);
    setMostCommonWord(mostCommonWords);
    setLongestWord(longestWords);
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
          <span>{word}</span>
        ))}
      </div>
      <div>
        Longest word:{" "}
        {longestWord.map((word) => (
          <span>{word}</span>
        ))}
      </div>
    </StyledFileDetails>
  );
}

export default FileDetails;
