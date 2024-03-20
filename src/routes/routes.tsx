import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/auth/LoginPage";
import { HomePage } from "../pages/home/HomePage";
import SignUpPage from "../pages/auth/SignUpPage";
import { RoutePaths } from "./routes-constant";
import ErrorPage from "../pages/error/errorPage";
export const router = createBrowserRouter([
  {
    path: RoutePaths.HOME,
    element: <HomePage />,
  },

  {
    path: RoutePaths.LOGIN,
    element: <LoginPage />,
  },

  {
    path: RoutePaths.SIGNUP,
    element: <SignUpPage />,
  },
  {
    path: RoutePaths.NOT_INCLUDE,
    element: <ErrorPage />,
  },
]);
