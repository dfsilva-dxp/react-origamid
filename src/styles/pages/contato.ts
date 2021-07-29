import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: auto;
  min-height: calc(100vh - 10rem);
  padding: 1.75rem 0;
`

export const Display = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  align-items: center;
  justify-items: center;
  
  @media (min-width: 475px) {
    grid-template-columns: 300px 2fr;
    align-items: start;
  justify-items: start;
  }

`

export const ImgCard = styled.div`
  width: 100%;
  max-width: 300px;
  height: 450px;
  border-radius: 8px;
  align-items: stretch;
`

export const ContactInfo = styled.div`
  ul {
    margin-top: 1rem;

    li::before {
      content: "---";
      letter-spacing: -3px;
      margin-right: 0.5rem;
    }
  }
`