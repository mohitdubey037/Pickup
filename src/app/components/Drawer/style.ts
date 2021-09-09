import { Drawer } from "@material-ui/core";
import styled from "styled-components";

export const CustomDrawer = styled(Drawer)`
    div.MuiDrawer-paper{
        width: 40%;
    }
`

export const DrawerTitleDiv = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #DDDDDD;
    width: 100%;
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
    width: 100%;
    div{
        width: 30%;
        button{
            padding: 0.5rem !important;
        }
    }
`