import { Drawer } from "@material-ui/core";
import styled from "styled-components";

interface CustomerDrawerProp {
    maxWidth ?: string
}

export const CustomDrawer = styled(Drawer)<CustomerDrawerProp>`
    div.MuiDrawer-paper{
        overflow-x: hidden;
        min-width: 600px;
        max-width: ${props => props.maxWidth ?? "600px"};
    }
`

export const DrawerTitleDiv = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #DDDDDD;
 `


export const DrawerContent = styled.div`
    padding: 1rem;
    height: 100vh;
    overflow-y: auto;
`

export const DrawerFooter = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
     div{
        width: 30%;
        button{
            padding: 0.5rem !important;
        }
    }
`