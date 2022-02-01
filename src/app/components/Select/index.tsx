import React from "react";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { SelectContainer, ComponentContainer, useStyles } from "./style";
import { H4 } from "../Typography/Typography";
import { dropdown } from "app/assets/Icons";
import { ErrorLabel } from "../Input/style";

interface SelectOption {
  value: string | number;
  label: string;
}
interface SelectPropTypes {
  label?: string;
  options?: Array<SelectOption>;
  value?: string | number | null;
  style?: React.CSSProperties;
  onSelect?: Function;
  id?: string;
  name?: string;
  disabled?: boolean;
  error?: any;
  required?: boolean;
}

export default function Select(props: SelectPropTypes) {
  const {
    label,
    id,
    name,
    onSelect,
    value,
    options = [],
    style,
    error,
    disabled,
    required,
  } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
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
    <>
      <ComponentContainer>
        <H4 text={label} required={required} />

        <SelectContainer
          aria-describedby={parentId}
          disabled={disabled}
          //@ts-ignore
          onClick={handleClick}
          style={style}
        >
          <span
            className={classes.placeholder}
            style={{ color: value ? "#000" : "" }}
          >
            {valueLabel}
          </span>
          <img src={dropdown} alt="" />
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
          PaperProps={{ style: { minWidth: "250px" } }}
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
              style={{ cursor: "pointer" }}
            >
              {option.label}
            </Typography>
          ))}
        </Popover>
        {!!error && <ErrorLabel style={{marginBottom:'8px 0 24px 0'}}>{error}</ErrorLabel>}
      </ComponentContainer>
   
    </>
  );
}
