import { RouteComponentProps } from "@reach/router";
import { ChildLink, DasboardWrapper,LeftDashboard, ParentLink, RightDashboard } from "./style";
import { dashboardHelper } from "./helper";
import { Link } from "./type";

const Dashboard = ({navigate}:RouteComponentProps) => {
    return (
        <DasboardWrapper>
            <LeftDashboard>
                {dashboardHelper.map((link:Link)=>{
                    return(
                        <>
                      <ParentLink>{link.label}</ParentLink>  
                      {link.children && link.children.length>0 && 
                      link.children.map((child:Link)=>{
                          return(
                            <ChildLink>{child.label}</ChildLink>
                          )
                      })
                      }
                      </>
                    )
                })}
            </LeftDashboard>
            <RightDashboard></RightDashboard>
        </DasboardWrapper>
    )
}

export default Dashboard;
