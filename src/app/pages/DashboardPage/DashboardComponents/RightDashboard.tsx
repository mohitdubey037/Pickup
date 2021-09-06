// import SingleShipment from "../DashboardContainers/SignleShipmentContainer";
import Dashboard from "../DashboardContainers/Dashboard";
import { AppbarContainer, MainAppBar, RightDashboardWrapper } from "./style";
import { SelectedLink } from "../type";
import SingleShipment from "../DashboardContainers/SignleShipmentContainer";
import { dropdown, settings } from "app/assets/Icons";
import { Avatar } from "@material-ui/core";

interface RightDashboardProps{
    selectedLink:SelectedLink;
}

const RightDashboard = ({selectedLink}:RightDashboardProps) => {
    return (
        <RightDashboardWrapper>
            {/* {selectedLink.child? selectedLink.child.label : selectedLink.parent.label} */}
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
            {/* <SingleShipment/> */}
            <Dashboard/>
        </RightDashboardWrapper>
    )
}

export default RightDashboard
