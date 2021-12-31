import * as yup from "yup";
 
export const cardSchema=yup.object().shape({
    cardType: yup.string(),
    cardNumber:yup.string().required("Card number is a required field"),
    expiryDate:yup.string().required("Expiry date is a required field"),
    cvc:yup.string().required("CVC is a required field"),
    nameOnCard:yup.string().required("Name is a required field"),
    pinCode:yup.string().required("Pin code is a required field"),
    nickName:yup.string()
})