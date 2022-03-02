import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { navigate, useLocation } from "@reach/router";
import { Avatar, IconButton } from "@mui/material";
import { MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import { SidebarLogo } from "app/pages/DashboardPage/DashboardComponents/style";
import { LeftDashboard } from "app/pages/DashboardPage/DashboardComponents";
import { dropdown, logo } from "app/assets/Icons";
import { globalActions } from "store/reducers/GlobalReducer";
import services from "services";
import {
  AppbarContainer,
  LeftBox,
  MenuLinks,
  ProfileBox,
  ProfileMenu,
  RightBox,
} from "./style";
import { PERMISSION_TYPE_BY_ID } from "../../../constants";
import { DrawerHeading, H4, H5 } from "../Typography/Typography";

export default function Appbar() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const user = useSelector((state: any) => state.auth?.user);

  const [menuVisibility, setMenuVisibility] = React.useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const authToken = services.getToken();
    if (!authToken) {
      navigate("/");
    }
  }, [user?.userId]);

  const handleClose = (e) => {
    const { id } = e.target;
    if (id === "profile") {
      navigate("/dashboard/my-account/personal-profile");
    } else if (id === "my-account") {
      navigate("/dashboard/my-account/company-profile");
    } else if (id === "logout") {
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
    <AppbarContainer>
      <LeftBox>
        <SidebarLogo className="logo">
          <img src={logo} alt="PICKUPS" />
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
            text={PERMISSION_TYPE_BY_ID?.[user?.roleId] || "-"}
          />
        </ProfileBox>

        <Avatar src={user?.profileImage} className="avatar" />

        <ProfileMenu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem id="profile" onClick={handleClose}>
            Profile
          </MenuItem>
          {[4].indexOf(user?.roleId) !== -1 && user?.childAccount !== 1 && (
            <MenuItem id="my-account" onClick={handleClose}>
              My Account
            </MenuItem>
          )}
          <MenuItem id="logout" onClick={handleClose}>
            Logout
          </MenuItem>
        </ProfileMenu>

        <img
          src={dropdown}
          alt="dropdown"
          aria-describedby={id}
          onClick={(e: any) => setAnchorEl(e.currentTarget)}
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
          <LeftDashboard onDrawerItemSelect={() => setMenuVisibility(false)} />
        </MenuLinks>
      </RightBox>
    </AppbarContainer>
  );
}
