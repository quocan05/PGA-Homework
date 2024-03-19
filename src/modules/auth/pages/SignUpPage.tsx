import React, { useCallback, useState } from "react";
import SignUpForm, { ISignUpParams } from "../components/SignUpForm";

const SignUpPage = () => {
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const onSignUp = useCallback(async (values: ISignUpParams) => {
    async (values: ISignUpParams) => {
      setErrMsg("");
      setLoading(false);
    };
    console.log("check values >>>>>>", values);
    setErrMsg("");
    setLoading(true);
  }, []);
  return <SignUpForm onSignUp={onSignUp} loading={false} errMsg={""}  />;
};

export default SignUpPage;
