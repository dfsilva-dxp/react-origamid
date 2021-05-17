import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0 1.5rem;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.background};
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 400;
  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
  }
  & + input {
    margin-top: 1rem;
  }
`;
