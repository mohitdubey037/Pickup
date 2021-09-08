import { useState } from "react";
import { LeftDashboardWrapper,LeftContent,CustomListItem,ChildLink,ParentLink,Row } from "./style";
import { dashboardHelper } from "../helper";
import { Link } from "../type";
import { LogoImg } from "app/assets/Icons";

interface LeftDashboardProps{
    getSelectedLinkIds?:(link:string)=>void;
}

const LeftDashboard = ({getSelectedLinkIds}:LeftDashboardProps) => {
    const [selectedLink,setSelectedLink] = useState(dashboardHelper[0].link);

    const onLinkSelectHandler=(link:string)=>{
        setSelectedLink(link);
        getSelectedLinkIds && getSelectedLinkIds(link)
    }
    return (
        <LeftDashboardWrapper>
            <LogoImg width={'62px'} margin={'10px'}/>
                <LeftContent>
                {dashboardHelper.map((parent:Link)=>{
                    return(
                        <CustomListItem 
                            onClick={(e)=>onLinkSelectHandler(parent.children?parent.children[0].link:parent.link)}
                            className={selectedLink===parent.link || selectedLink===parent.children?.[0].link?'selected':''} 
                        >
                        <Row>
                        <img src={parent.logo} alt=''className='logoIcon'/>
                      <ParentLink>{parent.label}</ParentLink> 
                      </Row> 
                      {parent.children?.map((child:Link)=>{
                          return(
                            <ChildLink onClick={(e)=>{
                                e.stopPropagation();
                                onLinkSelectHandler(child.link)
                                }}>
                                {child.label}
                                </ChildLink>
                          )
                      })
                      }
                      </CustomListItem>
                    )
                })}
                </LeftContent>
            </LeftDashboardWrapper>
    )
}

export default LeftDashboard
