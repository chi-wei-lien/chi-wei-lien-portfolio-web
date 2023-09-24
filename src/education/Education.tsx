import {useEffect, useState} from "react";
import SectionContainer from "../style/SectionContainer";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "images/purdue.jpg",
    originalAlt: "bell_tower",
    thumbnail: "images/purdue.jpg",
    thumbnailAlt: "bell_tower_thumbnail"
  },
  {
    original: "images/award.jpg",
    originalAlt: "outstanding_cs_sophomore_award",
    thumbnail: "images/award.jpg",
    thumbnailAlt: "outstanding_cs_sophomore_award_thumbnail"
  }
];

const Education = () => {
    const [content, setContent] = useState("");
    useEffect(() => {
        fetch("/content/education.md")
            .then((res) => res.text())
            .then((text) => {
                setContent(text)
                console.log(text)
            })
    }, [])

    return (
        <div>
            <SectionContainer>
                <TextImageContainer>
                    <TextSection>
                        <h1>Education</h1>
                        <ReactMarkdown children={content} />
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

const TextImageContainer = styled.div`
  max-width: 1100px;
  border-width: 0.5em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 800px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const TextSection = styled.div`
  max-width: 700px;
  padding: 40px;
  color: white;
  
  & h1 {
    font-family: "VT323", monospace;
    font-size: 100px;
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

const ImageContainer = styled.div`
  position: relative;
  min-width: 300px;
  width: 400px;

  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`

const ImageSection = styled.div`
  top: 50%;
  position: absolute;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  padding: 40px 40px 40px 0;

  @media only screen and (max-width: 768px) {
    top: 0;
    -ms-transform: translateY(0);
    transform: translateY(0);
    position: relative;
    width: 400px;
    padding: 40px;
  }
`

export default Education;