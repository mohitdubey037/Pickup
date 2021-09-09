import { RightDashboardWrapper } from "./style";
import { ReactNode } from "react";

interface RightDashboardProps{
    children?:ReactNode;
}

const RightDashboard = ({children}:RightDashboardProps) => {
    return (
        <RightDashboardWrapper>
           {children}
        </RightDashboardWrapper>
    )
}

export default RightDashboard
