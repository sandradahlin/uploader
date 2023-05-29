import styled from "styled-components";

const AppWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;

const StyledFlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1025px) {
    flex-direction: column;
  }
  &:first-child {
    flex-basis: 60%;
  }
  ${({ flip }) =>
    flip &&
    `
  &:first-child {
    flex-basis: 40%;
  }
  div:nth-child(2){
    flex-basis: 60%;
  }
`}
`;

export { AppWrapper, StyledFlexWrapper };
