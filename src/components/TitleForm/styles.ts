import styled from "styled-components";

export const Title = styled.h2`
  font-family: "Spectral", serif;
  font-size: 2.35rem;
  line-height: 3rem;
  position: relative;
  z-index: 1;
  &:after {
    display: block;
    content: "";
    width: 1.25rem;
    height: 1.25rem;
    background: #3585f3;
    border-radius: 3px;
    position: absolute;
    bottom: 5px;
    left: -5px;
    z-index: -1;
  }
`;
