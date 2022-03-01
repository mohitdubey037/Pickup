import { Box } from "@mui/material";
import styled from "styled-components";


export const FormWrapper = styled.div`
 margin-top:20px;
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

export const CustomInput = styled.input`
  height: 42px;
  width: 100%;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  outline-style: none;
  position: relative;
  padding: 0 10px;
  box-sizing:border-box;
  margin-bottom:6px;
  font-size:16px;
  &::placeholder {
    color: #c4c4c4;
  }
  background-color: ${(props: { disabled?: boolean }) =>
    props.disabled ? "#ddd" : "#fff"};
`;

export const CustomInputTextArea = styled.textarea`
  height: 154px;
  width: 100%;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  outline-style: none;
  position: relative;
  padding: 12px 8px;
  box-sizing:border-box;

  &::placeholder {
    color: #c4c4c4;
    font-size: 16px;
  }
  background-color: ${(props: { disabled?: boolean }) =>
    props.disabled ? "#c4c4c4" : "#fff"};
`;

export const ErrorLabel = styled.span`
  color: #c94c43;
  font-size:12px;
`;

export const CommonError = styled.div`
  color: #c94c43;
  font-size:12px;
  margin-bottom:16px;
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
margin-bottom:16px;
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




export const DateTimePickerBox = styled(Box)`
margin-bottom:16px;
.MuiTextField-root{
  width:100%;
  margin-bottom:6px;
}
.MuiInputBase-input{
  height:42px;
  box-sizing:border-box;
}
.MuiTextField-root{
  background:#fff;
}
.MuiOutlinedInput-notchedOutline {
  border-color: #C4C4C4 !important;
  border-width: 1px !important;
}
`;

