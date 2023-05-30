import { StyledTitle, StyledMainTitle } from "./Title.styled";

/**
 * Title component renders main or secondary
 * title based on given props.
 */
function Title({ title, main }) {
  return main ? (
    <StyledMainTitle>{title}</StyledMainTitle>
  ) : (
    <StyledTitle>{title}</StyledTitle>
  );
}

export default Title;
