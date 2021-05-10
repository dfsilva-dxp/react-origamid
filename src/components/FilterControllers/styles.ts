import styled from "styled-components";

export const FilterControllerContent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  input[type="month"] {
    padding: 0.5rem 1rem;
    text-transform: capitalize;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.shape};
    color: ${({ theme }) => theme.colors.text};
  }
`;
