import ReactMarkdown from 'react-markdown'
import {useEffect, useState} from "react";
import styled from "styled-components";

const About = () => {
    const [content, setContent] = useState("");
    useEffect(() => {
        fetch("/content/intro.md")
            .then((res) => res.text())
            .then((text) => {
                setContent(text)
                console.log(text)
            })
    }, [])

    return (
        <div>
            <SectionContainer>
                <TextSection>
                    <h1>About</h1>
                    <ReactMarkdown children={content} />
                </TextSection>
                <ImageContainer>
                    <ImageSection>
                        <img src={"images/me_1.jpg"} alt={"me"}></img>
                    </ImageSection>
                </ImageContainer>
            </SectionContainer>
        </div>
    )
}

const SectionContainer = styled.div`
  width: 100vw;
  background-color: #292930;
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 800px;
`

const TextSection = styled.div`
  width: 700px;
  padding: 40px;
  color: white;
  & h1 {
    font-family: "VT323", monospace;
    font-size: 100px;
    text-align: center;
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 300px;
`

const ImageSection = styled.div`
  top: 50%;
  position: absolute;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`

export default About