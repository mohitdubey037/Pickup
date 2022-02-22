import styled from 'styled-components';
import { LinearProgress } from '@material-ui/core';

export const CustomProgressbar = styled(LinearProgress)`
    width:100%;
    max-width:300px;
    border-radius: 24px;
    &.MuiLinearProgress-colorPrimary{
        background-color:#E2E2E2;
        height:18px;
    }
`;