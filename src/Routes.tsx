import React from "react";
import { Router } from "@reach/router";
import {
  SignUp,
  CompanyDetails,
  Password,
  EmailSent,
  Congratulations,
} from "./app/pages/AuthScreens/SignUpScreens";
import {
  SignIn,
  ForgotPassword,
  MailSent,
  RecoverPassword,
} from "./app/pages/AuthScreens/LoginScreens";
import DashboardPage from "./app/pages/DashboardPage";
import { useSelector } from "react-redux";
import { NotFoundPage } from "app/pages/NotFoundPage";
import { BulkShipment } from "app/pages/DashboardPage/DashboardContainers/BulkShipment";
import Dashboard from "app/pages/DashboardPage/DashboardContainers/Dashboard";
import SingleShipment from "app/pages/DashboardPage/DashboardContainers/SignleShipmentContainer";

const Routes = () => {
  const authUser = useSelector((state: any) => state.authReducer.user);
  return (
    <Router>
      <SignUp path="/" />
      <EmailSent path="/email-sent" />
      <CompanyDetails path="/company-details" />
      <Password path="/password" />
      <Congratulations path="/congratulations" />
      <SignIn path="/sign-in" />
      <ForgotPassword path="/forgot-password" />
      <MailSent path="/mail-sent" />
      <RecoverPassword path="/recover-password" />
      <DashboardPage path="/dashboard">
        <Dashboard path="/" />
        <SingleShipment path='/charter-shipment/single-shipment'/>
        <BulkShipment path="/charter-shipment/bulk-shipment" />

      </DashboardPage>
    </Router>
  );
};

export default Routes;
