import {Button} from '@material-ui/core';
import styled from "styled-components";
import { makeStyles, Theme } from '@material-ui/core/styles';
import { ButtonProps } from './Buttons';

const sizes = {
	'small': 'auto',
  'medium': '148px',
	'large': '100%',
}

const mobilesizes = {
	'small': 'auto',
  'medium': '124px',
	'large': '100% !important',
}


const padding = {
	'small': '12px 16px',
  'medium': '12px 16px',
	'large': '19px 16px 18px',
}

const fontSize = {
	'small': '14px',
  'medium': '14px',
	'large': '18px',
}


const height = {
  'small': '40px',
  'medium': '40px',
	'large': '56px',
}


export const useStyles = makeStyles<Theme, ButtonProps>({
	root: {
		width: ({ size }) => (size ? sizes[size] : '100%'),
    padding: ({ size }) => (size ? padding[size] : '12px 16px'),
    fontSize: ({ size }) => (size ? fontSize[size] : '14px'),
    height: ({ size }) => (size ? height[size] : '40px'),
		'@media (max-width:600px)': {
      width: ({ size }) => (size ? mobilesizes[size] : '100%'),
		},
	},
});

export const CustomButton = styled(Button)`
  border-radius:8px !important;
  box-shadow: none !important;
  &.MuiButton-root{
    text-transform: none;
    border: ${(props:{secondary?:boolean})=>props.secondary && '1px solid' };
    color: #343434;
    font-family: "Roboto-Medium";
    line-height:1 !important;
  }
 `;

