import { Drawer } from "@material-ui/core";
import styled from "styled-components";

interface CustomerDrawerProp {
    maxWidth ?: string
}

export const CustomDrawer = styled(Drawer)<CustomerDrawerProp>`
    div.MuiDrawer-paper{
        overflow-x: hidden;
        width: 555px;
        // max-width: ${props => props.maxWidth ?? "600px"};
    }
`

export const DrawerTitleDiv = styled.div`
    padding: 24px 32px 16px 32px;
    display: flex;
    align-items: center;
    position:sticky;
    right:0;
    left:0;
    justify-content: space-between;
    border-bottom: 1px solid #DDDDDD;
 `


export const DrawerContent = styled.div`
    padding: 24px 32px 0 32px;
    height: calc(100vh - 65px);
    overflow-y: auto;
    position:relative;
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
`

export const DrawerFooter = styled.div`
    padding: 24px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    right: 0;
    left: 0;
    bottom:0;
    background:#fff;
`