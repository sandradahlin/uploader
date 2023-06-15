import { useAppContext } from "../../context";
import File from "../File/File";
import Title from "../Title";
import { StyledFileList } from "./FileList.styled";

/**
 * FileList component renders the list of uploaded
 * files.
 */
function FileList() {
  const { files } = useAppContext();

  return (
    <StyledFileList data-testid="file-list">
      <Title title="Your uploaded files" />
      {files.length === 0 && <p data-testid="no-files-text">You have no uploaded files</p>}
      {files.map((file) => (
        <File file={file} key={file.name}/>
      ))}
    </StyledFileList>
  );
}

export default FileList;
