import { createContext, ReactNode, useContext } from "react";
import firebase from "../connections/firebase";

interface Transaction {
  title: string;
  date: string;
  frequency: string;
  category: string;
  amount: number;
  type: string;
  createAt: string;
}

interface SignUpUserData {
  email: string;
  password: string;
}

interface FirebaseConnectionProviderProps {
  children: ReactNode;
}

interface FirebaseConnectionContextData {
  createNewLoginUser: (signUpUserData: SignUpUserData) => Promise<void>;
  logout: () => Promise<void>;
}

const FirebaseConnectionContext = createContext<FirebaseConnectionContextData>(
  {} as FirebaseConnectionContextData
);

export function FirebaseConnectionProvider({
  children,
}: FirebaseConnectionProviderProps) {
  async function createNewLoginUser(signUpUserData: SignUpUserData) {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(
        signUpUserData.email,
        signUpUserData.password
      );
  }

  async function logout() {
    await firebase.auth().signOut();
  }

  return (
    <FirebaseConnectionContext.Provider value={{ createNewLoginUser, logout }}>
      {children}
    </FirebaseConnectionContext.Provider>
  );
}

export function useFirebaseConnection() {
  const context = useContext(FirebaseConnectionContext);

  return context;
}
