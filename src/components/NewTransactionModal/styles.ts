import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Form = styled.form`
  display: grid;
  grid-template-rows: 3rem 3rem auto 3rem;
  gap: 1rem;
`;

export const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 3rem 3rem 3rem;
  gap: 1rem;
  transition: border-color 0.2s;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "red" | "green";
}

const colors = {
  green: "#52D987",
  red: "#E83F5B",
};

export const RadioBox = styled.button<RadioBoxProps>`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0.25rem;
  background: ${({ isActive, activeColor }) =>
    isActive ? transparentize(0.7, colors[activeColor]) : "transparent"};

  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    width: 20px;
    height: 20px;
  }

  > span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }
  &:hover {
    border-color: ${({ theme }) => darken(0.1, theme.colors.gray)};
  }
`;
