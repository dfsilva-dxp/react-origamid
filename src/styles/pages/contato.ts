import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: auto;
  min-height: calc(100vh - 10rem);
  padding: 1.75rem 0;
`

export const Display = styled.section`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 1rem;
`

export const ImgCard = styled.div`
  max-width: 300px;
  height: 450px;
  border-radius: 8px;
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