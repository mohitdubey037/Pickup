import { useState, useRef, useEffect } from "react";
import { CustomInput, ErrorLabel, InputWrapper, VisibilityBox } from "./style";
import { InputProps } from "./type";
import { PasswordValidate } from "../PasswordValidate";
import { SmallLabel } from "../Typography/Typography";
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';


const PasswordInput = ({
  label,
  placeholder,
  validate,
  onChange,
  error,
  id,
  name,
  onBlur,
  autoComplete
}: InputProps) => {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  const handleClickOutside = (event) => {
    //@ts-ignore
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  };
  const onChangeHandler = (e: any) => {
    setValue(e.target.value);
    onChange && onChange(e);
    if (!open) {
      setOpen(true);
    }
  };

  return (
    <InputWrapper ref={ref}>

      <SmallLabel text={label} />

      <CustomInput
        autoComplete={autoComplete}
        onBlur={onBlur}
        placeholder={placeholder}
        id={id}
        name={name}
        type={showPass ? "" : "password"}
        value={value}
        onChange={onChangeHandler}
      />
      {/* <img
        src={eyeIcon}
        alt=""
        onClick={() => setShowPass(!showPass)}
        style={{opacity: showPass ? 0.3 : 1}}
      /> */}
      <VisibilityBox onClick={() => setShowPass(!showPass)}>
         {showPass ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
      </VisibilityBox>
      {validate && (
        <PasswordValidate isOpen={!!value?.length && open} input={value} />
      )}
      {!!error && <ErrorLabel>{error}</ErrorLabel>}
    </InputWrapper>
  );
};

export default PasswordInput;
