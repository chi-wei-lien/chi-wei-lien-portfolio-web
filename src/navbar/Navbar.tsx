import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <NavbarContainer>
      <Link to='/about'>
        <NavbarElement>About</NavbarElement>
      </Link>
      <Link to='/Skills'>
        <NavbarElement>Skills</NavbarElement>
      </Link>
      <Link to='/education'>
        <NavbarElement>Education</NavbarElement>
      </Link>
      <Link to='/experience'>
        <NavbarElement>Experience</NavbarElement>
      </Link>
      <Link to='/publications'>
        <NavbarElement>Publications</NavbarElement>
      </Link>
    </NavbarContainer>
  )
}

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #292930;
  flex-wrap: wrap;
`

const NavbarElement = styled.div`
  margin-top: 10px;
  padding: 0px 20px 0px 20px;
  color: white;
  text-decoration: underline;
  font-family: 'VT323', monospace;
  font-size: 30px;
  cursor: pointer;

  &: hover {
    background-color: #83c5ff;
  }
`

export default Navbar
