/* eslint-disable jsx-a11y/alt-text */
import { dropdown, settings } from "app/assets/Icons";
import { Avatar, Menu, MenuItem } from "@material-ui/core";
import { AppbarContainer } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { AuthUser } from "types";
import { useState } from "react";
import { navigate } from "@reach/router";
import { useEffect } from "react";
import services from "services";

export default function Appbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  // const [profileImage, setProfileImage] = useState(null);
  const pathname = window?.location?.pathname;
  const dispatch = useDispatch();

  const auth = useSelector((state: { auth: { user: AuthUser } }) => {
    return state.auth;
  });
  const { user } = auth;

  useEffect(() => {
    const authToken = services.getToken();
    if (!authToken) {
      navigate("/");
    }
  }, [auth.user?.userId]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    const { id } = e.target;
    if (id === "logout") {
      dispatch({ type: "LOGOUT_USER" });
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
        {pathname.includes("/order-summary") && (
          <h3
            style={{
              marginRight: "auto",
              paddingLeft: "32px",
              fontSize: "24px",
            }}
          >
            Order Confirmation
          </h3>
        )}
        <img
          style={{ width: "1.5rem", cursor: "pointer" }}
          src={settings}
          alt="settings"
        />
        <div style={{ textAlign: "right", marginLeft: "1rem" }}>
          <h5 style={{ margin: 0 }}>{user?.firstName}</h5>
          <span style={{ fontSize: "14px", color: "#343434" }}>Admin</span>
        </div>
        <Avatar
          style={{ margin: "1rem 1rem 1rem 1rem" }}
          alt="dummy avatar"
          src={user?.profileImage}
        />

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem id={"logout"} onClick={handleClose}>
            Logout
          </MenuItem>
        </Menu>
        <img
          style={{ margin: "1rem 2rem 1rem 0rem", cursor: "pointer" }}
          src={dropdown}
          alt="dropdown"
          aria-describedby={id}
          onClick={handleClick}
        />
      </AppbarContainer>
    </>
  );
}
