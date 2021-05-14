import * as S from "./styles";
import logo from "../../assets/logo_white.svg";
import { useState } from "react";
import { SignInForm } from "../../components/SignInForm";
import { SignUpForm } from "../../components/SignUpForm";

export function SignIn() {
  const [hasAccount, setHasAccount] = useState(true);
  function handleChange() {
    setHasAccount(!hasAccount);
  }
  return (
    <S.Main>
      <S.Section>
        <h1>
          <img src={logo} alt="Logo Minha Carteira" />
          Minha Carteira
        </h1>
        {hasAccount ? <SignInForm /> : <SignUpForm />}
        {hasAccount ? (
          <p>
            Don't have an account? <span onClick={handleChange}>Sign up</span>
          </p>
        ) : (
          <p>
            Do you have an account? <span onClick={handleChange}>Sign in</span>
          </p>
        )}
      </S.Section>
    </S.Main>
  );
}
