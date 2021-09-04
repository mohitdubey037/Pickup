
import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { SelectContainer, ComponentContainer,useStyles } from './style'


interface SelectOption {
  value: string | number
  label: string
}
interface SelectPropTypes {
  label: string
  options?: Array<SelectOption>
  value?:string | number
}

export default function Select(props: SelectPropTypes) {
  const { label, value,options = [] } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <ComponentContainer>
      <span>
        {label||value}
      </span>
      <SelectContainer
        aria-describedby={id}
        //@ts-ignore
        onClick={handleClick}
      >
        <span  className={classes.placeholder}>
          Select
        </span>
        <span  >
          &#8964;
        </span>
      </SelectContainer>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {options.map((option) =>
          <Typography className={classes.typography} key={option.value}>{option.label}</Typography>
        )}
      </Popover>

    </ComponentContainer>
  );
}
