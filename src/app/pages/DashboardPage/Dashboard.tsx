import {useState} from 'react';
import { RouteComponentProps } from "@reach/router";
import {LeftDashboard,RightDashboard} from "./DashboardComponents";
import { DasboardWrapper } from "./style";
import { SelectedLink } from './type';
import { dashboardHelper } from './helper';

const Dashboard = ({navigate}:RouteComponentProps) => {
    const [link,setLink] = useState<SelectedLink>({parent:dashboardHelper[0],child:dashboardHelper[0].children?.[0]});
    
    return (
        <DasboardWrapper>
            <LeftDashboard getSelectedLinkIds={(id)=>setLink(id)}/>
            <RightDashboard selectedLink={link}/>
        </DasboardWrapper>
    )
}

export default Dashboard;
