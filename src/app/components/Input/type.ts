export interface InputProps {
    label?: string;
    placeholder?: string;
    validate?:boolean;
    value?:any;
    onChange?:(value:any)=>void;
  }