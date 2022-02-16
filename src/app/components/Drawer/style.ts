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
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #ddd;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #aaa;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #aaa;
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
