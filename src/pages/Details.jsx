import FileDetails from "../components/FileDetails/FileDetails";
import TextRenderer from "../components/TextRenderer/TextRenderer";
import { useAppContext } from "../context";
import Navbar from "../components/Navbar";
import { StyledFlexWrapper } from "../containers/containers.styled";

function Details() {
  const { fileAnalysed, modalVisible, currentFile } = useAppContext();

  if (!currentFile) {
    window.location = "/";
    return;
  }
  return (
    <>
      <StyledFlexWrapper>
        <Navbar />
        <TextRenderer />
      </StyledFlexWrapper>
      {fileAnalysed && modalVisible && <FileDetails />}
    </>
  );
}

export default Details;
