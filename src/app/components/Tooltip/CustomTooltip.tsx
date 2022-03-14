import React, { FC, useState } from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { Typography, useMediaQuery } from "@mui/material";

interface Props {
  content?: any;
  text: any;
  placement?:
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";
}

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)",
    backgroundColor: "#000",
    borderRadius: "4px",
    maxWidth: 300,
    boxSizing: "border-box",
    "& p": {
      fontSize: "13px",
    },
  },
}));

const CustomTooltip: FC<Props> = ({ content, text, placement = "bottom" }) => {
  const [tooltipIsOpen, setTooltipIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <HtmlTooltip
      open={tooltipIsOpen}
      PopperProps={{
        disablePortal: true,
      }}
      title={
        <span>
          <Typography>{text}</Typography>
        </span>
      }
      placement={placement}
    >
      {isMobile ? (
        <span
          onClick={() => {
            setTooltipIsOpen(!tooltipIsOpen);
          }}
          onMouseLeave={() => {
            setTooltipIsOpen(false);
          }}
        >
          {content}
        </span>
      ) : (
        <span
          onMouseEnter={() => {
            setTooltipIsOpen(true);
          }}
          onMouseLeave={() => {
            setTooltipIsOpen(false);
          }}
        >
          {content}
        </span>
      )}
    </HtmlTooltip>
  );
};

export default CustomTooltip;
