import { useEffect, useState } from "react";
import { Redirect, RouteComponentProps } from "@reach/router";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

import { LeftDashboard, RightDashboard } from "./DashboardComponents";
import { DasboardWrapper, Overlay } from "./style";
// import SplashScreens from "app/components/SplashScreens/SplashScreens";
import { LeftDashboardWrapper, SidebarLogo } from "./DashboardComponents/style";
import { logo } from "app/assets/Icons";
import { getPersonalProfileDetails } from "services/PersonalProfileServices";
import SplashScreens from "app/components/SplashScreens/SplashScreens";

interface DashboardProps extends RouteComponentProps {
  children?: any;
}
interface Token {
  company: number;
  exp: number;
  iat: number;
  role: number;
  type: string;
  userId: number;
}

const DashboardPage = ({ children, navigate }: DashboardProps) => {
  const [link, setLink] = useState("");

  const dispatch = useDispatch();
  const token = Cookies?.get("token") || "";

  useEffect(() => {
    (async () => {
      if (token) {
        const decoded: Token | null = token ? jwt_decode(token) : null;
        const res: any = await getPersonalProfileDetails(decoded?.userId);
        if (res?.success) {
          dispatch({
            type: "UPDATE_USER",
            user: res?.response?.data?.data,
          });
        }
      }
    })();
  }, []);

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
        <LeftDashboard
          onDrawerItemSelect={(id) => {
            navigate?.(id);
            setLink(id);
          }}
        />
      </LeftDashboardWrapper>
      <RightDashboard>{children}</RightDashboard>
    </DasboardWrapper>
  );
};

export default DashboardPage;
