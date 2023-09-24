import { useEffect, useState } from "react";
import SectionContainer from "../style/SectionContainer";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const Publication = () => {
    const [content, setContent] = useState("");
    useEffect(() => {
        fetch("/content/publication.md")
            .then((res) => res.text())
            .then((text) => {
                setContent(text)
                console.log(text)
            })
    }, [])

    return (
        <div>
            <SectionContainer>
                <TextContainer>
                    <TextSection>
                        <h1>Publication</h1>
                        <ReactMarkdown children={content} />
                    </TextSection>
                </TextContainer>
            </SectionContainer>
        </div>
    )
}

const TextContainer = styled.div`
  max-width: 1100px;
  border-width: 0.5em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 800px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }

  & a {
    color: #fcd34d;
    text-decoration: underline;
  }
`

const TextSection = styled.div`
  max-width: 700px;
  padding: 40px;
  color: white;
  
  & h1 {
    font-family: "VT323", monospace;
    font-size: 50px;
    text-align: center;
  }
  & h2 {
    font-family: "VT323", monospace;
    font-size: 30px;
    margin-top: 5px;
  }
  & ul {
    list-style-type: square;
  }
`

export default Publication;