import { ReactNode } from "react";
import { Appbar } from "app/components/Appbar";
import {
  DashboardRightWrapper,
  RightDashboardWrapper,
  DashboardContainer,
} from "./style";

interface RightDashboardProps {
  children?: ReactNode;
}

const RightDashboard = ({ children }: RightDashboardProps) => {
  return (
    <DashboardRightWrapper>
      <RightDashboardWrapper>
        <Appbar />
        <DashboardContainer>{children}</DashboardContainer>
      </RightDashboardWrapper>
    </DashboardRightWrapper>
  );
};

export default RightDashboard;
