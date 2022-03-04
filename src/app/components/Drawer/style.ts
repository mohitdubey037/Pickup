import { Drawer } from "@material-ui/core";
import styled from "styled-components";

interface CustomerDrawerProp {
  size?: string;
}

export const CustomDrawer = styled(Drawer)<CustomerDrawerProp>`
  div.MuiDrawer-paper {
    overflow-x: hidden;
    width: ${(props) => (props.size === "small" ? "555px" : "1024px")};
    @media (max-width: 1024px) {
      width: ${(props) => (props.size === "small" ? "555px" : "100%")};
    }
    @media (max-width: 600px) {
      width: 100%;
    }
  }
`;

export const DrawerTitleDiv = styled.div`
  padding: 24px 32px 16px 32px;
  display: flex;
  align-items: center;
  position: sticky;
  right: 0;
  left: 0;
  justify-content: space-between;
  border-bottom: 1px solid #dddddd;
  @media (max-width: 600px) {
    padding: 16px;
  }
`;

export const DrawerContent = styled.div`
  padding: 24px 32px 0;
  height: calc(100vh - 65px);
  overflow-y: auto;
  position: relative;
  @media (max-width: 600px) {
    padding: 16px 16px 0;
  }
 
  scrollbar-width: thin;
  scrollbar-color: #aaa #bbb;
  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: #ddd;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #aaa;
  }
  &::-webkit-scrollbar-track,
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
  }
`;

export const DrawerFooter = styled.div`
  padding: 24px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  right: 0;
  left: 0;
  bottom: 0;
  background: #fff;
  z-index: 99;
  @media (max-width: 600px) {
    padding: 16px 0;
  }
`;

export const DrawerInnerContent = styled.div`
min-height: calc(100vh - 180px);
`;
