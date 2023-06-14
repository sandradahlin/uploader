import FileDetails from "../components/FileDetails/FileDetails";
import TextRenderer from "../components/TextRenderer/TextRenderer";
import { useAppContext } from "../hooks/useAppContext";
import Navbar from "../components/Navbar";
import { StyledFlexWrapper } from "../containers/containers.styled";

function Details() {
  const { fileAnalysed, modalVisible } = useAppContext();

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
