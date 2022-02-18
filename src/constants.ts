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
export const PHONE_NUMBER_REGEX_NEW = /^\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
export const PASSWORD_REGX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const NEWPASSWORD_REGEX =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#$%&+'`()*,-./:;/\/<=>?@[\]~{}_^!&]).{8,}$/;
export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PIN_CODE_REGEX = /^([a-zA-Z0-9]+)$|^[a-zA-Z0-9]+\s[a-zA-Z0-9]+$/;

export const PIN_CODE_MASK = {
  mask: [
    /[a-zA-Z0-9 ]/,
    /[a-zA-Z0-9 ]/,
    /[a-zA-Z0-9 ]/,
    /[a-zA-Z0-9 ]/,
    /[a-zA-Z0-9 ]/,
    /[a-zA-Z0-9 ]/,
    /[a-zA-Z0-9 ]/,
  ],
  maskPlaceholder: null,
};

export const PHONE_NO_MASK = {
  mask: "(999)-999-9999",
  maskPlaceholder: null,
};

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

export const ADMIN_DETAILS_PERMISSION_TYPES = {
  1: "Executive",
  2: "Superintendent",
  3: "Manager",
  4: "Admin",
};

export const NEW_PERMISSION_TYPES = [
  {
    title: "Executive",
    value: 1,
    subtitle: "Can place orders only",
    icon: executive,
  },
  {
    title: "Superintendent",
    value: 2,
    subtitle: "Can place orders and view reports of self account",
    icon: superintendent,
  },
  {
    title: "Manager",
    value: 3,
    subtitle:
      "Can place orders of self account and view reports of all accounts",
    icon: manager,
  },
  {
    title: "Admin",
    value: 4,
    subtitle:
      "Can place orders of self account, view reports, add colleagues and manage permissions of all accounts",
    icon: admin,
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
  {
    value: "16",
    label: "Order Right Now",
    tooltipText:
      "Your order will be shipped as soon as possible after completing payment",
  },
  {
    value: "17",
    label: "Order Later",
    tooltipText:
      "You can schedule your order to be shipped later for a specified date and time",
  },
  {
    value: "22",
    label: "Move to Holding Zone",
    tooltipText:
      "Once your orders are ready to ship, you can schedule them later from the holding zone",
    disabled: true,
  },
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
  { label: "Select Industry", value: "" },
  { label: "Agriculture", value: "Agriculture" },
  { label: "Construction", value: "Construction" },
  { label: "Manufacturing", value: "Manufacturing" },
];

export const STATUS = [
  { label: "Payment Pending", value: "payment_pending" },
  { label: "Pending", value: "pending" },
  { label: "In Progress", value: "in_progres" },
  { label: "Completed", value: "completed" },
];

export const IMAGE_FILE_TYPES = ["image/png", "image/jpeg", "image/jpg"];

export const OPERANDS = [
  { label: ">", value: ">" },
  { label: "=", value: "=" },
  { label: "<", value: "<" },
];
