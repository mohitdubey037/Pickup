import * as yup from "yup";

const notEmpty = (val) => ["", null, undefined].indexOf(val) === -1;

export const AdvanceFilterFormSchema = yup.object().shape({
  originCity: yup.string(),
  originPincode: yup.string(),
  originProvince: yup.string(),
  originCountry: yup.string(),
  originEmail: yup.string().email("Please enter valid email"),
  destinationCity: yup.string(),
  destinationPincode: yup.string(),
  destinationProvince: yup.string(),
  destinationCountry: yup.string(),
  destinationEmail: yup.string().email("Please enter valid email"),
  weightOperand: yup
    .string()
    .test("required", "Required Field", (val, context) => {
      return !(
        (notEmpty(context?.parent?.weight) ||
          notEmpty(context?.parent?.weightDimension)) &&
        !notEmpty(val)
      );
    }),
  weight: yup
    .string()
    .test("required", "Required Field", (val, context) => {
      return !(
        (notEmpty(context?.parent?.weightOperand) ||
          notEmpty(context?.parent?.weightDimension)) &&
        !notEmpty(val)
      );
    })
    .test("maxDigitsAfterDecimal", "Inalid Volume", (number: any) => {
      return notEmpty(number)
        ? Number(number) > 0 && /^\d+(\.\d{1,2})?$/.test(number)
        : true;
    }),
  weightDimension: yup
    .string()
    .test("required", "Required Field", (val, context) => {
      return !(
        (notEmpty(context?.parent?.weightOperand) ||
          notEmpty(context?.parent?.weight)) &&
        !notEmpty(val)
      );
    }),
  volumnOperand: yup
    .string()
    .test("required", "Required Field", (val, context) => {
      return !(
        (notEmpty(context?.parent?.volume) ||
          notEmpty(context?.parent?.volumeDimension)) &&
        !notEmpty(val)
      );
    }),
  volume: yup
    .string()
    .test("required", "Required Field", (val, context) => {
      return !(
        (notEmpty(context?.parent?.volumnOperand) ||
          notEmpty(context?.parent?.volumeDimension)) &&
        !notEmpty(val)
      );
    })
    .test("maxDigitsAfterDecimal", "Inalid Volume", (number: any) => {
      return notEmpty(number)
        ? Number(number) > 0 && /^\d+(\.\d{1,2})?$/.test(number)
        : true;
    }),
  volumeDimension: yup
    .string()
    .test("required", "Required Field", (val, context) => {
      return !(
        (notEmpty(context?.parent?.volumnOperand) ||
          notEmpty(context?.parent?.volume)) &&
        !notEmpty(val)
      );
    }),
  category: yup.string(),
});
