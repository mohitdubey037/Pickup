export interface InputProps {
    label?: string;
    placeholder?: string;
    validate?:boolean;
    initValue?:any;
    onChange?:(value:any)=>void;
    id?:string;
    name?:string
    error?:string | boolean
    onBlur?:(value:any)=>void;
    value?:string
    disabled?:boolean
  }