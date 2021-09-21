import { useState, useRef, useEffect } from "react";
import { CustomInput, CustomLabel, ErrorLabel, InputWrapper } from "./style";
import { InputProps } from "./type";
import { eyeIcon } from "../../assets/Icons";
import { PasswordValidate } from "../PasswordValidate";

const PasswordInput = ({
  label,
  placeholder,
  validate,
  onChange,
  error,
  id,
  name,
  onBlur,
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
      <CustomLabel>{label}</CustomLabel>
      <CustomInput
        onBlur={onBlur}
        placeholder={placeholder}
        id={id}
        name={name}
        type={showPass ? "" : "password"}
        value={value}
        onChange={onChangeHandler}
      />
      <img
        src={eyeIcon}
        alt=""
        onClick={() => setShowPass(!showPass)}
        style={{
          opacity: showPass ? 0.3 : 1,
          height: "25px",
          padding: "6px 12px",
        }}
      />
      {validate && (
        <PasswordValidate isOpen={!!value?.length && open} input={value} />
      )}
      {!!error && <ErrorLabel>{error}</ErrorLabel>}
    </InputWrapper>
  );
};

export default PasswordInput;
