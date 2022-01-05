import React from "react";
import { AccordionDetails, AccordionSummary } from "@material-ui/core";
import { CustomAccordion } from "./style";
import { ChevronDown } from "app/assets/Icons";

interface AccordionProps {
	title?: string;
    style?: React.CSSProperties;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, style}) => {
    return (
        <div style={{width:'99%'}}>
            <CustomAccordion style={{...style}} elevation={0}>
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
        </div>
    )
}

export default Accordion