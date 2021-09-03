import { RouteComponentProps } from "@reach/router";
import { ChildLink, DasboardWrapper,LeftDashboard, ParentLink, RightDashboard } from "./style";
import { dashboardHelper } from "./helper";
import { Link } from "./type";
import SingleShipment from "./DashboardContainers/SignleShipmentContainer";

const Dashboard = ({navigate}:RouteComponentProps) => {
    return (
        <DasboardWrapper>
            <LeftDashboard>
                {dashboardHelper.map((link:Link)=>{
                    return(
                        <>
                      <ParentLink>{link.label}</ParentLink>  
                      {link.children?.map((child:Link)=>{
                          return(
                            <ChildLink>{child.label}</ChildLink>
                          )
                      })
                      }
                      </>
                    )
                })}
            </LeftDashboard>
            <RightDashboard>
                <SingleShipment />
            </RightDashboard>
        </DasboardWrapper>
    )
}

export default Dashboard;
