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
  Login,
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
import ChildAccount from "app/pages/DashboardPage/DashboardContainers/ChildAccount/ChildAccount"
import OnHoldShipmentContainer from "app/pages/DashboardPage/DashboardContainers/OnHoldShipment/OnHoldShipment"
import FavoriteLocations from "app/pages/DashboardPage/DashboardContainers/FavoriteLocationsContainer";
import InvoicesContainer from "app/pages/DashboardPage/DashboardContainers/PaymentsContainer/Invoices"
import { ReportsContainer } from "app/pages/DashboardPage/DashboardContainers/Reports";
import OrderSummary from "app/pages/DashboardPage/DashboardContainers/SignleShipmentContainer/OrderSummary";
import SignUpDetails from "app/pages/AuthScreens/SignUpScreens/SignUpDetails";
import { ShipmentSummary } from "app/components/PaymentCardDetails";
import ShipmentSummaryTable from "app/pages/DashboardPage/DashboardContainers/PaymentsContainer/ShipmentSummary";
const Routes = () => {
  const authUser = useSelector((state: any) => {
    return state.auth?.user;
  });
  return (
    <Router>
      <AuthPages path="/">
        <Login path="/" />
        <EmailSent path="/email-sent" />
        {/* <CompanyDetails path="/company-details/:userId" /> */}
        <Password path="/password" />
        <Congratulations path="/congratulations" />
        <SignUp path="/sign-up" />
        <ForgotPassword path="/forgot-password" />
        <MailSent path="/mail-sent" />
        <RecoverPassword path="/recover-password" />
        <SignUpDetails path ="/sign-up-details/" />
      </AuthPages>

      <DashboardPage path="/dashboard">
        <HelpContainer path="/my-account/help" />
        <CompanyProfileContainer path="/my-account/company-profile" />
        <Dashboard path="/" />
        <SingleShipment path="/charter-shipment/single-shipment" />
        <OrderSummary path="/charter-shipment/order-summary/:orderId" />
        <ShipmentSummary path="/charter-shipment/shipment-summary"/>
        <BulkShipment path="/charter-shipment/bulk-shipment" />
        <SearchContainer path="/search-shipment" />
        <PaymentsPage path="/payments/cards" />
        <PersonalProfileContainer path="my-account/personal-profile" />   
        <ChildAccount path="my-account/child-account"/>
        <FavoriteLocations path={'my-account/favourite-locations'}/>
        <ShipmentSummaryTable path="/payments" />
        <PaymentsPage path="/payments/cards" />
        <OnHoldShipmentContainer path= "/holding-zone" />
        <InvoicesContainer path="/payments/invoices" />
        <ReportsContainer path={"/reports"}/>
        <NotFoundPage default />
      </DashboardPage>
    </Router>
  );
};

export default Routes;
