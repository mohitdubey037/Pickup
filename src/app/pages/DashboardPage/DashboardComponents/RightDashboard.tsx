import { ReactNode } from "react";
import { Appbar } from "app/components/Appbar";
import {
  DashboardRightWrapper,
  RightDashboardWrapper,
} from "./style";
import { Box } from "@material-ui/core";

interface RightDashboardProps {
  children?: ReactNode;
}

const RightDashboard = ({ children }: RightDashboardProps) => {
  return (
    <DashboardRightWrapper>
      <RightDashboardWrapper>
        <Appbar />
        <Box>{children}</Box>
      </RightDashboardWrapper>
    </DashboardRightWrapper>
  );
};

export default RightDashboard;
