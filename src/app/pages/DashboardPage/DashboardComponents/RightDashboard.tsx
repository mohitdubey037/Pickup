import { RightDashboardWrapper } from "../style";
import { SelectedLink } from "../type";
import SingleShipment from "../DashboardContainers/SignleShipmentContainer";

interface RightDashboardProps{
    selectedLink:SelectedLink;
}

const RightDashboard = ({selectedLink}:RightDashboardProps) => {
    return (
        <RightDashboardWrapper>
            {/* {selectedLink.child? selectedLink.child.label : selectedLink.parent.label} */}
            <SingleShipment/>
        </RightDashboardWrapper>
    )
}

export default RightDashboard
