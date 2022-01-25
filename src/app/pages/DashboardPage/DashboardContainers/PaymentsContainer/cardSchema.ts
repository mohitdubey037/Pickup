import * as yup from "yup";

export const cardSchema = yup.object().shape({
    cardType: yup.string(),
    cardNumber: yup
        .string()
        .required("Card number is a required field")
        .matches(
            /\b\d{4}(| |-)\d{4}\1\d{4}\1\d{4}\b/,
            "Enter a valid card number"
        ),
    expiryDate: yup
        .string()
        .required("Expiry date is a required field")
        .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Enter a valid expiry date"),
    cvc: yup
        .string()
        .required("CVC is a required field")
        .min(3, "CVC must be atleast 3 digits")
        .max(4),
    nameOnCard: yup.string().required("Name is a required field"),
    pinCode: yup
        .string()
        .required("Pin code is a required field")
        .min(4, "Pin code must be exactly 4 digits"),
    nickName: yup.string(),
});
