import styled from "styled-components";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

export const SearchTableTop = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding:12px 24px;
  justify-content: space-between;
  box-sizing:border-box;
  .heading{
    color: #f99746;
  }
`;



export const TabWrapper = styled.div`
.tabs{
  position:fixed;
  top:10px;
}
.MuiTab-root{
  font-size: 20px;
  line-height: 23px;
  font-family: 'Roboto';
  text-transform: capitalize;
  color:#343434 !important;
  padding: 16px 0;
  margin-right: 42px;
}
 
.Mui-selected{
  font-family:"Roboto-Bold";
  color:#000 !important;
}
.MuiTabs-indicator{
  background-color: #FECE3E;
  height: 4px;
}
`;


export const ShareBlock = styled.span`
display:flex;
align-items:center;
cursor:pointer;
  .ShareText {
    color: #1b8af0;
    margin:0;
    margin-left: 7px;
  }
`;



export const MapDiv = styled.div`
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

export const SecondStepContent = styled(Paper)`
  height: 80px;
  width: 338px;
  display: flex;
`;

export const AvatarDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 11px 0px 13px;
`;

export const NameAndCarDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .NameSpan {
    font-size: 16px;
    font-weight: 500;
  }
  .NumberSpan {
    font-size: 12px;
  }
`;

export const CallButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 54px;
  Button {
    border-radius: 8px;
  }
`;

export const AdvanceFilterBox = styled.div`
 .heading{
   margin:24px 0;
 }
`;

export const ItemDetailsBox = styled(Box)`
div{
  box-shadow:none !important;
}
`;