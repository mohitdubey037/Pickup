import styled from "styled-components";
import { Paper } from '@material-ui/core'

export const CardContainer = styled.div`
    padding: 1rem;
    background: #f7f7f7;
    width: 100%;
    border-radius: 8px;
`

export const GeneralTypo = styled.h2`
    margin: 0;
`

export const GeneralTypoheading = styled.h3`
    margin: 0;
`
export const GeneralTypolabel = styled.p`
    margin: 0 5px;
`
export const LabelContainer = styled.div`
    display: flex;
    font-size: 12px;
`

export const DoghnutContainer = styled(Paper)`
    padding: 1rem;
    border-radius: 8px;
`

export const DoghnutChip = styled.div`
    width: 10px;
    height: 10px;
    margin-right: 0.5rem;
    border-radius: 50%;
`

export const DoghnutLabelContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`