import { useAppContext } from "../../hooks/useAppContext";
import { StyledFile } from "./File.styled";

function File({ file }) {
  const { setCurrentFile } = useAppContext();
  const { name } = file;

  return <StyledFile onClick={() => setCurrentFile(file)}>{name}</StyledFile>;
}

export default File;
