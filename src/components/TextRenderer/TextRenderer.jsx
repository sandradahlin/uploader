import { useRef, useEffect } from "react";
import { useAppContext } from "../../context";
import Title from "../Title";
import Divider from "../Divider";
import { StyledTextRenderer } from "./TextRenderer.styled";

/**
 * TextRenderer component process and renders the uploaded file's
 * text content. It also replaced the uploaded file with the
 * processed text content after the analysis is done.
 */
function TextRenderer() {
  const { replacedText, processedText } = useAppContext();

  const paragraphRef = useRef(null);

  useEffect(() => {
    paragraphRef.current.innerText = replacedText;
  }, [replacedText]);

  useEffect(() => {
    paragraphRef.current.innerText = processedText;
  }, [processedText]);

  
  useEffect(() => {
    if(processedText.length === 0){
      paragraphRef.current.innerText = "Text file empty";
    }
  }, []);

  return (
    <StyledTextRenderer data-testid="text-renderer">
      <Divider />
      <Title title="Your file" />
      <p ref={paragraphRef} data-testid="uploaded-text-content"></p>
      <Divider />
    </StyledTextRenderer>
  );
}

export default TextRenderer;
