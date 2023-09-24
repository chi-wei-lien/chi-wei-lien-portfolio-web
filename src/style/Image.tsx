import styled from "styled-components";

export const ImageContainer = styled.div`
  position: relative;
  min-width: 300px;

  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`

export const ImageSection = styled.div`
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
    padding: 40px;
  }
`