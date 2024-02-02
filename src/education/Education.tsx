import { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery'
import ReactMarkdown from 'react-markdown'

import { ImageContainer, ImageSection } from '../style/Image'
import SectionContainer from '../style/SectionContainer'
import { List, TextImageContainer, TextSection } from '../style/Text'

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
            <List>
              <ReactMarkdown linkTarget='_blank'>{content}</ReactMarkdown>
            </List>
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
