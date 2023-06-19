import styled from "styled-components";

const StyledFileDetails = styled.div`
  position: fixed;
  z-index: 1;
  left: 5vw;
  top: 0;
  height: 80vh;
  width: 90vw;
  margin: auto;
  color: var(--color-black);
  background: rgb(255, 255, 255, 0.8);
  text-align: center;
  transform: translate(0, 5vh);
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledIcon = styled.i`
  position: absolute;
  top: 2rem;
  right: 2rem;
  &:hover {
    cursor: pointer;
  }
`;

const StyledWord = styled.span`
  color: var(--color-primary);
  &:not(:first-of-type)::before{
    content: ", ";
  }
`;

export { StyledFileDetails, StyledIcon, StyledWord };
