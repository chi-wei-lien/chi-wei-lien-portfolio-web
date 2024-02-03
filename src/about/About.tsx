import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

import { ImageContainer, ImageSection } from '../style/Image'
import SectionContainer from '../style/SectionContainer'
import { TextImageContainer, TextSection } from '../style/Text'

const About = () => {
  const [content, setContent] = useState('')
  useEffect(() => {
    fetch('/content/intro.md')
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
            <h1>About</h1>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hi, I am Willy. I am a Junior studying Computer
              Science at{' '}
              <a href='/education' rel='noreferrer'>
                Purdue University
              </a>{' '}
              from Taiwan. I have a strong interest in software development and enjoy learning low
              level system programming and machine learning.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Some experience I have include my role as a
              research assistant at the{' '}
              <a
                rel='noreferrer'
                target='_blank'
                href='https://polytechnic.purdue.edu/facilities/mobile-artificial-intelligence-laboratory'
              >
                mobile artificial intelligence lab
              </a>
              . During that opportunity, I wrote and published a paper on Biometrics in{' '}
              <a
                rel='noreferrer'
                target='_blank'
                href='https://dl.acm.org/doi/full/10.1145/3603705'
              >
                ACM computing survey
              </a>{' '}
              and worked closely with healthcare-related data, such as heart rate, to develop
              authentication models. In addition to my research and machine learning experience, my
              foundation in software development was strengthened during my internship at{' '}
              <a rel='noreferrer' target='_blank' href='https://120water.com/'>
                120Water
              </a>
              , a company dedicated to ensuring clean water for utilities. This experience allowed
              me to engage in both backend and frontend development, making me proficient in
              full-stack development using Typescript.
            </p>
          </TextSection>
          <ImageContainer>
            <ImageSection>
              <img src={'images/me_1.jpg'} alt={'me'}></img>
            </ImageSection>
          </ImageContainer>
        </TextImageContainer>
      </SectionContainer>
      <SectionContainer>
        <TextImageContainer>
          <ImageContainer>
            <ImageSection>
              <img src={'images/ph_windows.png'} alt={'me'}></img>
            </ImageSection>
          </ImageContainer>
          <TextSection>
            <h1>Club</h1>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Outside of classes, I led the engineering team at
              <a href='https://www.purduehackers.com/' target='_blank' rel='noreferrer'>
                Purdue Hackers Club
              </a>
              , a CS club at Purdue where we help students from all backgrounds to learn more about
              computer science. Some of the projects that my team and I worked on include our{' '}
              <a href='https://www.purduehackers.com/' target='_blank' rel='noreferrer'>
                official website
              </a>
              , our{' '}
              <a href='https://github.com/purduehackers/api' target='_blank' rel='noreferrer'>
                official RESTful api
              </a>
              , our{' '}
              <a href='https://github.com/purduehackers/events' target='_blank' rel='noreferrer'>
                rsvp system
              </a>
              , and{' '}
              <a href='https://ph-wiki.vercel.app/' target='_blank' rel='noreferrer'>
                documentation website
              </a>
              .
            </p>
          </TextSection>
        </TextImageContainer>
      </SectionContainer>
      <SectionContainer>
        <TextImageContainer>
          <TextSection>
            <h1>Interest</h1>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;During my downtime, I enjoy practicing magic card
            tricks, sketching, and creating educational{' '}
            <a href='https://www.youtube.com/@loopholewilson'>CS-focused YouTube videos</a>. It is
            surprising and rewarding that I have built a small audience of people who enjoy what I
            share online. I am fully aware there is still so much to learn, and I am excited about
            the opportunities for growth in the future.
          </TextSection>
          <ImageContainer>
            <ImageSection>
              <img src={'images/youtube.png'} alt={'me'}></img>
            </ImageSection>
          </ImageContainer>
        </TextImageContainer>
      </SectionContainer>
    </div>
  )
}

export default About
