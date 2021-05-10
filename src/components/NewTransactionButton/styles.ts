import styled from "styled-components";

export const Button = styled.button`
  padding: 0.5rem 2.5rem;
  border: none;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.text};

  display: flex;
  align-items: center;
  justify-content: space-around;

  > svg {
    margin-right: 0.5rem;
  }
  &:hover {
    filter: brightness(0.9);
  }
`;
