import { useState } from "react";
import { DefaultButton } from "../DefaultButton";
import { Input } from "../Input";
import { TitleForm } from "../TitleForm";

import * as S from "./styles";

export function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form action="">
      <S.WrapForm>
        <TitleForm>Sign up</TitleForm>
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
            type="email"
            placeholder="Email"
            handleChange={(e): void => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <Input
            type="password"
            placeholder="Password"
            handleChange={(e): void => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <DefaultButton type="submit">Sign up</DefaultButton>
        </S.FormGroup>
      </S.WrapForm>
    </form>
  );
}
