import { RightDashboardWrapper } from "./style";
import { ReactNode } from "react";
import { Appbar } from "app/components/Appbar";

interface RightDashboardProps {
  children?: ReactNode;
}

const RightDashboard = ({ children }: RightDashboardProps) => {
  return (
    <div style={{ width: "100%", backgroundColor: "white" }}>
      <Appbar />
      <RightDashboardWrapper>{children}</RightDashboardWrapper>
    </div>
  );
};

export default RightDashboard;
