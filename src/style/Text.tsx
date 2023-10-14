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

export const TextSection = styled.div`
  max-width: 700px;
  padding: 40px;
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
