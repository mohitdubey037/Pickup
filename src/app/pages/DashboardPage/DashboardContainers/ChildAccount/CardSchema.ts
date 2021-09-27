import * as yup from "yup";

export const CardSchema = yup.object().shape({
    CreditCardNumber: yup.string().required(),
    ExpirationDate: yup.string().required(),
    CVC: yup.string().required(),
    NameonCard: yup.string().required(),
    PinCode: yup.string().email().required(),
    Nickname: yup.string().email().required(),
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
