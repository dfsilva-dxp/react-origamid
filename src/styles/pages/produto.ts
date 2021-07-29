import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: auto;
  min-height: calc(100vh - 10rem);
  padding: 1.75rem 0;
`

export const ProductInfo = styled.div`
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
export const DisplayImg = styled.picture`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  img {
    width: 100%;
    border-radius: 8px;
    transition: filter 0.2s ease;

    &:hover {
      filter: brightness(0.8)
    }
  }

  @media (min-width: 475px) {
    grid-template-columns: 300px;
  }
`

export const DisplayInfoProduct = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  gap: 0.675rem;

  span {
    background: #00ff5f;
    max-width: 7rem;
    padding: 0.5rem;
    text-align: center;
    border-radius: 5px;
  }

  p {
    max-width: 300px
  }
`