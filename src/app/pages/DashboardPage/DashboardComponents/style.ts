import styled from "styled-components";
import { Box } from "@mui/material";

export const LeftDashboardWrapper = styled.div`
  text-align: left;
  width: 263px;
  color: #343434;
  height: 100%;
  @media (max-width: 1023px) {
    display: none;
  }
`;

export const SidebarLogo = styled(Box)`
  padding: 10px 10px 5px 10px;
  img {
    width: 62px;
    height: 62px;
  }
`;

export const DashboardRightWrapper = styled.div`
  min-height: 100vh;
  width: calc(100% - 263px);
  border-top-left-radius: 40;

  @media (max-width: 1023px) {
    width: 100%;
    height: auto;
  }
`;

export const RightDashboardWrapper = styled.div`
  width: 100%;
`;

export const LeftContent = styled.div`
  max-height: calc(100vh - 88px);
  overflow: auto;

  scrollbar-width: thin;
  scrollbar-color: #ddd #eee;
`;

interface StyledProps {
  // isMobileMenu?: boolean;
  selected?: boolean;
  hasChild?: boolean;
}

export const CustomListItem = styled.li<StyledProps>`
  cursor: ${(props) => (props.hasChild ? "default" : "pointer")};
  list-style: none;
  padding: 16px 24px;
  background: ${(props) => props.selected && "#ffdb6f"};
  @media (max-width: 1023px) {
    border-bottom: 1px solid #ffe79e;
  }

  &: last-child {
    display: none;
    p {
      text-align: center;
      width: 100%;
      color: #c94c43;
    }
    @media (max-width: 1023px) {
      display: block;
    }
  }
`;

export const LogoIcon = styled.div`
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  @media (max-width: 1023px) {
    display: none;
  }
`;

export const ChildLink = styled.div`
  cursor: pointer;
  margin-left: 42px;
  @media (max-width: 1023px) {
    margin-left: 16px;
  }
  text-decoration: ${(props: { selected: boolean }) =>
    props.selected && "underline"};
  .labeltext {
    margin: 0;
    text-transform: capitalize;
    padding: 5px 0;
    @media (max-width: 1023px) {
      padding: 4px 0;
    }
    &:nth-child(1) {
      margin-top: 8px;
    }
    &:nth-last-child(1) {
      margin-bottom: 0;
    }
  }
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
`;



export const AppbarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #dddddd;
`;
