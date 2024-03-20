import React, { useCallback, useEffect, useState } from "react";
import { LoginForm } from "../../components/loginForm/LoginForm.tsx";
import { useNavigate } from "react-router";
import { ILoginParams } from "../../interfaces/login.interface.ts";
import AuthLayout from "../../layouts/auth/AuthLayout.tsx";
export const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const onLogin = useCallback(async (values: ILoginParams) => {
    async (values: ILoginParams) => {
      setErrMsg("");
      setLoading(false);
    };
    setErrMsg("");
    setLoading(true);
  }, []);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <AuthLayout>
      <div className="background-page">
        <LoginForm onLogin={onLogin} loading={false} errMsg={""} />
      </div>
    </AuthLayout>
  );
};
