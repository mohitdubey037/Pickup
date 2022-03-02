import { Router } from "@reach/router";

import AuthPages from "app/pages/AuthScreens";
import {
  SignUp,
  EmailSent,
  Password,
  Congratulations,
} from "./app/pages/AuthScreens/SignUpScreens";
import {
  Login,
  ForgotPassword,
  MailSent,
  RecoverPassword,
} from "./app/pages/AuthScreens/LoginScreens";
import SignUpDetails from "app/pages/AuthScreens/SignUpScreens/SignUpDetails";
import TokenExpire from "app/pages/AuthScreens/TokenExpire";
import DashboardPage from "./app/pages/DashboardPage";
import Dashboard from "app/pages/DashboardPage/DashboardContainers/Dashboard";
import SingleShipment from "app/pages/DashboardPage/DashboardContainers/SignleShipmentContainer";
import OrderSummary from "app/pages/DashboardPage/DashboardContainers/SignleShipmentContainer/OrderSummary";
import ShipmentSummaryTable from "app/pages/DashboardPage/DashboardContainers/PaymentsContainer/ShipmentSummary";
import { BulkShipment } from "app/pages/DashboardPage/DashboardContainers/BulkShipment";
import BulkSummary from "app/pages/DashboardPage/DashboardContainers/BulkShipment/BulkSummary";
import OnHoldShipmentContainer from "app/pages/DashboardPage/DashboardContainers/OnHoldShipment/OnHoldShipment";
import { SearchContainer } from "app/pages/DashboardPage/DashboardContainers/SearchContainer";
import InvoicesContainer from "app/pages/DashboardPage/DashboardContainers/PaymentsContainer/Invoices";
import { PaymentsPage } from "app/pages/DashboardPage/DashboardContainers/PaymentsContainer";
import { ReportsContainer } from "app/pages/DashboardPage/DashboardContainers/Reports";
import CompanyProfileContainer from "app/pages/DashboardPage/DashboardContainers/CompanyProfileContainer/CompanyProfile";
import PersonalProfileContainer from "app/pages/DashboardPage/DashboardContainers/PersonalProfileContainer/PersonalProfileContainer";
import ChildAccount from "app/pages/DashboardPage/DashboardContainers/ChildAccount/ChildAccount";
import ChildAccountList from "app/pages/DashboardPage/DashboardContainers/ChildAccount/ChildAccountList";
import ChildAccountDetails from "app/pages/DashboardPage/DashboardContainers/ChildAccount/ChildAccountDetails";
import FavoriteLocations from "app/pages/DashboardPage/DashboardContainers/FavoriteLocationsContainer";
import { NoAuthorizationPage } from "app/pages/NoAutorizationPage";
import PageNotFound from "app/components/PageNotFound/PageNotFound";
import { TrackYourOrder } from "app/pages/TrackYourOrder";
import HelpContainer from "app/pages/DashboardPage/DashboardContainers/HelpContainer/HelpContainer";

const Routes = () => {
  return (
    <Router>
      <AuthPages path="/">
        <Login path="/" />
        <SignUp path="/sign-up" />
        <EmailSent path="/email-sent" />
        <Password path="/password" />
        <Congratulations path="/congratulations" />
        <ForgotPassword path="/forgot-password" />
        <MailSent path="/mail-sent" />
        <RecoverPassword path="/recover-password" />
        <SignUpDetails path="/sign-up-details/" />
        <TokenExpire path="/sign-up/verify-account" />
        <PageNotFound default />
        {/* <CompanyDetails path="/company-details/:userId" /> */}
      </AuthPages>

      <DashboardPage path="/dashboard">
        <Dashboard path="/" />
        <SingleShipment path="/charter-shipment/single-shipment" />
        <OrderSummary path="/charter-shipment/order-summary" />
        <ShipmentSummaryTable path="/charter-shipment/shipment-summary" />
        <BulkShipment path="/charter-shipment/bulk-shipment" />
        <BulkSummary path="/charter-shipment/bulk-summary" />
        <OnHoldShipmentContainer path="/holding-zone" />
        <SearchContainer path="/search-shipment" />
        <InvoicesContainer path="/payments/invoices" />
        <PaymentsPage path="/payments/cards" />
        <ReportsContainer path="/reports" />
        <CompanyProfileContainer path="/my-account/company-profile" />
        <PersonalProfileContainer path="/my-account/personal-profile" />
        <ChildAccount path="/my-account/child-account" />
        <ChildAccountList path="/my-account/child-account-list" />
        <ChildAccountDetails path="/my-account/child-account-details/:id" />
        <FavoriteLocations path="/my-account/favourite-locations" />
        <HelpContainer path="/my-account/help" />
        <NoAuthorizationPage path="/non-authorized-page" />
        <PageNotFound default />
      </DashboardPage>

      <TrackYourOrder path="/track-your-order" />
    </Router>
  );
};

export default Routes;
