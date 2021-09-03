import { useState } from "react";
import { LeftDashboardWrapper,LeftContent,CustomListItem,ChildLink,ParentLink,Row } from "../style";
import { dashboardHelper } from "../helper";
import { Link,SelectedLink } from "../type";

interface LeftDashboardProps{
    getSelectedLinkIds?:(link:SelectedLink)=>void;
}

const LeftDashboard = ({getSelectedLinkIds}:LeftDashboardProps) => {
    const [selectedLink,setSelectedLink] = useState<SelectedLink>(
        {parent:dashboardHelper[0],child:dashboardHelper[0].children?.[0]}
        );

    const onLinkSelectHandler=(id:SelectedLink)=>{
        console.log(id)
        setSelectedLink(id);
        getSelectedLinkIds && getSelectedLinkIds(id)
    }
    return (
        <LeftDashboardWrapper>
                <LeftContent>
                {dashboardHelper.map((link:Link)=>{
                    return(
                        <CustomListItem 
                            className={selectedLink.parent.id===link.id?'selected':''} 
                            onClick={()=>onLinkSelectHandler({parent:link,child:link.children?.[0]})}>
                        <Row>
                        <img src={link.logo} alt=''className='logoIcon'/>
                      <ParentLink>{link.label}</ParentLink> 
                      </Row> 
                      {link.children?.map((child:Link)=>{
                          return(
                            <ChildLink onClick={(e)=>{
                                e.stopPropagation();
                                onLinkSelectHandler({parent:selectedLink.parent,child:child})
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
