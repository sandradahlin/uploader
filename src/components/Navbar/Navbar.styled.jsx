import styled from "styled-components";

const StyledNav = styled.nav`
  height: 100vh;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  clip-path: polygon(0 0, 100% 0%, 64% 100%, 0% 100%);
  background: var(--color-black);
`;

const StyledNavList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: left;
  flex-direction: column;
  color: var(--color-white);
  li {
    display: inline-block;
    width: auto;
    margin-bottom: 3rem;
    margin-left: 1rem;
    &:hover {
      cursor: pointer;
      color: var(--color-primary);
    }
  }
`;

const StyledNavIcon = styled.i`
  display: inline-block;
  position: absolute;
  top: 2rem;
  left: 2rem;
  font-size: 3rem;
  color: var(--color-primary);
`;

export { StyledNav, StyledNavList, StyledNavIcon };
