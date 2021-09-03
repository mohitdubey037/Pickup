import { RouteComponentProps } from "@reach/router";
import { settings, dropdown } from '../../assets/Icons/index'
import { AppbarContainer, ChildLink, DasboardWrapper,LeftDashboard, MainAppBar, ParentLink, RightDashboard } from "./style";
import { dashboardHelper } from "./helper";
import { Link } from "./type";
import Avatar from '@material-ui/core/Avatar';

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
                    <MainAppBar elevation={0} position="static">
                        <AppbarContainer>
                            <img style={{width:'1.5rem',cursor:'pointer'}} src={settings}/>
                            <div style={{textAlign:'right',marginLeft:'1rem'}}>
                                <h5 style={{margin:0}}>
                                    Matthew Bernhardt
                                </h5>
                                <span style={{fontSize:'14px',color:'#343434'}}>
                                    Admin
                                </span>
                            </div>
                                <Avatar style={{margin:'1rem 1rem 1rem 1rem'}} alt="dummy avatar" src='https://i.pravatar.cc/300'/>
                                <img style={{margin:'1rem 2rem 1rem 0rem'}} src={dropdown} alt="dropdown"/>
                        </AppbarContainer>
                    </MainAppBar>
            </RightDashboard>
        </DasboardWrapper>
    )
}

export default Dashboard;
