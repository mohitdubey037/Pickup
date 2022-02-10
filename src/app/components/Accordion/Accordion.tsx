import React from "react";
import { AccordionDetails, AccordionSummary } from "@material-ui/core";
import { CustomAccordion } from "./style";
import { ChevronDown } from "app/assets/Icons";

interface AccordionProps {
	title?: string;
    style?: React.CSSProperties;
    defaultExpanded?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, style, defaultExpanded}) => {
    return (
        <>
            <CustomAccordion style={{...style}} defaultExpanded={defaultExpanded}>
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