/* eslint-disable jsx-a11y/alt-text */
import { dropdown, settings } from "app/assets/Icons";
import { Avatar, Menu, MenuItem } from "@material-ui/core";
import { AppbarContainer, MainAppBar } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { AuthUser } from "types";
import { useState } from "react";
import { navigate } from "@reach/router";
import { useEffect } from "react";

export default function Appbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();

  const auth = useSelector((state: { auth: { user: AuthUser } }) => {
    return state.auth;
  });
  const { user } = auth;

  useEffect(() => {
    if (!user) {
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
      setTimeout(() => {
        navigate("/");
      }, 500);
    }
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <MainAppBar elevation={0} position="static">
      <AppbarContainer>
        <img style={{ width: "1.5rem", cursor: "pointer" }} src={settings} />
        <div style={{ textAlign: "right", marginLeft: "1rem" }}>
          <h5 style={{ margin: 0 }}>{user?.firstName}</h5>
          <span style={{ fontSize: "14px", color: "#343434" }}>Admin</span>
        </div>
        <Avatar
          style={{ margin: "1rem 1rem 1rem 1rem" }}
          alt="dummy avatar"
          src="https://i.pravatar.cc/300"
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
    </MainAppBar>
  );
}
