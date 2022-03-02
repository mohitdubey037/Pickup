import { ReactNode, useEffect } from "react";
import { Redirect, RouteComponentProps } from "@reach/router";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

// import SplashScreens from "app/components/SplashScreens/SplashScreens";
import { logo } from "app/assets/Icons";
import { getPersonalProfileDetails } from "services/PersonalProfileServices";
import { getUserId } from "utils/commonUtils";
import { LeftDashboard, RightDashboard } from "./DashboardComponents";
import { DasboardWrapper } from "./style";
import { LeftDashboardWrapper, SidebarLogo } from "./DashboardComponents/style";

interface DashboardProps extends RouteComponentProps {
  children?: ReactNode;
}

const DashboardPage = ({ children }: DashboardProps) => {
  const dispatch = useDispatch();
  const token = Cookies?.get("token") || "";
  const userId = getUserId();

  useEffect(() => {
    if (token) {
      fetchPersonalProfile();
    }
  }, []);

  const fetchPersonalProfile = async () => {
    const res: any = await getPersonalProfileDetails(userId);
    if (res?.success) {
      dispatch({
        type: "UPDATE_USER",
        user: res?.response?.data?.data,
      });
    }
  };

  // const { showSplash } = useSelector(
  //   (state: { localStore: { showSplash: boolean } }) => state.localStore
  // );
  // const hideSplashScreens = () => {
  //   dispatch({ type: "HIDE_SPLASH" });
  // };

  if (!token) {
    return <Redirect to="/" />;
  }

  return (
    <DasboardWrapper>
      {/* {showSplash && (
        <Overlay>
          <SplashScreens onHide={hideSplashScreens} />
        </Overlay>
      )} */}
      <LeftDashboardWrapper>
        <SidebarLogo>
          <img src={logo} alt="logo" />
        </SidebarLogo>
        <LeftDashboard />
      </LeftDashboardWrapper>
      <RightDashboard>{children}</RightDashboard>
    </DasboardWrapper>
  );
};

export default DashboardPage;
