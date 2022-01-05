import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import styled, { css } from "styled-components";

interface SelectContainerType {
    disabled ?: boolean;
}

export const ComponentContainer = styled.div`
align-items: flex-start;
display: flex;
flex-direction: column;

`

export const SelectContainer = styled.div<SelectContainerType>`
    width: 100%;
    height: 35px;
    align-items: flex-start !important;
    display: flex !important;
    padding: 4px !important;
    border-radius: 4px !important;
    border: 1px solid #C4C4C4 !important;
    cursor:pointer !important;
    align-items: baseline !important;
    font-size: 20px !important;

    ${props => props.disabled && css`
        background-color: #c4c4c4;
    `}
 }
`


export const CustomSelect = styled.select`
outline: none;
    border: none;
    background-color: white;
    width: 97%;
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