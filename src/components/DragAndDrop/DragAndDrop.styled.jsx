import styled from "styled-components";

const StyledDropZone = styled.div`
  height: 80vh;
  width: 90vw;
  margin: auto;
  color: var(--color-secondary);
  background: var(--color-white);
  position: relative;
  text-align: center;
  transform: translate(0, 5vh);
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledIcon = styled.i`
  display: inline-block;
  position: absolute;
  top: 2rem;
  left: 2rem;
  font-size: 3rem;
  color: var(--color-primary);
`;

const StyledArrowIcon = styled.i`
  display: inline-block;
  color: var(--color-white);
  background: var(--color-primary);
  bottom: 2rem;
  right: 2rem;
  font-size: 2rem;
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
`;

const StyledInput = styled.input`
  display: none;
`;

const StyledDropZoneContent = styled.div`
  padding: 2rem;
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: var(--color-black);
  transition: all 0.3s;
  span {
    font-weight: 400;
  }
  > p {
    font-weight: 600;
    font-size: 3rem;
    margin-top: 2rem;
  }

  &:hover {
    background: var(--color-quaternary);
    width: 80%;
    height: 80%;
    i{
      background: var(--color-white);
      border: 1px solid var(--color-primary);
      color: var(--color-primary);
    }
  }
`;

export {
  StyledDropZone,
  StyledInput,
  StyledIcon,
  StyledDropZoneContent,
  StyledArrowIcon,
};
