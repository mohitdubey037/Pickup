import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';

export const LeftDashboardWrapper = styled.div`
  width: 18%;
  background: #fece3e;
  z-index: 1;
  text-align: left;
  color: #343434;
  height: 100vh;
`;

export const RightDashboardWrapper = styled.div`
  flex: 1;
    padding: 0 32px;
`;

export const LeftContent = styled.div``;

export const CustomListItem = styled.li`
  cursor: pointer;
  list-style: none;
  padding: 10px 0;
  padding-left: 20px;
  .logoIcon {
    width: 18px;
    height: 18px;
  }
  background:${(props:{selected:boolean}) => props.selected && '#ffdb6f'}
  
`;

export const ParentLink = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  margin-left: 20px;
`;

export const ChildLink = styled.div`
  font-size: 16px;
  line-height: 19px;
  margin: 15px 0;
  margin-left: 38px;
  text-decoration:${(props:{selected:boolean})=>props.selected && 'underline'}
`;

export const Row = styled.div`
  display: flex;
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
  `;
