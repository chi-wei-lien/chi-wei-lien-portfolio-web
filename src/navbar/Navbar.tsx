import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarElement>
        <Link to='/about'>About</Link>
      </NavbarElement>
      <NavbarElement>
        <Link to='/Skills'>Skills</Link>
      </NavbarElement>
      <NavbarElement>
        <Link to='/education'>Education</Link>
      </NavbarElement>
      <NavbarElement>
        <Link to='/experience'>Experience</Link>
      </NavbarElement>
      <NavbarElement>
        <Link to='/publication'>Publication</Link>
      </NavbarElement>
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
