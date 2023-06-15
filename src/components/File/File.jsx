import { useAppContext } from "../../context";
import { StyledFile } from "./File.styled";

/**
 * File component renders individual file in the
 * file list.
 */
function File({ file }) {
  const { setCurrentFile } = useAppContext();
  const { name } = file;

  return <StyledFile onClick={() => setCurrentFile(file)} data-testid="file-item">{name}</StyledFile>;
}

export default File;
