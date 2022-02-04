import React, { useEffect, useState } from "react";
import { Avatar, IconButton, MenuItem } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { navigate } from "@reach/router";

import { dropdown, logo } from "app/assets/Icons";
import {
  AppbarContainer,
  LeftBox,
  MenuLinks,
  ProfileBox,
  ProfileMenu,
  RightBox,
} from "./style";
import { AuthUser } from "types";
import services from "services";
import { PERMISSION_TYPES } from "../../../constants";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { SidebarLogo } from "app/pages/DashboardPage/DashboardComponents/style";
import { DrawerHeading, H4, H5 } from "../Typography/Typography";
import { LeftDashboard } from "app/pages/DashboardPage/DashboardComponents";
import { globalActions } from "store/reducers/GlobalReducer";

export default function Appbar() {
  const [menuVisibility, setMenuVisibility] = React.useState(false);
  const [link, setLink] = useState("");
  // const [showMenu, setShowMenu] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  // const [profileImage, setProfileImage] = useState(null);
  const pathname = window?.location?.pathname;
  const dispatch = useDispatch();

  const auth = useSelector((state: { auth: { user: AuthUser } }) => {
    return state.auth;
  });
  const { user } = auth;

  let getRole = (roleId) =>
    PERMISSION_TYPES.filter((role) => role.value === roleId);

  useEffect(() => {
    const authToken = services.getToken();
    if (!authToken) {
      navigate("/");
    }
  }, [auth.user?.userId]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const profileHandler = () => {
    navigate("/dashboard/my-account/personal-profile");
    setAnchorEl(null);
  };
  const accountHandler = () => {
    navigate("/dashboard/my-account/company-profile");
    setAnchorEl(null);
  };
  const handleClose = (e) => {
    const { id } = e.target;
    if (id === "logout") {
      dispatch({ type: "LOGOUT_USER" });
      dispatch(globalActions.showLoader(false));
      services.removeToken();
      setTimeout(() => {
        navigate("/");
      }, 500);
    }
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <AppbarContainer>
        <LeftBox>
          <SidebarLogo className="logo">
            <img src={logo} alt="logo" />
          </SidebarLogo>
          {pathname.includes("/charter-shipment/order-summary") ? (
            <DrawerHeading title="Order Confirmation" className="title" />
          ) : pathname.includes("/charter-shipment/shipment-summary") ? (
            <DrawerHeading title="Payment" className="title" />
          ) : (
            <></>
          )}
        </LeftBox>

        <RightBox>
          <ProfileBox>
            <H4 text={user?.firstName} className="profilename" />
            <H5
              className="designation"
              text={
                user?.roleId
                  ? getRole(user?.roleId)?.[0]?.label
                  : getRole(4)?.[0]?.label
              }
            />
          </ProfileBox>

          <Avatar
            alt="profile picture"
            src={user?.profileImage}
            className="avatar"
          />

          <ProfileMenu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={profileHandler}>Profile</MenuItem>
            {[4].indexOf(user?.roleId) !== -1 && (
              <MenuItem onClick={accountHandler}>My account</MenuItem>
            )}
            <MenuItem id={"logout"} onClick={handleClose}>
              Logout
            </MenuItem>
          </ProfileMenu>

          <img
            src={dropdown}
            alt="dropdown"
            aria-describedby={id}
            onClick={handleClick}
            className="drodwonicon"
          />

          <IconButton
            className="menuicon"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setMenuVisibility((previous) => !previous)}
          >
            {menuVisibility ? <CloseIcon /> : <MenuIcon />}
          </IconButton>

          <MenuLinks display={menuVisibility ? "block" : "none"}>
            <LeftDashboard
              onDrawerItemSelect={(id) => {
                navigate?.(id);
                setLink(id);
                setMenuVisibility(false);
              }}
            />
          </MenuLinks>
        </RightBox>
      </AppbarContainer>
    </>
  );
}
