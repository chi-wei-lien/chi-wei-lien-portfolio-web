import styled from "styled-components";

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarElement>About</NavbarElement>
            <NavbarElement>Education</NavbarElement>
            <NavbarElement>Experience</NavbarElement>
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
`

export default Navbar;