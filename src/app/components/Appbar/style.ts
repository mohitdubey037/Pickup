import { AppBar, Box } from "@material-ui/core";
import styled from "styled-components";

export const MainAppBar = styled(AppBar)`
  &.MuiAppBar-root {
    background-color: #fff;
  }
`;

export const AppbarContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 8px 16px;
  box-sizing: border-box;
  border-bottom: 1px solid #dddddd;
  background-color: white;
  border-top-left-radius: 30px;
  z-index: 999;
  position: relative;
  @media (max-width: 1023px) {
    border-top-left-radius: 0px;
    padding: 0 8px;
    position: fixed;
  }
`;

export const LeftBox = styled(Box)`
  display: none;
  @media (max-width: 1023px) {
    display: block;
  }
`;

export const RightBox = styled(Box)`
  margin-left: auto;
  display: flex;
  align-items: center;
  .avatar {
    width: 48px;
    height: 48px;
    margin-right: 12px;
  }
  .drodwonicon {
    cursor: pointer;
    @media (max-width: 1023px) {
      display: none;
    }
  }

  .menuicon {
    @media (min-width: 1024px) {
      display: none;
    }
  }
`;

export const ProfileBox = styled(Box)`
  margin: 0 16px;
  text-align: right;
  .profilename {
    margin: 0;
    margin-bottom: 2px;
  }
  .designation {
    opacity: 0.8;
  }
`;

export const MenuLinks = styled(Box)`
  @media (max-width: 1023px) {
    position: absolute;
    background: #fece3e;
    top: 80px;
    z-index: 999;
    left: 0;
    right: 0;
    width: 100%;
  }
`;
