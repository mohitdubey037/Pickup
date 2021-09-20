import { AppBar } from "@material-ui/core"
import styled from "styled-components"

export const MainAppBar = styled(AppBar)`
  &.MuiAppBar-root{
    background-color: white;
  }
`

export const AppbarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #DDDDDD;
`