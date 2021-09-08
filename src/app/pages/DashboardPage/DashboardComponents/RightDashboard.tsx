// import SingleShipment from "../DashboardContainers/SignleShipmentContainer";
// import Dashboard from "../DashboardContainers/Dashboard";
import { RightDashboardWrapper } from "./style";
import { SelectedLink } from "../type";
import SingleShipment from "../DashboardContainers/SignleShipmentContainer";
import BulkShipment from '../DashboardContainers/BulkShipment';

interface RightDashboardProps{
    selectedLink:SelectedLink;
}

const RightDashboard = ({selectedLink}:RightDashboardProps) => {
    return (
        <RightDashboardWrapper>
            {/* {selectedLink.child? selectedLink.child.label : selectedLink.parent.label} */}
            <SingleShipment/>
            {/* <BulkShipment/> */}
        </RightDashboardWrapper>
    )
}

export default RightDashboard
