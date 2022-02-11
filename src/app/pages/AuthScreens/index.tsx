/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "@reach/router";
import { AuthUser } from "types";
import Cookies from "js-cookie";

interface AuthPageProps extends RouteComponentProps {
  children?: any;
}

function AuthPages({ navigate, children }: AuthPageProps) {
  const auth = useSelector((state: { auth: { user: AuthUser } }) => {
    return state.auth;
  });

  useEffect(() => {
    const token = Cookies?.get("token") || "";
    if (auth.user?.userId && token) {
      navigate?.("/dashboard");
    }
  }, [auth.user?.userId]);

  return <>{children}</>;
}

export default AuthPages;
