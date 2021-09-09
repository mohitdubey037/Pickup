export interface InputProps {
    label?: string;
    placeholder?: string;
    validate?:boolean;
    initValue?:any;
    onChange?:(value:any)=>void;
  }