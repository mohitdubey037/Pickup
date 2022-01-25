import { useEffect, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { LeftDashboard, RightDashboard } from "./DashboardComponents";
import { DasboardWrapper, Overlay } from "./style";
import SplashScreens from "app/components/SplashScreens/SplashScreens";
import { useDispatch, useSelector } from "react-redux";

interface DashboardProps extends RouteComponentProps {
  children?: any;
}

const DashboardPage = ({ children, navigate }: DashboardProps) => {
  const [link, setLink] = useState("");
  const dispatch = useDispatch();
  const { showSplash } = useSelector(
    (state: { localStore: { showSplash: boolean } }) => state.localStore
  );
  const hideSplashScreens = () => {
    dispatch({ type: "HIDE_SPLASH" });
  };

  return (
    <DasboardWrapper>
      {/* {showSplash && (
        <Overlay>
          <SplashScreens onHide={hideSplashScreens} />
        </Overlay>
      )} */}
      <LeftDashboard
        onDrawerItemSelect={(id) => {
          navigate?.(id);
          setLink(id);
        }}
      />
      <RightDashboard>{children}</RightDashboard>
    </DasboardWrapper>
  );
};

export default DashboardPage;
