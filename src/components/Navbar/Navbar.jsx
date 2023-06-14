import { StyledNav, StyledNavList, StyledNavIcon } from "./Navbar.styled";
import { useAppContext } from "../../hooks/useAppContext";

function Navbar() {
  const { analyseFile } = useAppContext();

  const handleNavigate = () => {
    window.location = "/";
  };
  
  return (
    <StyledNav>
      <StyledNavIcon className="fa-solid fa-file-pen"></StyledNavIcon>
      <StyledNavList>
        <li onClick={handleNavigate}>Home</li>
        <li onClick={analyseFile}>Analyze file</li>
      </StyledNavList>
    </StyledNav>
  );
}

export default Navbar;
