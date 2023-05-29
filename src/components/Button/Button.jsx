import { StyledButton } from "./Button.styled";

function Button({ text, primary = false, wide=false, handleClick }) {
  return <StyledButton primary={primary}wide={wide} onClick={handleClick}>{text}</StyledButton>;
}

export default Button;
