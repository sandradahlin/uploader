import { StyledTitle, StyledMainTitle } from "./Title.styled";

function Title({ title, main }) {
  return main ? (
    <StyledMainTitle>{title}</StyledMainTitle>
  ) : (
    <StyledTitle>{title}</StyledTitle>
  );
}

export default Title;
