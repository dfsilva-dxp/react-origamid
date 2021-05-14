import { DefaultButton } from "../DefaultButton";
import { Input } from "../Input";
import { TitleForm } from "../TitleForm";

import * as S from "./styles";

export function SignUpForm() {
  return (
    <form action="">
      <S.WrapForm>
        <TitleForm>Sign up</TitleForm>
        <S.FormGroup>
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <DefaultButton>Sign up</DefaultButton>
        </S.FormGroup>
      </S.WrapForm>
    </form>
  );
}
