import { useState } from "react";
import {LeftDashboardWrapper,LeftContent,CustomListItem,ChildLink,ParentLink,Row} from "./style";
import { dashboardHelper } from "../helper";
import { Link } from "../type";
import { LogoImg } from "app/assets/Icons";

interface LeftDashboardProps {
    onDrawerItemSelect: (link: string) => void;
}

const LeftDashboard = ({ onDrawerItemSelect }: LeftDashboardProps) => {
  const [selectedLink, setSelectedLink] = useState(dashboardHelper[0].link);

  const onLinkSelectHandler = (link: string) => {
    setSelectedLink(link);
    onDrawerItemSelect(link);
  };
 
  return (
    <LeftDashboardWrapper>
      <LogoImg width={"62px"} margin={"10px"} />
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
              <Row>
                <img src={parent.logo} alt="" className="logoIcon" />
                <ParentLink>{parent.label}</ParentLink>
              </Row>
              {parent.children?.map((child: Link) => {
                return (
                  <ChildLink
                    onClick={(e) => {
                      e.stopPropagation();
                      onLinkSelectHandler(child.link);
                    }}
                    selected={selectedLink === child.link}
                  >
                    {child.label}
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
