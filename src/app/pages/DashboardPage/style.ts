import styled from "styled-components";
import AppBar from '@material-ui/core/AppBar';

export const DasboardWrapper = styled.div`
  height: 100%;
  display: flex;
`;

export const LeftDashboard = styled.div`
  width: 24%;
  background: #fece3e;
  height: inherit;
  z-index: 1;
  padding: 15px;
  position: absolute;
  text-align: left;
  color: #343434;
`;

export const RightDashboard = styled.div`
  position: absolute;
  height: inherit;
  width: 80%;
  background: #fafafa;
  border-radius: 40px 0px 0px 0px;
  left: 20%;
  z-index: 5;
`;

export const ParentLink = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
`;

export const ChildLink = styled.div`
font-size: 16px;
line-height: 19px;
`;

export const MainAppBar = styled(AppBar)`
  &.MuiAppBar-root{
    background-color: transparent;
  }
`

export const AppbarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #DDDDDD;
`