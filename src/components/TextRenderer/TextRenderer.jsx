import { useRef, useEffect } from "react";
import { useAppContext } from "../../hooks/useAppContext";
import Title from "../Title";

function TextRenderer() {
  const { currentFile } = useAppContext();

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
    const a = reader.readAsText(currentFile);
  };

  useEffect(() => {
    // Your code here
    readFile();
  }, []);
  return (
    <>
      <button>Analyze my file</button>
      <Title title="Your file" />
      <p ref={paragraphRef}></p>
    </>
  );
}

export default TextRenderer;
