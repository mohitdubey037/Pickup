import { Accordion } from "@material-ui/core";
import styled from "styled-components";

export const CustomAccordion = styled(Accordion)`
    border-bottom: 1px solid #DCDCDC;
    &.MuiAccordion-root{
        border-radius: 0 !important;
        padding: 0.5rem;
    }
`