import "./App.css";
import DragAndDrop from "./components/DragAndDrop";
import FileDetails from "./components/FileDetails";
import TextRenderer from "./components/TextRenderer";
import { useAppContext } from "./hooks/useAppContext";
import { StyledFlexWrapper } from "./containers/containers.styled";
function App() {
  const { currentFile, setFile, fileAnalysed } = useAppContext();
  return (
    <div className="App">
      <h1>Drag and drop file</h1>
      <StyledFlexWrapper>
        <DragAndDrop />
        {fileAnalysed && <FileDetails />}
      </StyledFlexWrapper>

      {currentFile && <TextRenderer />}
    </div>
  );
}

export default App;
