import { Accordion } from "@material-ui/core";
import styled from "styled-components";

export const CustomAccordion = styled(Accordion)`
    .MuiAccordionSummary-content {
        font-size: 18px;
        font-family: "Roboto-Bold";
        color: #343434;
        margin: 24px 0;
      }
      .MuiAccordion-root.Mui-expanded:first-child{
          
        margin: 24px 0;
      }
    .MuiAccordionSummary-root.Mui-expanded{
      min-height:auto;
    }
      MuiPaper-root MuiAccordion-root , .MuiAccordionSummary-content.Mui-expanded, .MuiAccordionSummary-root, .MuiAccordionDetails-root{
        margin: 0px;
        padding: 0px;
      }
      .MuiAccordion-root:before{
          display:none;
      }
      .MuiCollapse-wrapper {
        padding: 16px 0 0 0;
    }
   
`