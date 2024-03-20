import React from "react";
import { HomePageLayoutProps } from "../../interfaces/homeLayoutProps";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

export const HomePageLayout: React.FC<HomePageLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <br />
      <Footer />
    </div>
  );
};
