import { LinearProgress } from '@mui/material';
import styled from 'styled-components';

interface Props {
smallProgreebar?: boolean;
}

export const CustomProgressbar = styled(LinearProgress)<Props>`
    width:100%;
    max-width:300px;
    max-width: ${props => props.smallProgreebar ? '100%' : '300px'};
    border-radius: 24px;
    &.MuiLinearProgress-colorPrimary{
        background-color:#E2E2E2;
        height: ${props => props.smallProgreebar ? '7px' : '18px'};
    }
`;