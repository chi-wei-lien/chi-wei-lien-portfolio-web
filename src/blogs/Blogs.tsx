import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

import SectionContainer from '../style/SectionContainer'
import { TextImageContainer, TextSection } from '../style/Text'

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
            <h2>Blogs</h2>
            <ReactMarkdown>{content}</ReactMarkdown>
          </TextSection>
        </TextImageContainer>
      </SectionContainer>
    </div>
  )
}

export default Publication
