import "./App.css";
import DragAndDrop from "./components/DragAndDrop";
import TextRenderer from "./components/TextRenderer";
import { useAppContext } from "./hooks/useAppContext";

function App() {
  const { currentFile, setFile } = useAppContext();
  return (
    <div className="App">
      <h1>Drag and drop file</h1>
      <DragAndDrop />
      {currentFile && <TextRenderer />}
    </div>
  );
}

export default App;
