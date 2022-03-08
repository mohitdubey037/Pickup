import * as yup from "yup";

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
  weightOperand: yup.string().when("weightDimension", {
    is: (val) => Number(val) === 14 || Number(val) === 15,
    then: yup.string().required("Required field"),
  }),
  weight: yup.string().when("weightDimension", {
    is: (val) => Number(val) === 14 || Number(val) === 15,
    then: yup
      .string()
      .required("Required field")
      .test("maxDigitsAfterDecimal", "Inalid Weight", (number: any) => {
        return (
          Number(number) > 0 &&
          number?.length > 0 &&
          /^\d+(\.\d{1,2})?$/.test(number)
        );
      }),
  }),
  weightDimension: yup.string(),
  volumnOperand: yup.string().when("volumeDimension", {
    is: (val) => Number(val) === 12 || Number(val) === 13,
    then: yup.string().required("Required field"),
  }),
  volume: yup.string().when("volumeDimension", {
    is: (val) => Number(val) === 12 || Number(val) === 13,
    then: yup
      .string()
      .required("Required field")
      .test("maxDigitsAfterDecimal", "Inalid Volume", (number: any) => {
        return (
          Number(number) > 0 &&
          number?.length > 0 &&
          /^\d+(\.\d{1,2})?$/.test(number)
        );
      }),
  }),
  volumeDimension: yup.string(),
  category: yup.string(),
});
