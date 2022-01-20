import { Box, Grid, Paper } from "@material-ui/core";
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
export const FormWrapper = styled.div`
 margin-top:20px;
//  padding:24px;  width: 97%;
  }
 
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: 100%;
  margin-bottom:16px;
  img {
    cursor: pointer;
    position: absolute;
    top: 36px;
    right: 5px;
  }
`;

// export const CustomLabel = styled.label`
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 19px;
//   color: #343434;
//   margin-bottom: 0.5rem;
// `;

export const CustomInput = styled.input`
  height: 42px;
  width: 100%;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  outline-style: none;
  position: relative;
  padding: 0 5px;
  box-sizing:border-box;
  margin-bottom:6px;
  &::placeholder {
    color: #c4c4c4;
    font-size: 16px;
  }
  background-color: ${(props: { disabled?: boolean }) =>
    props.disabled ? "#c4c4c4" : "white"};
`;

export const CustomInputTextArea = styled.textarea`
  height: 154px;
  width: 100%;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  outline-style: none;
  position: relative;
  padding: 10px 5px;

  &::placeholder {
    color: #c4c4c4;
    font-size: 16px;
  }
  background-color: ${(props: { disabled?: boolean }) =>
    props.disabled ? "#c4c4c4" : "white"};
`;

export const ErrorLabel = styled.span`
  color: #c94c43;
`;

export const FullCard = styled(Box)`
  padding: 24px;
  background: #FFFFFF;
  box-shadow: 0px 4px 13px rgba(172, 172, 172, 0.2);
  border-radius: 8px;
  margin:24px 0;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props: FlexProps) => props.direction || "row"};
  justify-content: ${(props: FlexProps) => props.justifyContent};
  align-items: ${(props: FlexProps) => props.alignItems};
  width: 100%;
  margin-left: ${(props: FlexProps) => props.left || 0}px;
  margin-top: ${(props: FlexProps) => props.top || 0}px;
  margin-right: ${(props: FlexProps) => props.right || 0}px;
  margin-bottom: ${(props: FlexProps) => props.bottom || 0}px;

  flex: ${(props: FlexProps) => props.flex || 0}px;
`;




export const Block = styled.div`
  display: block;
  text-align: start;
`;

export const VisibilityBox = styled.div`
 position:absolute;
 right:12px;
 top:36px;

 svg{
   fill:#C0C0C0;
   width:22px;
   height:22px;
 }
`;


export const SwitchBox = styled.div`
.MuiSwitch-root {
  width: 82px;
  height: 42px;
  padding: 0;
}
.MuiSwitch-switchBase {
  color: #f5f5f5;
  padding:3px;
}
.MuiSwitch-thumb {
  width: 36px;
  height: 36px;
}
.MuiSwitch-track {
  opacity: 1;
  background-color: #e5e5e5;
  border-radius: 300px;
}
.MuiSwitch-colorSecondary.Mui-checked {
  color: #FECE3E;
}
.MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track{
  background: rgba(254, 206, 62, 0.2);
  border-radius: 300px;
}
.MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track {
  opacity: 1;
  border-radius: 300px;
}
.MuiSwitch-colorSecondary.Mui-checked {
 padding:3px;
}
.MuiSwitch-switchBase.Mui-checked {
  transform: translateX(38px);
}
.MuiFormControlLabel-labelPlacementTop {
  margin-left: 0;
  align-items: flex-start;
}
.MuiTypography-root {
  font-size: 16px;
    line-height: 19px;
    color: #343434;
    font-family: "Roboto";
    margin: 0 0 8px 0;
}
`;