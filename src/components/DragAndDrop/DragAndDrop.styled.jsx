import styled from "styled-components";

const StyledDropZone = styled.div`
  height: 500px;
  width: auto;
  border: 5px dashed var(--color-secondary);
  color: var(--color-secondary);
  position: relative;
  text-align: left;
`;

const StyledIcon = styled.i`
  display: inline-block;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  font-size: 10rem;
`;

const StyledInput = styled.input`
  display: none;
`;

const StyledDropZoneContent = styled.div`
  padding: 2rem;
  font-size: 1.5rem;
`;

export { StyledDropZone, StyledInput, StyledIcon, StyledDropZoneContent };
