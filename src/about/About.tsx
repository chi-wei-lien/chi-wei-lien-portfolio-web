import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import SectionContainer from '../style/SectionContainer'
import { ImageContainer, ImageSection } from '../style/Image'
import { TextImageContainer, TextSection } from '../style/Text'

const About = () => {
  const [content, setContent] = useState('')
  useEffect(() => {
    fetch('/content/intro.md')
      .then((res) => res.text())
      .then((text) => {
        setContent(text)
        console.log(text)
      })
  }, [])

  return (
    <div>
      <SectionContainer>
        <TextImageContainer>
          <TextSection>
            <h1>About</h1>
            <ReactMarkdown children={content} />
          </TextSection>
          <ImageContainer>
            <ImageSection>
              <img src={'images/me_1.jpg'} alt={'me'}></img>
            </ImageSection>
          </ImageContainer>
        </TextImageContainer>
      </SectionContainer>
    </div>
  )
}

export default About
