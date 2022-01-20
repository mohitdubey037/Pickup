import { useState,useEffect } from "react";
import {LeftDashboardWrapper,LeftContent,CustomListItem,ChildLink, LogoIcon, ListItem} from "./style";
import { dashboardHelper } from "../helper";
import { Link } from "../type";
import { LogoImg } from "app/assets/Icons";
import { ListLabel, SmallLabel } from "app/components/Typography/Typography";

interface LeftDashboardProps {
    onDrawerItemSelect: (link: string) => void;
}

const LeftDashboard = ({ onDrawerItemSelect }: LeftDashboardProps) => {
  const [selectedLink, setSelectedLink] = useState('');

  useEffect(()=>{
    const url = window.location.pathname;
    setSelectedLink(url);
},[])

  const onLinkSelectHandler = (link: string) => {
    setSelectedLink(link);
    onDrawerItemSelect(link);
  };
 
  return (
    <LeftDashboardWrapper>
      <LogoImg width={"62px"} padding={"10px 10px 5px 10px"} />
      <LeftContent>
        {dashboardHelper.map((parent: Link) => {
          const isSelected =
            selectedLink
              ?.split("/dashboard/")[1]
              ?.includes(parent.link.split("/dashboard/")[1]) ||
            (!parent.children?.length && parent.link === selectedLink);
            
          return (
            <CustomListItem
              onClick={() =>
                onLinkSelectHandler(
                  parent.children ? parent.children[0].link : parent.link
                )
              }
              selected={isSelected}
             >
              <ListItem>
                <LogoIcon>
                <img src={parent.logo} alt=""  />
                </LogoIcon>
                <ListLabel text={parent.label} />
              </ListItem>
              {parent.children?.map((child: Link) => {
                return (
                  <ChildLink
                    onClick={(e) => {
                      e.stopPropagation();
                      onLinkSelectHandler(child.link);
                    }}
                    selected={selectedLink === child.link}
                  >
                    <p className="labeltext">{child.label}</p>
                  </ChildLink>
                );
              })}
            </CustomListItem>
          );
        })}
      </LeftContent>
    </LeftDashboardWrapper>
  );
};

export default LeftDashboard;
