import { BrowserRouter } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { AppRoutes } from "./routes";

export function Routes() {
  const hasUser = true;
  return (
    <>
      {hasUser ? (
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      ) : (
        <SignIn />
      )}
    </>
  );
}
