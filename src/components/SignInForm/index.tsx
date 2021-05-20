import { useState } from "react";
import { DefaultButton } from "../DefaultButton";
import { Input } from "../Input";
import { TitleForm } from "../TitleForm";

import * as S from "./styles";

export function SignInForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form action="">
      <S.WrapForm>
        <TitleForm>Login</TitleForm>
        <S.FormGroup>
          <Input
            type="text"
            placeholder="Name"
            handleChange={(e): void => {
              setName(e.target.value);
            }}
            value={name}
          />
          <Input
            type="password"
            placeholder="Password"
            handleChange={(e): void => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <DefaultButton type="submit">Enter</DefaultButton>
        </S.FormGroup>
      </S.WrapForm>
    </form>
  );
}
