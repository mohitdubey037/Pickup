import { admin, executive, manager, superintendent } from "app/assets/Icons";

export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const USER_BASE_URL = process.env.REACT_APP_USER_BASE_URL;
export const USER_BASE_CR_URL = process.env.REACT_APP_USER_BASE_CR_URL;
export const PAYMENT_BASE_URL = process.env.REACT_APP_PAYMENT_BASE_URL;
export const ORDER_BASE_URL = process.env.REACT_APP_ORDER_URL;
export const LOCATION_URL = process.env.REACT_APP_LOCATION_URL;
export const HERE_MAPS_API_KEY = process.env.REACT_APP_HERE_MAPS_API_KEY;
export const PHONE_NUMBER_REGX =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const PASSWORD_REGX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const BILLING_TYPES = [
  { label: "Individual", value: "0" },
  { label: "Company", value: "1" },
];

export const DROP_OPTION = [
  { label: "Door drop", value: 10 },
  { label: "Safe drop", value: 11 },
];

export const FRAGILE_OPTION = [
  { label: "Yes", value: 1 },
  { label: "No", value: 0 },
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

export const NEW_PERMISSION_TYPES = [
  { 
    title: "Executive", 
    value: 1, 
    subtitle: "Can place orders only",
    icon: executive
   },
  {
    title: "Superintendent",
    value: 2,
    subtitle: "Can place orders and view reports of self account",
    icon: superintendent
  },
  {
    title: "Manager",
    value: 3,
    subtitle: "Can place orders of self account and view reports of all accounts",
    icon: manager
  },
  {
    title: "Admin",
    value: 4,
    subtitle: "Can place orders of self account, view reports, add colleagues and manage permissions of all accounts",
    icon: admin
  },
];

export const NOTIFICATION_FREQUENCY_TYPES = [
  { label: "Monthly", value: "Monthly" },
  { label: "Weekly", value: "Weekly" },
  { label: "Hourly", value: "Hourly" },
];

export const WEIGHTDIMENSION = [
  { label: "KG", value: 14 },
  { label: "POUND", value: 15 },
];

export const DIMENSION2 = [
  { label: "INCH", value: 12 },
  { label: "CM", value: 13 },
];

export const SCHEDULE_OPTIONS = [
  { value: "16", label: "Ship Right Now" },
  { value: "17", label: "Ship Later" },
  { value: "22", label: "Move to Holding Zone" },
];

export const COUNTRY = [
  { label: "Afghanistan", value: 1 },
  { label: "Albania", value: 2 },
  { label: "Algeria", value: 3 },
];

export const COUNTRY_TEXT = [
  { label: "Afghanistan", value: "Afghanistan" },
  { label: "Albania", value: "Albania" },
  { label: "Algeria", value: "Algeria" },
];

export const INDUSTRY = [
  { label: "Agriculture", value: 1 },
  { label: "Construction", value: 2 },
  { label: "Manufacturing", value: 3 },
];

export const INDUSTRY_TEXT = [
  { label: "Agriculture", value: "Agriculture" },
  { label: "Construction", value: "Construction" },
  { label: "Manufacturing", value: "Manufacturing" },
];
