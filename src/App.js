import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import DragAndDrop from "./components/DragAndDrop";
import FileDetails from "./components/FileDetails";
import TextRenderer from "./components/TextRenderer";
import FileList from "./components/FileList";
import { useAppContext } from "./hooks/useAppContext";
import { AppWrapper, StyledFlexWrapper } from "./containers/containers.styled";
import Title from "./components/Title";
import Button from "./components/Button";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
  const { files, currentFile, fileAnalysed, analyseFile } = useAppContext();
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
