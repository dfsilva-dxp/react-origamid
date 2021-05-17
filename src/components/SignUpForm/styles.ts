import styled from "styled-components";

export const WrapForm = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.shape};
  border-radius: 8px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 3rem auto;
  gap: 0.675rem;
`;

export const FormGroup = styled.div`
  button {
    margin-top: 1rem;
  }
`;
