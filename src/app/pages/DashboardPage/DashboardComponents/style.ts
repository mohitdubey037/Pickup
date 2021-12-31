import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';

export const LeftDashboardWrapper = styled.div`
	text-align: left;
	flex: 1.27;

	color: #343434;
	height: 100%;
  
`

export const DashboardRightWrapper = styled.div`
	min-height:100vh;
	flex: 5;
	border-top-left-radius: 40;
`

export const RightDashboardWrapper = styled.div`
	width: 100%;
`

export const DashboardContainer = styled.div`
//  padding: 24px 32px;
 `

export const LeftContent = styled.div`
 max-height: calc(100vh - 88px);
overflow:auto;

&::-webkit-scrollbar {
  width: 5px;
}


&::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}


&::-webkit-scrollbar-thumb {
  background: #ffffff8f;
  border-radius: 10px;
}


&::-webkit-scrollbar-thumb:hover {
  background: #ffffff8f;
}
`;

export const CustomListItem = styled.li`
  cursor: pointer;
  list-style: none;
  padding: 15px 0;
  padding-left: 24px;
  .logoIcon {
    width: 18px;
    height: 18px;
  }
  background:${(props: { selected: boolean }) => props.selected && '#ffdb6f'}
  
`;

export const ParentLink = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  margin-left: 19px;
`;

export const ChildLink = styled.div`
font-size: 16px;
    line-height: 19px;
    margin: 16px 0;
      font-weight: 100;
    padding-left: 41px;
    color: rgb(52 52 52 / 85%);
    
  text-decoration:${(props: { selected: boolean }) => props.selected && 'underline'}
`;

export const Row = styled.div`
  display: flex;
  align-items:center;
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
