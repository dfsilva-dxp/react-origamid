import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0 1.5rem;
  background: #191a1c;
  border: 1px solid #191a1c;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 400;
  &::placeholder {
    color: #fff;
  }
  & + input {
    margin-top: 1rem;
  }
`;
