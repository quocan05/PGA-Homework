import { Button } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import {
  deleteFromLocalStorage,
  getLocalStorage,
} from "../../services/LocalStorage";
import { HomePageLayout } from "../../layouts/home/HomeLayout";

type Props = {};

export const HomePage = (props: Props) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    deleteFromLocalStorage("token");
    navigate("/login");
  };
  useEffect(() => {
    const token = getLocalStorage("token");
    if (!token) {
      navigate("/login");
    }
  }, []);
  return (
    <HomePageLayout>
      <div>HomePage</div>
      <Button type="primary" danger onClick={handleLogout}>
        Logout
      </Button>
    </HomePageLayout>
  );
};
