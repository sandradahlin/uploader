import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1rem;
  text-transform: uppercase;
  margin: 5px;
  display: inline-block;
  font-weight: 400;
  font-size: 0.875rem;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  background: transparent;
  color: var(--color-dark-blue);
  border: 1px solid var(--color-secondary);

  ${({ primary }) =>
    primary &&
    `
    background: var(--color-secondary);
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
