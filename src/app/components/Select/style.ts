import { Box,FormControl,MenuItem,Select } from "@mui/material";
import styled from "styled-components";
import { H4 } from "../Typography/Typography";

export const ComponentContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  .label{
    line-height:20px;
  }
`;

interface StyledProps {
  isNoSubtitle?: boolean;
}

export const SmallLabeltext = styled(H4)<StyledProps>`
  display: ${(props) => (props.isNoSubtitle ? "none" : "")};
  color: #878787;
  margin: 0;
  min-width: 80%;
  white-space: break-spaces;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const MenuLabel = styled(H4)`
  color: #414141;
  margin: 0;
  width: 100%;
  white-space: break-spaces;
`;

export const MenuIcon = styled(Box)`
  min-width: 40px;
  display: flex;
  align-items: center;
`;

export const SelectBoxStyle = styled(FormControl)`
  width: 100% !important;
  margin-bottom: 16px !important;

  .title {
    margin: 0;
    margin-bottom:8px;
  }

  .MuiAutocomplete-endAdornment,
  .MuiSelect-icon {
    display: none;
  }
  span {
    color: #c5c5c5;
  }

  .MuiSelect-select.MuiSelect-select {
    padding: 12px 8px;
    border-radius: 4px;
    border: none !important;
    height: 42px;
    box-sizing: border-box;
    display: flex;
    z-index: 1;
  }

  .MuiInput-underline:hover:not(.Mui-disabled):before,
  .MuiSelect-nativeInput,
  .MuiInput-underline:before {
    border: none !important;
    outline: none !important;
  }
  .MuiInputBase-root {
    outline: none;
  }
  label {
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }

  .MuiInputBase-input,
  .MuiFormLabel-root {
    font-size: 16px;
    line-height: 19px;
    color: #343434 !important;
    font-family: "Roboto";
  }
  .MuiFormHelperText-root {
    color: #c94c43;
    margin: 0;
    font-size: 14px;
    text-align: left;
    font-family: "Roboto";
    line-height: 1;
  }

  .MuiInputLabel-formControl {
    position: relative;
  }
  label + .MuiInput-formControl {
    margin: 0;
  }
  .MuiInput-underline:before {
    border-bottom: none;
  }

  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: none;
  }
  .MuiInput-underline:after {
    border-bottom: none;
  }
  .Mui-error:after {
    border-bottom: none;
  }
  .dropdownicon {
    position: absolute;
    right: 12px;
    top: 38px;
    z-index: 0;
  }
`;


interface CustomNewSelectProps {
  value?: string | number | null;
}
export const CustomNewSelect = styled(Select)<CustomNewSelectProps>`
  width: 100%;
  height: 42px;
  margin-bottom: 6px;
  .MuiSelect-select {
    color: ${({ value }) => (value ? "#000" : "#c4c4c4")};
    padding: 10px 8px;
    background: #fff;
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: #c4c4c4 !important;
    border-width: 1px !important;
  }
  .Mui-disabled {
    background-color: #ddd;
  }
`;

export const MenuItemStyle = styled(MenuItem)`
    white-space: break-spaces !important;
`;
