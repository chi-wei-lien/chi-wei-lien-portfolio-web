import { useEffect, useState } from "react";
import SectionContainer from "../style/SectionContainer";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { TextImageContainer, TextSection } from "../style/Text";

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
                <TextImageContainer>
                    <TextSection>
                        <h2>Publication</h2>
                        <ReactMarkdown children={content} />
                    </TextSection>
                </TextImageContainer>
            </SectionContainer>
        </div>
    )
}

export default Publication;