import styled from 'styled-components'

export const TextImageContainer = styled.div`
  max-width: 1100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const ReversedTextImageContainer = styled.div`
  max-width: 1100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    flex-direction: column-reverse;
  }
`

export const List = styled.div`
  & ul li {
    list-style-type: square;
    margin: 10px 0;
  }
`

export const ExperienceList = styled.div`
  & ul li {
    list-style-type: square;
    margin: 10px 0;
  }
`

export const HorizontalList = styled.div`
  & ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  & ul li {
    margin-right: 50px;
    margin-top: 20px;
    text-align: center;
  }
  & ul li img {
    height: 70px;
    margin: auto;
  }
`

export const TextSection = styled.div`
  max-width: 700px;
  padding: 40px 20px 20px 20px;
  color: white;

  & h1 {
    font-family: 'VT323', monospace;
    font-size: 70px;
    text-align: center;
  }

  & h2 {
    font-family: 'VT323', monospace;
    font-size: 50px;
    text-align: center;
  }

  & h3 {
    font-family: 'VT323', monospace;
    font-size: 30px;
    margin-top: 5px;
  }

  & a {
    color: #fcd34d;
    text-decoration: underline;
  }
`

export const ExperienceTextSection = styled.div`
  max-width: 700px;
  padding: 40px 20px 20px 20px;
  color: white;

  & h1 {
    font-family: 'VT323', monospace;
    font-size: 70px;
    text-align: center;
  }

  & h2 {
    font-family: 'VT323', monospace;
    font-size: 50px;
    text-align: center;
  }

  & h3 {
    margin-top: 100px;
    font-family: 'VT323', monospace;
    font-size: 30px;
    margin-top: 60px;
  }

  & h4 {
    font-family: 'VT323', monospace;
    font-size: 25px;
    margin-top: 5px;
    color: #83fffb;
  }

  & h4 a {
    color: #83fffb;
  }

  & a {
    color: #fcd34d;
    text-decoration: underline;
  }
`

export const SkillTextSection = styled.div`
  max-width: 700px;
  padding: 40px;
  color: white;
  text-align: center;

  & h1 {
    font-family: 'VT323', monospace;
    font-size: 70px;
    text-align: center;
  }

  & h2 {
    font-family: 'VT323', monospace;
    font-size: 50px;
    text-align: center;
  }

  & h3 {
    font-family: 'VT323', monospace;
    font-size: 30px;
    text-align: center;
    margin-top: 80px;
  }

  & a {
    color: #fcd34d;
    text-decoration: underline;
  }
`
