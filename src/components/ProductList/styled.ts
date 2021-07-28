import styled from "styled-components";

export const List = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (min-width: 475px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const Product = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 1rem;

  display: flex;
  flex-direction: column;

  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(0.8);
  }

  img {
    width: 100%;
    border-radius: 8px;
  }

  h4 {
    flex: 1;
    font-size: 1.5rem;
    line-height: 1.5rem;
    padding: 0.5rem 0;

    transition: color 0.2s ease;
  }

  &:hover h4 {
    color: #fd6699
  }
`;