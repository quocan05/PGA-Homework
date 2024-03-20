import React from "react";
import { AuthLayoutProps } from "../../interfaces/authLayoutProps";

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default AuthLayout;
