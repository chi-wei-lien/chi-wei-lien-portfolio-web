import { useEffect, useState } from 'react'
import SectionContainer from '../style/SectionContainer'
import ReactMarkdown from 'react-markdown'
import ImageGallery from 'react-image-gallery'
import { TextImageContainer, TextSection } from '../style/Text'
import { ImageContainer, ImageSection } from '../style/Image'

const images = [
  {
    original: 'images/purdue.jpg',
    originalAlt: 'bell_tower',
    thumbnail: 'images/purdue.jpg',
    thumbnailAlt: 'bell_tower_thumbnail',
  },
  {
    original: 'images/award.jpg',
    originalAlt: 'outstanding_cs_sophomore_award',
    thumbnail: 'images/award.jpg',
    thumbnailAlt: 'outstanding_cs_sophomore_award_thumbnail',
  },
]

const Education = () => {
  const [content, setContent] = useState('')
  useEffect(() => {
    fetch('/content/education.md')
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
            <h1>Education</h1>
            <ReactMarkdown>
              {content}
            </ReactMarkdown>
          </TextSection>
          <ImageContainer>
            <ImageSection>
              <ImageGallery items={images} />
            </ImageSection>
          </ImageContainer>
        </TextImageContainer>
      </SectionContainer>
    </div>
  )
}

export default Education
