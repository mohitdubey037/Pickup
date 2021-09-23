/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "@reach/router";

interface AuthPageProps extends RouteComponentProps {
  children?: any;
}

function AuthPages({ navigate, children }: AuthPageProps) {
  const auth = useSelector((state: { auth: { user: { userId: number } } }) => {
    return state.auth;
  });

  useEffect(() => {
    if (auth.user?.userId) {
      navigate?.("/dashboard");
    }
  }, [auth.user?.userId]);

  return <>{children}</>;
}

export default AuthPages;
