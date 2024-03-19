import React, { useCallback, useEffect, useState } from "react";
import { ILoginParams, LoginForm } from "../components/LoginForm.tsx";
import "../../../assets/LoginPage.css";
import { useNavigate } from "react-router";
export const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const onLogin = useCallback(async (values: ILoginParams) => {
    async (values: ILoginParams) => {
      setErrMsg("");
      setLoading(false);
    };
    console.log("check values >>>>>>", values);
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
    <div className="background-page">
      <LoginForm onLogin={onLogin} loading={false} errMsg={""} />
    </div>
  );
};
