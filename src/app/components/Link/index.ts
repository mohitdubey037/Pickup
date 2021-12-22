import styled from 'styled-components';
import { Link as RouterLink } from '@reach/router';

export const Link = styled(RouterLink)`
  color: ${p => p.theme.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
    color:"#2A95D1";
  }
`;
