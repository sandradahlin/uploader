import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import DragAndDrop from "./components/DragAndDrop";
import FileDetails from "./components/FileDetails";
import TextRenderer from "./components/TextRenderer";
import FileList from "./components/FileList";
import { useAppContext } from "./context";
import { AppWrapper, StyledFlexWrapper } from "./containers/containers.styled";
import Title from "./components/Title";
import Button from "./components/Button";
import Home from "./pages/Home";
import Details from "./pages/Details";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import Empty from "./pages/Empty";
import { ROUTES } from "./routes";

function App() {
  const { loading } = useAppContext();

  return (
    <Router>
      {loading && <SplashScreen />}
      <Routes>
        <Route exact path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.details} element={<Details />} />
        <Route path="/*" element={<Empty />} />
      </Routes>
    </Router>
  );
}

export default App;
