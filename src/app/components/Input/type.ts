import React, { ReactNode } from "react";
export interface InputProps {
  label?: string | ReactNode;
  placeholder?: string;
  validate?: boolean;
  initValue?: any;
  onChange?: (value: any) => void;
  id?: string;
  name?: string;
  // error?: string | boolean;
  error?: any;
  onBlur?: (value: any) => void;
  value?: string;
  disabled?: boolean;
  width?: number;
  style?: React.CSSProperties;
  inputStyles?: React.CSSProperties;
  type?: "text" | "textarea" | "mask";
  autoComplete?: string;
  maskProps?: any;
  ref?: any;
  required?: boolean;
  maxLength?: number;
}

export interface DateTimeInputProps {
  label?: string;
  placeholder?: string;
  onChange?: any;
  error?: string | boolean;
  value?: any;
  disabled?: boolean;
  required?: boolean;
  defaultValue?: any;
  disablePast?: boolean;
  minDate?: any;
  maxDate?: any;
  minTime?: object | undefined;
  maxTime?: object | undefined;
}
