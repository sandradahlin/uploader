import { StyledTitle, StyledMainTitle } from "./Title.styled";

/**
 * Title component renders main or secondary
 * title based on given props.
 */
function Title({ title, main }) {
  return main ? (
    <StyledMainTitle data-testid="main-title">{title}</StyledMainTitle>
  ) : (
    <StyledTitle data-testid="title">{title}</StyledTitle>
  );
}

export default Title;
