import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

import SectionContainer from '../style/SectionContainer'
import { List, TextImageContainer, TextSection } from '../style/Text'

const Publication = () => {
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
            <p>
              My research area focuses on Machine Learning and Biometric Authentication. Most recent
              research project involves developing occlusion-resistant face recognition model. [
              <a
                href='https://scholar.google.com/citations?user=7PCEI8QAAAAJ&hl=en&oi=ao'
                target='_blank'
                rel='noreferrer'
              >
                My Google Scholar Profile
              </a>
              ]
            </p>
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

export default Publication
