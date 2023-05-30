import "./App.css";
import DragAndDrop from "./components/DragAndDrop";
import FileDetails from "./components/FileDetails";
import TextRenderer from "./components/TextRenderer";
import FileList from "./components/FileList";
import { useAppContext } from "./hooks/useAppContext";
import { AppWrapper, StyledFlexWrapper } from "./containers/containers.styled";
import Title from "./components/Title";
import Button from "./components/Button";

function App() {
  const { files, currentFile, fileAnalysed, analyseFile } = useAppContext();
  return (
    <AppWrapper>
      <Title title="Welcome to file uploader" main />
      <StyledFlexWrapper flip>
        {files && <FileList />}
        <DragAndDrop />
      </StyledFlexWrapper>
      {currentFile && (
        <Button text="Analyze my file" primary wide handleClick={analyseFile} />
      )}
      <StyledFlexWrapper>
        {currentFile && <TextRenderer />}
        {fileAnalysed && <FileDetails />}
      </StyledFlexWrapper>
    </AppWrapper>
  );
}

export default App;
