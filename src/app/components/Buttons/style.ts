import {Button} from '@material-ui/core';
import styled from "styled-components";

export const CustomButton = styled(Button)`
  width:100%;
  border-radius:8px;
  box-shadow: none !important;
  &.MuiButton-root{
    text-transform: none;
    padding: 1rem;
    border: ${(props:{secondary?:boolean})=>props.secondary && '1px solid' };
    color: #343434;
    font-size: 16px;
    line-height: 19px;
    font-family: "Roboto-Medium";
  }
 `;

