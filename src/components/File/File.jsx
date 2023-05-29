import { StyledFile } from "./File.styled";

function File({ file }) {
  console.log(file, "nammememm");
  const { name } = file;
  return <StyledFile>{name}</StyledFile>;
}

export default File;
