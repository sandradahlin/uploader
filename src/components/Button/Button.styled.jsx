import styled from "styled-components";

const StyledButton = styled.button`
  text-transform: lowercase;
  display: inline;
  font-weight: 400;
  cursor: pointer;
  color: var(--color-secondary);
  outline: none;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 1.5rem;
  color: var(--color-primary);
  border-color: transparent;

  ${({ primary }) =>
    primary &&
    `
    color: var(--color-primary);
    border-color: transparent;
 `};

  ${({ wide }) =>
    wide &&
    `
    font-size:1.5rem;
    margin: 3rem 0;
    padding: 1.5rem;
  `};
`;

export { StyledButton };
