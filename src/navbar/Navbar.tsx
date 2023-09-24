import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarElement>
        <Link to="/about">
          About
        </Link>
      </NavbarElement>
      <NavbarElement>
        <Link to="/education">
          Education
        </Link>
      </NavbarElement>
      <NavbarElement>
        <Link to="/publication">
          Publication
        </Link>
      </NavbarElement> 
    </NavbarContainer>
  )
}

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #292930;
`

const NavbarElement = styled.div`
  padding: 20px;
  color: white;
  text-decoration: underline;
  font-family: "VT323", monospace;
  font-size: 30px;
  cursor: pointer;
`

export default Navbar;