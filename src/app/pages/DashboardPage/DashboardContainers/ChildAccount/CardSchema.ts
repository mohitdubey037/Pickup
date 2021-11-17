import * as yup from "yup";

export const CardSchema = yup.object().shape({
    CreditCardNumber: yup.string().required("Credit Card Number is a required field"),
    ExpirationDate: yup.string().required("Expiration Date is a required field"),
    CVC: yup.string().required("CVC is a required field"),
    NameonCard: yup.string().required("Name On Card is a required field"),
    PinCode: yup.string().email().required("Pincode is a required field"),
    Nickname: yup.string().email().required("Nick Name is a required field"),
});

export const CardDetailsSchema = yup.object().shape({
    CreditCardNumber: yup.string().required(),
    ExpirationDate: yup.string().required(),
    CVC: yup.string().required(),
    NameonCard: yup.string().required(),
  PinCode: yup.string().email().required(),
  Nickname: yup.string().email().required(),
});
export default CardSchema;
