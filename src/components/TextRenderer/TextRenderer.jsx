import { useRef, useEffect } from "react";
import { useAppContext } from "../../hooks/useAppContext";
import Title from "../Title";
import Button from "../Button";
import {StyledTextRenderer} from './TextRenderer.styled'

function TextRenderer() {
  const { currentFile, analyseFile } = useAppContext();

  const paragraphRef = useRef(null);

  const readFile = () => {
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      (event) => {
        paragraphRef.current.innerText = reader.result;
        console.log(paragraphRef);
      },
      false
    );
    reader.readAsText(currentFile);
  };

  const handleFileAnalyse = () => {
    analyseFile();
  };

  useEffect(() => {
    readFile();
  }, []);

  return (
    <StyledTextRenderer>
      <Title title="Your file" />
      <p ref={paragraphRef}></p>
    </StyledTextRenderer>
  );
}

export default TextRenderer;
