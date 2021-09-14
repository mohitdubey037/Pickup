import {useState} from 'react';
import { RouteComponentProps } from "@reach/router";
import {LeftDashboard,RightDashboard} from "./DashboardComponents";
import { DasboardWrapper } from "./style";

interface DashboardProps extends RouteComponentProps{
    children?:any;
}

const DashboardPage = ({children,navigate}:DashboardProps) => {
    const [link,setLink] = useState('');

    return (
        <DasboardWrapper>
            <LeftDashboard onDrawerItemSelect={(id)=>{
                navigate?.(id)
                setLink(id);
            }}/>
            <RightDashboard>
                {children}
            </RightDashboard>
        </DasboardWrapper>
    )
}

export default DashboardPage;
 