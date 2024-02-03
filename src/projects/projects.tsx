import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

import SectionContainer from '../style/SectionContainer'
import { List, TextImageContainer, TextSection } from '../style/Text'

const Projects = () => {
  const [content, setContent] = useState('')
  useEffect(() => {
    fetch('/content/publication.md')
      .then((res) => res.text())
      .then((text) => {
        setContent(text)
      })
  }, [])

  return (
    <div>
      <SectionContainer>
        <TextImageContainer>
          <TextSection>
            <h2>Publication</h2>
            <p>Here are some of the projects that I&apos;ve worked on</p>
            <br />
            <List>
              <ReactMarkdown linkTarget='_blank'>{content}</ReactMarkdown>
            </List>
          </TextSection>
        </TextImageContainer>
      </SectionContainer>
    </div>
  )
}

export default Projects
