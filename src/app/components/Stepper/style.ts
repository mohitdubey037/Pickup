import { Box } from "@mui/material";
import styled from "styled-components";

export const StepperBox = styled(Box)`
  .MuiStepper-root {
    padding: 0;
  }
  .MuiStepIcon-root.MuiStepIcon-active {
    color: #ffffff;
    border: 2px solid #f8b41e;
    border-radius: 50px;
  }
  .MuiStepLabel-root.Mui-disabled .MuiStepIcon-root {
    color: #ffffff;
    border: 2px solid rgba(150, 150, 152, 0.8);
    border-radius: 50px;
  }

  .MuiStepLabel-root.Mui-disabled .label {
    color: rgba(150, 150, 152, 0.8);
  }  
  .MuiStepIcon-root.MuiStepIcon-active .MuiStepIcon-text,
  .MuiStepLabel-root.Mui-disabled .MuiStepIcon-text {
    fill: #fff;
  }
  .MuiStepLabel-label.MuiStepLabel-active .buttonstyle {
    background: #ffb91e;
    color: #000000;
  }
  .MuiStepIcon-text{
    display:none;
  }    
  .MuiStepIcon-root.Mui-active{
    color: #ffffff;
  border: 2px solid rgba(150,150,152,0.8);
  border-radius: 50px;
  }
  .MuiStepLabel-label.MuiStepLabel-completed .buttonstyle {
    background: #fece3e;
    color: #fff;
  }
  .label {
    color: #000000;
  }
  .MuiCollapse-wrapper {
    padding: 12px 0 0 0;
  }
  
  .MuiStepConnector-root{
    border-left: dotted #fece3e;
  }
  .MuiStep-completed .MuiStepContent-root {
    border-color: #fece3e;
  }
 
  .MuiStepConnector-lineVertical {
    border-image-source: linear-gradient(to bottom, #fece3e, #fece3e);
  }
  .MuiStepIcon-root.MuiStepIcon-active {
    border-color: rgba(150,150,152,0.8);
  }
  .MuiStepContent-root, .MuiStepConnector-root.Mui-disabled{
    border-left: dotted #989898;
  }
  .MuiStepConnector-lineVertical {
    min-height: 24px;
  }
`;

export const StepperInnerBox = styled(Box)`
  background: rgba(254, 206, 62, 0.2);
  border-radius: 8px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  max-width: 350px;
  .drivername {
    font-family: "Roboto-Medium";
    margin-bottom: 2px;
  }
  button {
    margin-left: auto;
  }
`;
