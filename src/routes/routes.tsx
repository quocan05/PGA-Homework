import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../modules/auth/pages/LoginPage";
import { HomePage } from "../modules/auth/pages/HomePage";
import SignUpPage from "../modules/auth/pages/SignUpPage";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },

    {
        path: '/login',
        element: <LoginPage />
    },

    {
        path: '/signup',
        element: <SignUpPage />
    }
])