export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const USER_BASE_URL = process.env.REACT_APP_USER_BASE_URL;
export const PAYMENT_BASE_URL = process.env.REACT_APP_PAYMENT_BASE_URL;
export const ORDER_BASE_URL=process.env.REACT_APP_ORDER_URL

export const PHONE_NUMBER_REGX =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const PASSWORD_REGX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const BILLING_TYPES = [
  { label: "Individual", value: "0" },
  { label: "Company", value: "1" },
];

export const DROP_OPTION = [
  { label: "Door drop", value: 10},
  { label: "Safe drop", value: 11}
];

export const FRAGILE_OPTION = [
  { label: "Yes", value: 1 },
  { label: "No", value: 0 }
];

export const LOCATION_TYPES = [
  { label: "RESIDENTIAL", value: 1 },
  { label: "COMMERCIAL", value: 2 },
  { label: "RETAIL", value: 3 },
];

export const PERMISSION_TYPES = [
  { label: "Executive", value: 1 },
  { label: "Superintendent", value: 2 },
  { label: "Manager", value: 3 },
  { label: "Admin", value: 4 },
];

export const WEIGHTDIMENSION = [
  {label: "KG" ,value: 14},
  {label: "POUND",value: 15},
];


 export const DIMENSION2 = [
  {label:"INCH",value:12},
  {label:"CM",value:13}
];

export const SCHEDULE_OPTIONS = [
  { value: "16", label: "Ship Right Now" },
  { value: "17", label: "Ship Later" },
  { value: "22", label: "Move to Holding Zone" }
]

