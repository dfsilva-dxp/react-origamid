import styled from "styled-components";

export const WrapForm = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  background: #28292d;
  border-radius: 8px;

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
