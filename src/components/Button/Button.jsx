import { StyledButton } from "./Button.styled";

/**
 * Button component, renders primary, secondary or main button based on
 * given props.
 */
function Button({ text, primary = false, wide = false, handleClick }) {
  return (
    <StyledButton primary={primary} wide={wide} onClick={handleClick} data-testid="button">
      {text}
    </StyledButton>
  );
}

export default Button;
