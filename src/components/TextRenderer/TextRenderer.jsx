import { useRef, useEffect } from "react";
import { useAppContext } from "../../hooks/useAppContext";
import Title from "../Title";
import Button from "../Button";
import {StyledTextRenderer} from './TextRenderer.styled'

function TextRenderer() {
  const { currentFile, processText } = useAppContext();

  const paragraphRef = useRef(null);

  const readFile = () => {
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      (event) => {
        paragraphRef.current.innerText = reader.result;
        processText(reader.result)
      },
      false
    );
    reader.readAsText(currentFile);
  };

  useEffect(() => {
    readFile();
  }, [currentFile]);

  return (
    <StyledTextRenderer>
      <Title title="Your file" />
      <p ref={paragraphRef}></p>
    </StyledTextRenderer>
  );
}

export default TextRenderer;
