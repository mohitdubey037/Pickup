export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const USER_BASE_URL = process.env.REACT_APP_USER_BASE_URL;
export const PHONE_NUMBER_REGX =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const PASSWORD_REGX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const LOCATION_TYPES = [
  { label: "RESIDENTIAL", value: 1 },
  { label: "COMMERCIAL", value: 2 },
  { label: "RETAIL", value: 3 },
];
export const WEIGHTDIMENSION = [
  
  {label: "KG" ,value: 14},
  {label: "POUND",value: 15},
];


 export const DIMENSION2 = [
  {label:"INCH",value:12},
  {label:"CM",value:13}
];


