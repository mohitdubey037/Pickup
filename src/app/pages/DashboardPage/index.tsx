import {useState} from 'react';
import { RouteComponentProps } from "@reach/router";
import {LeftDashboard,RightDashboard} from "./DashboardComponents";
import { DasboardWrapper } from "./style";
import { dashboardHelper } from './helper';

interface DashboardProps extends RouteComponentProps{
    children?:any;
}

const DashboardPage = ({children,navigate}:DashboardProps) => {
    const [link,setLink] = useState(dashboardHelper[0].link);
    return (
        <DasboardWrapper>
            <LeftDashboard getSelectedLinkIds={(id)=>{
                navigate?.(link)
                setLink(id);
            }}/>
            <RightDashboard>
                {children}
            </RightDashboard>
        </DasboardWrapper>
    )
}

export default DashboardPage;
