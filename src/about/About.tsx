import { ImageContainer, ImageSection } from '../style/Image'
import SectionContainer from '../style/SectionContainer'
import { ReversedTextImageContainer, TextImageContainer, TextSection } from '../style/Text'

const About = () => {
  return (
    <div>
      <SectionContainer>
        <TextImageContainer>
          <TextSection>
            <h1>About</h1>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hi, my name is Willy Lien. I am a rising senior
              studying Computer Science at{' '}
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
              . During that opportunity, I&apos;ve published two academic paper — one in{' '}
              <a rel='noreferrer' target='_blank' href='http://doi.org/10.1016/j.mlwa.2024.100559'>
                Elsevier&apos;s Machine Learning with Applications
              </a>{' '}
              and another in{' '}
              <a
                rel='noreferrer'
                target='_blank'
                href='https://dl.acm.org/doi/full/10.1145/3603705'
              >
                ACM computing survey
              </a>
              . I worked closely with healthcare-related data, such as heart rate, to develop
              authentication models. I also completed a software engineering internship at{' '}
              <a rel='noreferrer' target='_blank' href='https://120water.com/'>
                120Water
              </a>{' '}
              and am currently interning at{' '}
              <a rel='noreferrer' target='_blank' href='https://120water.com/'>
                Sallie Mae
              </a>
              . Both internships have allowed me to gain hands-on experience in the software
              industry.
            </p>
          </TextSection>
          <ImageContainer>
            <ImageSection>
              <img src={'images/me_1 copy.jpg'} id='me' alt={'me'}></img>
            </ImageSection>
          </ImageContainer>
        </TextImageContainer>
      </SectionContainer>
      <SectionContainer>
        <ReversedTextImageContainer>
          <ImageContainer>
            <ImageSection>
              <img src={'images/ph_windows.png'} id='purdue_hackers' alt={'purdue_hackers'}></img>
            </ImageSection>
          </ImageContainer>
          <TextSection>
            <h1>Club & Leadership</h1>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Outside of classes, I led the engineering team at{' '}
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
        </ReversedTextImageContainer>
      </SectionContainer>
      <SectionContainer>
        <TextImageContainer>
          <TextSection>
            <h1>Interest</h1>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;During my free time, I enjoy performing card tricks,
            creating pixel art, and making educational{' '}
            <a href='https://www.youtube.com/@loopholewilson'>CS-focused YouTube videos</a>.
          </TextSection>
          <ImageContainer>
            <ImageSection>
              <img id='youtube' src={'images/youtube.png'} alt={'youtube'}></img>
            </ImageSection>
          </ImageContainer>
        </TextImageContainer>
      </SectionContainer>
      <SectionContainer>
        <TextSection>
          <h1>Future Plans</h1>
          I&apos;ll be graduating in May 2025, and I&apos;m looking to join a company where I can
          solve challenging problems every day and make a real impact.
        </TextSection>
      </SectionContainer>
    </div>
  )
}

export default About
