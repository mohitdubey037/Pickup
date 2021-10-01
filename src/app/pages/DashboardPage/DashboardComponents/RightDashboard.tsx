 import { ReactNode } from "react";
import { Appbar } from "app/components/Appbar";
import { RightDashboardWrapper,DashboardContainer } from "./style";

interface RightDashboardProps {
  children?: ReactNode;
}

const RightDashboard = ({ children }: RightDashboardProps) => {
  return (
    <div
      style={{
        backgroundColor: "#FAFAFA",
        position: "absolute",
        zIndex: 111,
        right: 0,
        width: "84%",
        height: "100vh",
        borderTopLeftRadius: 40,
      }}
    >
      <RightDashboardWrapper>
        <Appbar />
        <DashboardContainer>{children}</DashboardContainer>
      </RightDashboardWrapper>
    </div>
  );
};

export default RightDashboard;
