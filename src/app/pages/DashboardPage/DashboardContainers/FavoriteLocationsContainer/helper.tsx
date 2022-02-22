import * as yup from "yup";

import { PHONE_NUMBER_REGX } from "../../../../../constants";
// import { imageIcon, printer } from "app/assets/Icons";

export const editContactDetailsSchema = yup.object().shape({
    companyName: yup.string(),
    firstName: yup.string().required("Firstname is required"),
    lastName: yup.string().required("Lastname is required"),
    address1: yup.string().required("Address Line 1 is required"),
    address2: yup.string().required("Address Line 2 is required"),
    city: yup.string().required("City is required"),
    postal: yup.string().required("Postal Code is required"),
    state: yup.string().required("State is required"),
    country: yup.string().required("Country is required"),
    phone: yup.string().required("Phone number is required").matches(PHONE_NUMBER_REGX, "Phone number is not valid"),
    alternate: yup.string().required("Phone number is required").matches(PHONE_NUMBER_REGX, "Phone number is not valid"),
    email: yup.string().email("Please enter valid email").required("Email Address is a required field")
});




export const FavoriteLocationColoumns = [
    {
        id: "Client",
        label: "Client",
        isSort: false,
    },
    {
        id: "Email",
        label: "Email",
        isSort: false,
    },
    {
        id: "Date",
        label: "Date",
        isSort: true,
    },
    {
        id: "Address",
        label: "Address",
        isSort: false,
    },
    {
        id: "City",
        label: "City",
        isSort: false,
    },
    {
        id: "ProvienceState",
        label: "Provience/State",
        isSort: false,
    },
    {
        id: "Country",
        label: "Country",
        isSort: false,
    },

    {
        id: "Action",
        label: "Action",
        isSort: false,
    },
];


