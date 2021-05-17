import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 3rem;
  padding: 0 2.5rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 3rem;
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.text};
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
