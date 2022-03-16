import styled from "styled-components";
import { ButtonProps } from './Buttons';
import { Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const sizes = {
	'small': 'auto !important',
  'medium': '148px !important',
	'large': '100% !important',
}

const mobilesizes = {
	'small': 'auto !important',
  'medium': '124px !important',
	'large': '100% !important',
}


const padding = {
	'small': '12px 16px !important',
  'medium': '12px 16px !important',
	'large': '19px 16px 18px !important',
}

const fontSize = {
	'small': '14px !important',
  'medium': '14px !important',
	'large': '18px !important',
}


const height = {
  'small': '40px !important',
  'medium': '40px !important',
	'large': '56px !important',
}


export const useStyles = makeStyles<Theme, ButtonProps>({
	root: {
		minWidth: ({ size }) => (size ? sizes[size] : '100%'),
    padding: ({ size }) => (size ? padding[size] : '12px 16px'),
    fontSize: ({ size }) => (size ? fontSize[size] : '14px'),
    height: ({ size }) => (size ? height[size] : '40px'),
		'@media (max-width:600px)': {
      minWidth: ({ size }) => (size ? mobilesizes[size] : '100%'),
		},
	},
});

export const CustomButton = styled(Button)`
  border-radius:8px !important;
  box-shadow: none !important;
  &.MuiButton-root{
    text-transform: none;
    color: #343434;
    font-family: "Roboto-Medium";
    line-height:1 !important;
  }
 `;


 export const ButtonsGroup = styled(Box)`
 button{
   margin-left:12px;
 }
`;

 