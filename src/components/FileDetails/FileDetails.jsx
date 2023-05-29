import { useAppContext } from "../../hooks/useAppContext";
import Title from "../Title";
function FileDetails() {
  const { fileAnalysed } = useAppContext();
  return <Title title="File details" />;
}

export default FileDetails;
