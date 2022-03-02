import { ReactNode } from "react";
import { Box } from "@mui/material";

import { Appbar } from "app/components/Appbar";
import { DashboardRightWrapper, RightDashboardWrapper } from "./style";

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
