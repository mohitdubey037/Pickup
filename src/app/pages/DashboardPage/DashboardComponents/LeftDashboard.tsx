import { useState, useEffect } from "react";
import { navigate, useLocation } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";

import { H3 } from "app/components/Typography/Typography";
import services from "services";
import {
  LeftContent,
  CustomListItem,
  ChildLink,
  LogoIcon,
  ListItem,
} from "./style";
import { dashboardHelper } from "../helper";
import { Link } from "../type";

interface LeftDashboardProps {
  onDrawerItemSelect?: () => void;
}

const LeftDashboard = ({ onDrawerItemSelect }: LeftDashboardProps) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const userRoleId = useSelector((state: any) => state.auth?.user?.roleId);
  const isChildUser = useSelector(
    (state: any) => state.auth?.user?.childAccount
  );

  const [selectedLink, setSelectedLink] = useState("");

  useEffect(() => setSelectedLink(pathname), [pathname]);

  const handleLinkSelect = (link: string) => {
    onDrawerItemSelect?.();
    navigate(link);
  };

  const handleLogOut = () => {
    dispatch({ type: "LOGOUT_USER" });
    services.removeToken();
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <LeftContent>
      {dashboardHelper.map((parent: Link) => {
        const isSelected =
          selectedLink
            ?.split("/dashboard/")[1]
            ?.includes(parent.link.split("/dashboard/")[1]) ||
          (!parent.children?.length && parent.link === selectedLink);

        return (
          (parent.access ? parent.access.indexOf(userRoleId) !== -1 : true) && (
            <CustomListItem
              key={parent.id}
              onClick={() =>
                parent?.isLogOut === true
                  ? handleLogOut()
                  : parent.children && parent.children.length > 0
                  ? null
                  : handleLinkSelect(parent.link)
              }
              selected={isSelected}
              hasChild={parent.children && parent.children.length > 0}
            >
              <ListItem>
                <LogoIcon>
                  <img src={parent.logo} alt="" />
                </LogoIcon>
                <H3 text={parent.label} />
              </ListItem>
              {parent.children?.map((child: Link) => {
                return (
                  (child.access
                    ? child.access.indexOf(userRoleId) !== -1 &&
                      (child?.hideChild ? isChildUser !== 1 : true)
                    : true) && (
                    <ChildLink
                      key={child.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLinkSelect(child.link);
                      }}
                      selected={selectedLink === child.link}
                    >
                      <p className="labeltext">{child.label}</p>
                    </ChildLink>
                  )
                );
              })}
            </CustomListItem>
          )
        );
      })}
    </LeftContent>
  );
};

export default LeftDashboard;
