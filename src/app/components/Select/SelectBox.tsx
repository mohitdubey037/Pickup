import React, { useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import { MenuLabel, SelectBoxStyle, SmallLabeltext } from "./style";
import { dropdown } from "app/assets/Icons";
import { StringMap } from "i18next";

interface SelectOption {
  value: number;
  title?: string;
  subtitle?: string;
}
interface SelectPropTypes {
  label?: string;
  options?: Array<SelectOption>;
  value?: string | number;
  style?: React.CSSProperties;
  onSelect?: Function;
  id?: string;
  name?: string;
  disabled?: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

export default function SelectBox(props: SelectPropTypes) {
  const {
    label,
    id,
    name,
    onSelect,
    value,
    options = [],
    style,
    disabled,
  } = props;

  console.log(value);

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [age, setAge] = React.useState<any>("");
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as any);
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const parentId = open ? "simple-popover" : undefined;
  const valueLabel: any = value
    ? options.find((i) => i.value === value)?.title
    : "Select";
  options?.map((i) => {
    if (i.value === value) {
      // console.log("i.title", i.title);
    }
  });
  return (
    <SelectBoxStyle>
      <InputLabel id="demo-simple-select-placeholder-label-label">
        {label}
      </InputLabel>
      <Select
        labelId="demo-simple-select-placeholder-label-label"
        id="demo-simple-select-placeholder-label"
        value={value === "" ? "" : age}
        onChange={handleChange}
        displayEmpty
        className={classes.selectEmpty}
        aria-describedby={parentId}
        disabled={disabled}
      >
        {/* <MenuItem value={options?.[valueLabel]?.value}>
          <span>{options?.[valueLabel]?.value}</span>
        </MenuItem> */}
        {options.map((option) => {
          // console.log("option", option);
          return (
            <MenuItem
              value={option?.value}
              onClick={() => {
                handleClose();
                onSelect &&
                  onSelect({ target: { value: option.value, id, name } });
                // console.log(id, name, option.value);
              }}
              key={option?.value}
            >
              <MenuLabel text={option?.title} />
              <SmallLabeltext text={option?.subtitle} />
            </MenuItem>
          );

          // <Typography
          //   onClick={() => {
          //     handleClose();
          //     onSelect &&
          //       onSelect({ target: { value: option.value, id, name } });
          //   }}
          //   className={classes.typography}
          //   key={option.value}
          //   style={{ cursor: "pointer" }}
          // >
          //   {option.label}
          // </Typography>
        })}
        {/* <MenuItem value={10}>
          <MenuLabel text="Ten" />
          <SmallLabeltext text="Can place orders and view reports of self account" />
        </MenuItem>
        <MenuItem value={20}>
          <MenuLabel text="Twenty" />
          <SmallLabeltext text="Can place orders and view reports of self account" />
        </MenuItem>
        <MenuItem value={30}>
          <MenuLabel text="Thirty" />
          <SmallLabeltext text="Can place orders and view reports of self account" />
        </MenuItem> */}
      </Select>
      <img src={dropdown} alt="" className="dropdownicon" />
      {/* <FormHelperText>Error message</FormHelperText> */}
    </SelectBoxStyle>
  );
}
