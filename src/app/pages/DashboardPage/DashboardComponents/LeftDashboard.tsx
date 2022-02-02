import { useState,useEffect } from "react";
import {LeftContent,CustomListItem,ChildLink, LogoIcon, ListItem} from "./style";
import { dashboardHelper } from "../helper";
import { Link } from "../type";
import { H3 } from "app/components/Typography/Typography";
import services from "services";
import { navigate } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";


interface LeftDashboardProps {
    onDrawerItemSelect: (link: string) => void;
}

const LeftDashboard = ({ onDrawerItemSelect}: LeftDashboardProps) => {
  const [selectedLink, setSelectedLink] = useState('');
  const dispatch = useDispatch();
  

  useEffect(()=>{
    const url = window.location.pathname;
    setSelectedLink(url);
},[])

  const onLinkSelectHandler = (link: string) => {
    setSelectedLink(link);
    onDrawerItemSelect(link);
  };

  const handleLogOut = () => {
      dispatch({ type: "LOGOUT_USER" });
      services.removeToken();
      setTimeout(() => {
        navigate("/");
      }, 500);
  };
  const userRoleId = useSelector((state: any) => {
    return state.auth?.user?.roleId;
  });

  return (

      <LeftContent>
        {dashboardHelper.map((parent: Link) => {
          const isSelected =
            selectedLink
              ?.split("/dashboard/")[1]
              ?.includes(parent.link.split("/dashboard/")[1]) ||
            (!parent.children?.length && parent.link === selectedLink);
            
          return (parent.access ? parent.access.indexOf(userRoleId) !== -1 : true) && (
            <CustomListItem
              onClick={() => parent?.isLogOut === true ? handleLogOut() : 
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
                <H3 text={parent.label} />
              </ListItem>
              {parent.children?.map((child: Link) => {
                
                return (child.access ? child.access.indexOf(userRoleId) !== -1 : true) &&(
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
  );
};

export default LeftDashboard;
