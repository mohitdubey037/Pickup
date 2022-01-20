import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import styled, { css } from "styled-components";

interface SelectContainerType {
    disabled ?: boolean;
}

export const ComponentContainer = styled.div`
align-items: flex-start;
display: flex;
flex-direction: column;
margin-bottom:16px;

`

export const SelectContainer = styled.div<SelectContainerType>`
    width: 100%;
    height: 42px;
    align-items: flex-start !important;
    display: flex !important;
    padding: 4px !important;
    border-radius: 4px !important;
    border: 1px solid #C4C4C4 !important;
    cursor:pointer !important;
    align-items: baseline !important;
    font-size: 20px !important;
    box-sizing:border-box;

    ${props => props.disabled && css`
        background-color: #c4c4c4;
    `}
 }
`


export const CustomSelect = styled.select`
outline: none;
    border: none;
    background-color: white;
    width: 100%;
`


export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(2),
    },
    placeholder: {
      flex: 1, textAlign: 'initial', color: '#C4C4C4',
      fontSize: 16
    }
  }),
);