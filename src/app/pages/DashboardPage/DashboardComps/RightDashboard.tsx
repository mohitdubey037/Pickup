import { RightDashboardWrapper } from "../style";
import { SelectedLink } from "../type";

interface RightDashboardProps{
    selectedLink:SelectedLink;
}

const RightDashboard = ({selectedLink}:RightDashboardProps) => {
    return (
        <RightDashboardWrapper>
            {selectedLink.child? selectedLink.child.label : selectedLink.parent.label}
        </RightDashboardWrapper>
    )
}

export default RightDashboard
