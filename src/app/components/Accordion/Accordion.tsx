import React from "react";
import { CustomAccordion } from "./style";
import { AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
                    expandIcon={<ExpandMoreIcon />}
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