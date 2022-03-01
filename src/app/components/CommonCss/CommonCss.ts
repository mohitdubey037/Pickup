import { Box } from "@material-ui/core";
import { Divider } from "@mui/material";
import styled from "styled-components";
interface FlexProps {
  direction?: string;
  justifyContent?: any;
  left?: number;
  flex?: number;
  top?: number
  right?: number,
  bottom?: number
  alignItems?: any;
}



export const Flex = styled.div`
  display: flex;
  width: 100%;
  flex-direction: ${(props: FlexProps) => props.direction || "row"};
  justify-content: ${(props: FlexProps) => props.justifyContent};
  align-items: ${(props: FlexProps) => props.alignItems};
  margin-left: ${(props: FlexProps) => props.left || 0}px;
  margin-top: ${(props: FlexProps) => props.top || 0}px;
  margin-right: ${(props: FlexProps) => props.right || 0}px;
  margin-bottom: ${(props: FlexProps) => props.bottom || 0}px;
  flex: ${(props: FlexProps) => props.flex || 0}px;
`;



export const FullCard = styled(Box)`
  padding: 24px;
  background: #FFFFFF;
  box-shadow: 0px 4px 13px rgba(172, 172, 172, 0.2);
  border-radius: 8px;
  margin:24px 0;
    @media (max-width:600px){
      padding: 24px 16px;
      margin:16px 0;
      }
  .section-title {
    margin-bottom: 32px;
  }
`;




export const FlexBox = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const DateComponent = styled.div`
  margin-bottom: 16px;
  .MuiFormControl-root {
    margin-bottom: 6px;
    background: #fff;
  }
  .MuiFormControl-root div input {
    padding: 10px 12px;
  }
`;

export const LineDivider = styled(Divider)`
  margin: 24px 0 !important;
`;

export const ContentBox = styled(Box)`
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;

  .value {
    font-family: "Roboto-Bold";
    margin-top: 5px;
  }
  .title {
    font-family: "Roboto-Medium";
    font-size: 22px;
    margin-bottom: 24px;
  }
  .subtitle {
    font-family: "Roboto-Bold";
    margin-bottom: 0;
  }
`;


export const AccordionOuterBox = styled(Box)`
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 16px 24px;
  div {
    box-shadow: none !important;
  }
  .value {
    font-family: "Roboto-Medium";
  }
`;


export const AccordionNoBorderOuterBox = styled(Box)`
  border: none;
  padding: 0;
  margin-top:24px;
  div {
    box-shadow: none !important;
  }
  .MuiAccordion-root.Mui-expanded {
    margin: 16px 0;
    border-bottom: 1px solid #DCDCDC;
}
.MuiAccordion-root:before {
  top: 0px;
}
 .MuiAccordionSummary-root, .MuiAccordionSummary-content.Mui-expanded{
  margin: 8px 0px;
  min-height:auto;
}
.MuiAccordionSummary-content{
  margin:12px 0 0px;
}

`;


export const InnerAccordion = styled.div`
  border-top: 1px solid #dddddd;
  .MuiAccordionSummary-content {
    font-size: 16px !important;
    margin: 12px 0 !important;
}
`;

export const OrderImage = styled.img`
  width: 140px;
  height: 140px;
  object-fit: contain;
  background: #f5f5f5;
  border: 1px solid #eee;
`;