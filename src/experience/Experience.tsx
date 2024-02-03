import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

import SectionContainer from '../style/SectionContainer'
import { ExperienceTextSection, List, TextImageContainer } from '../style/Text'

const Experience = () => {
  const [content, setContent] = useState('')
  useEffect(() => {
    fetch('/content/experience.md')
      .then((res) => res.text())
      .then((text) => {
        setContent(text)
      })
  }, [])

  return (
    <div>
      <SectionContainer>
        <TextImageContainer>
          <ExperienceTextSection>
            <h2>Experience</h2>
            <p>
              Here are some of the experiences I have. This information can also be found on my
              resume.
            </p>
            <br />
            <hr />
            <List>
              <ReactMarkdown linkTarget='_blank'>{content}</ReactMarkdown>
            </List>
          </ExperienceTextSection>
        </TextImageContainer>
      </SectionContainer>
    </div>
  )
}

export default Experience
