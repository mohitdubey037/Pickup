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
import PersonalProfileContainer from "app/pages/DashboardPage/DashboardContainers/PersonalProfileContainer/PersonalProfileContainer";
import { PaymentsPage } from "app/pages/DashboardPage/DashboardContainers/PaymentsContainer";
import CompanyProfileContainer from "app/pages/DashboardPage/DashboardContainers/CompanyProfileContainer/CompanyProfile";
import AuthPages from "app/pages/AuthScreens";
const Routes = () => {
  const authUser = useSelector((state: any) => {
    return state.auth?.user;
  });
  return (
    <Router>
      <AuthPages path="/">
        <SignIn path="/" />
        <EmailSent path="/email-sent" />
        <CompanyDetails path="/company-details/:userId" />
        <Password path="/password" />
        <Congratulations path="/congratulations" />
        <SignIn path="/sign-in" />
        <ForgotPassword path="/forgot-password" />
        <MailSent path="/mail-sent" />
        <RecoverPassword path="/recover-password" />
      </AuthPages>

      <DashboardPage path="/dashboard">
        <HelpContainer path="/my-account/help" />
        <CompanyProfileContainer path="/my-account/company-profile" />
        <Dashboard path="/" />
        <SingleShipment path="/charter-shipment/single-shipment" />
        <BulkShipment path="/charter-shipment/bulk-shipment" />
        <SearchContainer path="/search-shipment" />
        <PaymentsPage path="/payments/cards" />
        <PersonalProfileContainer path="my-account/personal-profile" />

        <NotFoundPage default />
        <PaymentsPage path="/payments/cards" />
        <NotFoundPage default />
      </DashboardPage>
    </Router>
  );
};

export default Routes;
