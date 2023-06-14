import { useRef, useEffect } from "react";
import { useAppContext } from "../../hooks/useAppContext";
import Title from "../Title";
import Divider from "../Divider";
import { StyledTextRenderer } from "./TextRenderer.styled";

/**
 * TextRenderer component process and renders the uploaded file's
 * text content. It also replaced the uploaded file with the
 * processed text content after the analysis is done.
 */
function TextRenderer() {
  const { currentFile, processText, replacedText, analyseFile, reset } =
    useAppContext();

  const paragraphRef = useRef(null);

  const readFile = () => {
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      (event) => {
        paragraphRef.current.innerText = reader.result;
        processText(reader.result);
      },
      false
    );
    reader.readAsText(currentFile);
  };

  useEffect(() => {
    readFile();
  }, [currentFile]);

  useEffect(() => {
    paragraphRef.current.innerText = replacedText;
  }, [replacedText]);

  return (
    <StyledTextRenderer>
      <Divider />
      <Title title="Your file" />
      <p ref={paragraphRef}></p>
      <Divider />
    </StyledTextRenderer>
  );
}

export default TextRenderer;
