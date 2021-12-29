import {Button} from '@material-ui/core';
import styled from "styled-components";

export const CustomButton = styled(Button)`
  color: #343434;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  width:100%;
  padding:1rem;
  max-height:56px;
  border-radius:8px;
  height:40px;
  box-shadow: none !important;
  &.MuiButton-root{
    text-transform: none;
    padding: 1rem;
    font-weight: 600;
    border: ${(props:{secondary?:boolean})=>props.secondary && '1px solid' };

  }
 `;

