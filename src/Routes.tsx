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
import { SearchContainer } from "app/pages/DashboardPage/DashboardContainers/SearchContainer";
import { HelpContainer } from "app/pages/DashboardPage/DashboardContainers/HelpContainer";
import { PaymentsPage } from "app/pages/DashboardPage/DashboardContainers/PaymentsContainer";

const Routes = () => {
  const authUser = useSelector((state: any) => {
    return state.auth?.user;
  });
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
      <HelpContainer path="/my-account/help" />
        <Dashboard path="/" />
        <SingleShipment path="/charter-shipment/single-shipment" />
        <BulkShipment path="/charter-shipment/bulk-shipment" />
        <SearchContainer path="/search-shipment" />
        <NotFoundPage default />
        <PaymentsPage path="/payments/cards"/>
        <NotFoundPage default/>
      </DashboardPage>
    </Router>
  );
};

export default Routes;
