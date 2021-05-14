import { BrowserRouter } from "react-router-dom";
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
        <h1>
          <strong>Login</strong>
        </h1>
      )}
    </>
  );
}
