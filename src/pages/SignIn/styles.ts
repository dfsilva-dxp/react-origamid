import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  background: #191a1c;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Section = styled.section`
  width: 100%;
  max-width: 390px;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 4.5rem auto 2rem;
  gap: 0.675rem;

  h1 {
    font-size: 2rem;
    line-height: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      margin-right: 0.675rem;
    }
  }
  p {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    text-align: center;
    color: #a8a8b3;
    span {
      color: #fff;
      font-weight: 600;
      text-decoration: underline #fff;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        color: #3585f3;
        text-decoration: underline #3585f3;
      }
    }
  }
`;
