import { Accordion } from "@mui/material";
import styled from "styled-components";

export const CustomAccordion = styled(Accordion)`
  .MuiAccordionSummary-content {
    font-size: 18px;
    font-family: "Roboto-Bold";
    color: #343434;
    margin: 12px 0;
  }
  .MuiAccordion-root.Mui-expanded:first-child {
    margin: 12px 0;
  }
  .MuiAccordionSummary-root.Mui-expanded {
    min-height: auto;
  }
  MuiPaper-root MuiAccordion-root,
  .MuiAccordionSummary-content.Mui-expanded,
  .MuiAccordionSummary-root,
  .MuiAccordionDetails-root {
    margin: 12px 0px;
    padding: 0px;
    width:100%;
  }
  .MuiAccordion-root:before {
    display: none;
  }

`;
