import styled, {keyframes} from "styled-components";

const Hero = () => (
    <HeroSection>
        <MaskContainer>
            <HeroImgContainer>
                <TerminalIntro>
                    {"chi-wei-lien:~$"} cat intro.md <br />
                    Hi, I{"'"}m Willy.
                </TerminalIntro>
            </HeroImgContainer>
        </MaskContainer>
    </HeroSection>
)

const fadeOut = keyframes`
    0% {
      background-color: black;
    }
    100% {
      background-color: transparent;
    }
`

const fadeIn = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`

const MaskContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-position: center;
  animation: ${fadeOut} 1.5s ease-in-out;
`

const HeroSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: 
    radial-gradient(
      circle, 
      rgba(247,246,157,0.006039915966386533) 22%, 
      rgba(18,18,18,0.6474964985994398) 60%),
    url("/images/cover.png");
`

const HeroImgContainer = styled.div`
  vertical-align: bottom;
  animation: ${fadeIn} 2s ease-in-out;
`

const TerminalIntro = styled.div`
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  margin-bottom: 20px;
  border-radius: 0.125rem;
  width: 24rem;
  max-width: 100vw;
  background-color: rgba(25, 25, 25, 0.67);
`


export default Hero