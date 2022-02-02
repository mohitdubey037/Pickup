import { Box } from "@material-ui/core";
import styled from "styled-components";
// import { Accordion } from "@material-ui/core";

export const InnerAccordion = styled.div`
    margin: 0;
    padding: 0;
    .MuiAccordionSummary-root {
        margin: 0px;
    }
`;

export const MainDiv = styled.div`
  .MuiAccordionSummary-content {
    font-size: 18px;
    font-weight: 700;
    color: #343434;
  }
  MuiPaper-root MuiAccordion-root {
      margin: 0px;
      padding: 0px;
  }
`;

export const FavoritesBox = styled(Box)`
display:flex;
align-items:center;
margin:32px 0 0 0;
.title{
  font-family :"Roboto-Bold";
  margin:0;
  margin-right:16px;
  text-transform:capitalize;
}
.icon{
  margin-right:5px;
}
.label{
  color:#878787;
  display:inline-block;
}
.favorites{
  display:flex;
  align-items:center;
  cursor:pointer;
}
`;

export const LabelSpan = styled.span`
  margin: 5px 0;
  font-size: 16px;
  font-weight: 400;
`;

export const ContentSpan = styled.span`
  margin: 5px 0;
  font-weight: 600;
  font-size: 16px;
  color: #343434;
`;

export const OrderImageWrapper = styled.div`
    width: fit-content;
    margin-top: 20px;
    position: relative;
`

export const OrderImage = styled.img`
    display: block;
    max-width:180px;
    max-height:95px;
    width: auto;
    height: auto;
`;

export const Remove = styled.img`
    position: absolute;
    right: -10px;
    top: -10px;
    cursor: pointer;
`


