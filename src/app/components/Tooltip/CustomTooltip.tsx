import React, { FC, useState } from 'react';
import { withStyles} from '@material-ui/core/styles';
import { Box, Tooltip, Typography, useMediaQuery } from '@mui/material';

interface TooltipProps {
  content?: any;
  text: any;
  className?: string;
  placement?: 'bottom-end'
| 'bottom-start'
| 'bottom'
| 'left-end'
| 'left-start'
| 'left'
| 'right-end'
| 'right-start'
| 'right'
| 'top-end'
| 'top-start'
| 'top';
}


const HtmlTooltip = withStyles(() => ({
    tooltip: {
      boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.25)',
      backgroundColor: '#000',
      borderRadius: '4px',
      maxWidth: 280,
	  margin:'5px',
			'& p' : {
				fontSize:'13px'
			}
    }

  }))(Tooltip);



const CustomTooltip: FC<TooltipProps> = ({
	content,
	text,
	placement = 'right',
	className,
}) => {
	const [tooltipIsOpen, setTooltipIsOpen] = useState(false);
	const isMobile = useMediaQuery('(max-width:600px)');
	return (
		<HtmlTooltip
			open={tooltipIsOpen}
			title={
				<Box className={className}>
					<Typography>{text}</Typography>
				</Box>
			}
			placement={placement}
			className={className}
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




