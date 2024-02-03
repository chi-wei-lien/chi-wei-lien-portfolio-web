import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

import { IconList } from '../style/Icon'
import SectionContainer from '../style/SectionContainer'

const Footer = () => {
  const d = new Date()
  const year = d.getFullYear()
  return (
    <div>
      <SectionContainer>
        <div>
          <IconList>
            <a href='https://github.com/chi-wei-lien' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faGithub} size='2xl' />
            </a>
            <a href='mailto:chiweilien3124@gmail.com' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faEnvelope} size='2xl' />
            </a>
            <a href='https://www.linkedin.com/in/chi-wei-lien/' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faLinkedin} size='2xl' />
            </a>
          </IconList>
          <TextSection>© 2021-{year} Chi-Wei Lien. All rights reserved.</TextSection>
        </div>
      </SectionContainer>
    </div>
  )
}

const TextSection = styled.div`
  padding: 40px;
  color: white;
  max-width: 100%;

  & h1 {
    font-family: 'VT323', monospace;
    font-size: 100px;
    text-align: center;
  }
`

export default Footer
