import React from "react";
// import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { MenuIcon, MenuLabel, SelectBoxStyle, SmallLabeltext } from "./style";
import { dropdown } from "app/assets/Icons";
import { ErrorLabel } from "../Input/style";
import { SmallLabel } from "../Typography/Typography";

interface SelectOption {
  value: number;
  title?: string;
  subtitle?: string;
  icon?: string;
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
  error: any;
  required?: boolean;
}

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     selectEmpty: {
//       marginTop: theme.spacing(2),
//     },
//   })
// );

export default function SelectBox(props: SelectPropTypes) {
  const {
    label,
    id,
    name,
    onSelect,
    value,
    options = [],
    required,
    error,
    disabled,
  } = props;

  // const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [age, setAge] = React.useState<any>(value ? value : "");
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as any);
  };
  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   if (disabled) return;
  //   setAnchorEl(event.currentTarget);
  // };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const parentId = open ? "simple-popover" : undefined;
  // const valueLabel: any = value
  //   ? options.find((i) => i.value === value)?.title
  //   : "Select";
  // options?.map((i) => {
  //   if (i.value === value) {
  //     // console.log("i.title", i.title);
  //   }
  // });

  return (
    <>
      <SelectBoxStyle>
        {/* <InputLabel
          id="demo-simple-select-placeholder-label-label"
          required={true}
        >
          {label}
        </InputLabel> */}
        <SmallLabel text={label} required={required} />
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={value === "" ? "" : age}
          onChange={handleChange}
          displayEmpty
          renderValue={(value: any) =>
            value !== "" ? options?.[age - 1]?.title : "Select"
          }
          // className={classes.selectEmpty}
          aria-describedby={parentId}
          disabled={disabled}
        >
          {options.map((option) => {
            return (
              <MenuItem
                value={option?.value}
                onClick={() => {
                  handleClose();
                  onSelect &&
                    onSelect({ target: { value: option.value, id, name } });
                }}
                key={option?.value}
              >
                <MenuIcon>
                  <img src={option?.icon} alt="menuicon" />{" "}
                </MenuIcon>
                <MenuLabel text={option?.title} />
                <SmallLabeltext text={option?.subtitle} />
              </MenuItem>
            );
          })}
        </Select>
        <img src={dropdown} alt="" className="dropdownicon" />
      </SelectBoxStyle>
      {!!error && <ErrorLabel>{error}</ErrorLabel>}
    </>
  );
}
