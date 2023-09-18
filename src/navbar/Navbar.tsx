import styled from "styled-components";

interface INavbarProps {
    setPage: React.Dispatch<React.SetStateAction<string>>
}

const Navbar = (props: INavbarProps) => {
    return (
        <NavbarContainer>
            <NavbarElement onClick={() => {props.setPage("about")}}>About</NavbarElement>
            <NavbarElement onClick={() => {props.setPage("education.md")}}>Education</NavbarElement>
            {/*<NavbarElement onClick={() => {props.setPage("experience")}}>Experience</NavbarElement>*/}
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