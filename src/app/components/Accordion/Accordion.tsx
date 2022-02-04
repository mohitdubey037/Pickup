import React from "react";
import { AccordionDetails, AccordionSummary } from "@material-ui/core";
import { CustomAccordion } from "./style";
import { ChevronDown } from "app/assets/Icons";
import { Box } from "@mui/material";

interface AccordionProps {
	title?: string;
    style?: React.CSSProperties;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, style}) => {
    return (
        <>
            <CustomAccordion style={{...style}}>
                <AccordionSummary
                    expandIcon={<img src={ChevronDown} alt={'ChevronDown'} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                {title}
                </AccordionSummary>
                <AccordionDetails style={{ flexDirection:"column" }}>
                    {children}
                </AccordionDetails>
            </CustomAccordion>
        </>
    )
}

export default Accordion