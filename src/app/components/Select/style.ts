import { Box, FormControl } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import styled, { css } from "styled-components";
import { SmallLabel } from "../Typography/Typography";

interface SelectContainerType {
  disabled?: boolean;
}
export const ComponentContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;
export const SmallLabeltext = styled(SmallLabel)`
  color: #878787;
  margin: 0;
  width: 85%;
  min-width: 80%;
  white-space: break-spaces;
`;

export const MenuLabel = styled(SmallLabel)`
  color: #414141;
  margin: 0;
  min-width: 13%;
  white-space: break-spaces;
`;

export const MenuIcon = styled(Box)`
  min-width: 4%;
  display:flex;
  align-items:center;
`;


export const SelectBoxStyle = styled(FormControl)`
  width: 100% !important;

  .MuiAutocomplete-endAdornment,
  .MuiSelect-icon {
    display: none;
  }
  span {
    color: #c5c5c5;
  }

  .MuiSelect-select.MuiSelect-select {
    padding: 12px 8px !important;
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
    margin-bottom: 8px;
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
    padding: 4px;
    border-radius: 4px;
    border: 1px solid #C4C4C4;
    cursor:pointer;
    align-items: center ;
    font-size: 20px;
    box-sizing:border-box;
    ${(props) =>
      props.disabled &&
      css`
        background-color: #c4c4c4;
      `}
 }
`;
export const CustomSelect = styled.select`
  outline: none;
  border: none;
  background-color: white;
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
      fontSize: 16,
    },
  })
);
