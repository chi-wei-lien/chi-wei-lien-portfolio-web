import SectionContainer from "../style/SectionContainer";
import styled from "styled-components";

const Footer = () => {
    return (
        <div>
            <SectionContainer>
                <TextSection>
                    © 2021-2023 Chi-Wei Lien. All rights reserved.
                </TextSection>
            </SectionContainer>
        </div>
    )
}

const TextSection = styled.div`
  padding: 40px;
  color: white;
  max-width: 100%;
  
  & h1 {
    font-family: "VT323", monospace;
    font-size: 100px;
    text-align: center;
  }
`

export default Footer;