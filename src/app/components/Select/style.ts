import { Box, FormControl } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import styled, { css } from "styled-components";
import { H4 } from "../Typography/Typography";

interface SelectContainerType {
  disabled?: boolean;
}
export const ComponentContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-bottom:16px;
`;

interface StyledProps {
	isNoSubtitle?: boolean;
}


export const SmallLabeltext = styled(H4)<StyledProps>`
  display: ${props => props.isNoSubtitle ? 'none' : ''};
  color: #878787;
  margin: 0;
  min-width: 80%;
  white-space: break-spaces;
  @media (max-width: 600px) {
 display:none;
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
  display:flex;
  align-items:center;
`;


export const SelectBoxStyle = styled(FormControl)`
  width: 100% !important;
  margin-bottom:16px !important;
  
  .title{
margin:0;
  }

  .MuiAutocomplete-endAdornment,
  .MuiSelect-icon {
    display: none;
  }
  span {
    color: #c5c5c5;
  }

  .MuiSelect-select.MuiSelect-select {
    padding: 12px 5px !important;
    border-radius: 4px !important;
    border: 1px solid #c4c4c4 !important;
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
    margin-top:8px;
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

export const SelectContainer = styled.div<SelectContainerType>`
    width: 100%;
    height: 42px;
    align-items: flex-start;
    display: flex;
    padding: 12px 5px;
    border-radius: 4px;
    border: 1px solid #C4C4C4;
    cursor:pointer;
    align-items: center ;
    box-sizing:border-box;
    margin-bottom:6px;
    ${(props) =>
      props.disabled &&
      css`
        background-color: #ddd;
      `}
 }
`;
export const CustomSelect = styled.select`
  outline: none;
  border: none;
  background-color: #fff;
  width: 100%;
`;
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: "8px 12px",
    },
    placeholder: {
      flex: 1,
      textAlign: "initial",
      color: "#C4C4C4",
    },
  })
);
