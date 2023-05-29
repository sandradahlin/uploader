import { useAppContext } from "../../hooks/useAppContext";
import File from "../File/File";
import Title from "../Title";
import  {StyledFileList} from './FileList.styled'
function FileList() {
  const { files } = useAppContext();

  return (
    <StyledFileList>
      <Title title="Your uploaded files" />
      {files.length === 0 && <p>You have no uploaded files</p>}
      {files.map((file) => (
        <File file={file} />
      ))}
    </StyledFileList>
  );
}

export default FileList;
