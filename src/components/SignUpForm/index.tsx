import { useState, FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useFirebaseConnection } from "../../hooks/useFirebaseConnection";

import { DefaultButton } from "../DefaultButton";
import { Input } from "../Input";
import { TitleForm } from "../TitleForm";

import "react-toastify/dist/ReactToastify.css";
import * as S from "./styles";

export function SignUpForm() {
  const { createNewLoginUser } = useFirebaseConnection();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpDataUser = {
    email,
    password,
  };

  async function SignUp(e: FormEvent) {
    e.preventDefault();

    await createNewLoginUser(signUpDataUser)
      .then(() => {
        toast.success("Login successfully registered.");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/weak-password")
          toast.error("Password should be at least 6 characters");

        if (error.code === "auth/email-already-in-use")
          toast.error(
            "The email address is already in use by another account."
          );

        if (error.code === "auth/invalid-email")
          toast.error("The email address is badly formatted.");
      });
  }

  return (
    <form action="" onSubmit={SignUp}>
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
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </S.WrapForm>
    </form>
  );
}
