import { StyledNav, StyledNavList, StyledNavIcon } from "./Navbar.styled";
import { useAppContext } from "../../context";

function Navbar() {
  const { analyseFile } = useAppContext();

  const handleNavigate = () => {
    window.location = "/";
  };
  
  return (
    <StyledNav data-testid="navbar">
      <StyledNavIcon className="fa-solid fa-file-pen"></StyledNavIcon>
      <StyledNavList data-testid="navlist">
        <li onClick={handleNavigate} data-testid="home-link">Home</li>
        <li onClick={analyseFile} data-testid="analyze-link">Analyze file</li>
      </StyledNavList>
    </StyledNav>
  );
}

export default Navbar;
