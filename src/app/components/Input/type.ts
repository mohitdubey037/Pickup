import React from "react";
export interface InputProps {
  label?: string;
  placeholder?: string;
  validate?: boolean;
  initValue?: any;
  onChange?: (value: any) => void;
  id?: string;
  name?: string;
  error?: string | boolean;
  onBlur?: (value: any) => void;
  value?: string;
  disabled?: boolean;
  width?: number;
  style?: React.CSSProperties;
  inputStyles?:React.CSSProperties;
  type?: 'text' | 'textarea';
  autoComplete?: string;
  ref?:any;
}
