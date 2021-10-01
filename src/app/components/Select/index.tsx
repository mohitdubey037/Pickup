import React from "react";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { SelectContainer, ComponentContainer, useStyles } from "./style";

interface SelectOption {
  value: string | number;
  label: string;
}
interface SelectPropTypes {
  label?: string;
  options?: Array<SelectOption>;
  value?: string | number;
  style?: React.CSSProperties;
  onSelect?: Function;
  id?: string;
  name?: string;
}

export default function Select(props: SelectPropTypes) {
  const { label, id, name, onSelect, value, options = [], style } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const parentId = open ? "simple-popover" : undefined;
  const valueLabel = value
    ? options.find((i) => i.value === value)?.label
    : "Select";

  return (
    <ComponentContainer style={{ width:'100%'}} >
      <Typography style={{marginBottom:2}}>{label}</Typography>
      <SelectContainer
        aria-describedby={parentId}
        //@ts-ignore
        onClick={handleClick}
        style={style}
      >
        <span
          className={classes.placeholder}
          style={{ color: value ? "black" : "",marginLeft:5 }}
        >
          {valueLabel}
        </span>
        <span>&#8964;</span>
      </SelectContainer>
      <Popover
        id={parentId}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        style={{ width: 400 }}
        PaperProps={{ style: { width: '100%' } }}
      >
        {options.map((option) => (
          <Typography
            onClick={() => {
              handleClose();
              onSelect &&
                onSelect({ target: { value: option.value, id, name } });
            }}
            className={classes.typography}
            key={option.value}
            style={{cursor:'pointer'}}
          >
            {option.label}
          </Typography>
        ))}
      </Popover>
    </ComponentContainer>
  );
}
