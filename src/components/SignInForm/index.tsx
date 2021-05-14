import { DefaultButton } from "../DefaultButton";
import { Input } from "../Input";
import { TitleForm } from "../TitleForm";

import * as S from "./styles";

export function SignInForm() {
  return (
    <form action="">
      <S.WrapForm>
        <TitleForm>Login</TitleForm>
        <S.FormGroup>
          <Input type="text" placeholder="Name" />
          <Input type="password" placeholder="Password" />
          <DefaultButton>Enter</DefaultButton>
        </S.FormGroup>
      </S.WrapForm>
    </form>
  );
}
