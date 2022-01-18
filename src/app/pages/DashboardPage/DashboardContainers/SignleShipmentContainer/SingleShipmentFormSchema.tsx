import * as yup from "yup";
import { PHONE_NUMBER_REGX } from "../../../../../constants";

export const singleShipmentFormSchema = yup.object().shape({

    orders: yup.array().of(
        yup.object().shape({
            originCompanyName: yup.string().when('originBillingType', {
                is: (originBillingType) => originBillingType === 2,
                then: yup.string().required('Company Name is a required field')
            }),
            originFirstName: yup.string().required("First Name is a required field"),
            originLastName: yup.string().required("Last Name is a required field"),
            originAddressLine1: yup.string().required("Address Line 1 is a required field").test(
                'Please',
                'Please enter a valid address',
                function (item) {
                  return (this.parent.originLatitude || this.parent.originLongitude)
                }
              ),
            originAddressLine2: yup.string().required("Address Line 2 is a required field"),
            originCity: yup.string().required("City is a required field"),
            originPostalCode: yup.string().required("Postal Code is a required field"),
            originProvinceState: yup.string().required("Province/State is a required field"),
            originCountry: yup.string().required("Country is a required field"),
            originContactNumber: yup.string().required("Phone number is not valid").min(10,"Must be minimum 10 digits").max(10,"Must be maximum 10 digits").matches(PHONE_NUMBER_REGX, "Phone number is not valid"),
            originAlternateContactNumber: yup.string().required("Alternate Contact Number is not valid").min(10,"Must be minimum 10 digits").max(10,"Must be maximum 10 digits").matches(PHONE_NUMBER_REGX, " Alternate Phone number is not valid"),
            originEmailAddress: yup.string().email("Please enter valid email").required("Email Address is a required field"),
            originAdditionalNotes: yup.string().required("Additional Notes is a required field"),
            originLatitude:  yup.string().required("Latitude is a required field"),
            originLongitude:  yup.string().required("Longitude is a required field"),

            destinationCompanyName: yup.string().when('destinationBillingType', {
                is: (destinationBillingType) => destinationBillingType === 2,
                then: yup.string().required('Company Name is a required field')
            }),
            destinationFirstName: yup.string().required("First Name is a required field"),
            destinationLastName: yup.string().required("Last Name is a required field"),
            destinationAddressLine1: yup.string().required("Address Line 1 is a required field").test(
                'Please',
                'Please enter a valid address',
                function (item) {
                  return (this.parent.destinationLatitude || this.parent.destinationLongitude)
                }
              ),
            destinationAddressLine2: yup.string().required("Address Line 2 is a required field"),
            destinationCity: yup.string().required("City is a required field"),
            destinationPostalCode: yup.string().required("Postal Code is a required field"),
            destinationProvinceState: yup.string().required("Province/State is a required field"),
            destinationCountry: yup.string().required("Country is a required field"),
            destinationContactNumber: yup.string().required("Phone number is not valid").min(10,"Must be minimum 10 digits").max(10,"Must be maximum 10 digits").matches(PHONE_NUMBER_REGX, "Phone number is not valid"),
            destinationAlternateContactNumber: yup.string().required("Alternate Contact Number is not valid").min(10,"Must be minimum 10 digits").max(10,"Must be maximum 10 digits").matches(PHONE_NUMBER_REGX, "Phone number is not valid"),
            destinationEmailAddress: yup.string().email("Please enter valid email").required("Email Address is a required field"),
            destinationAdditionalNotes: yup.string().required("Additional Notes is a required field"),
            destinationLatitude:  yup.string().required("Latitude is a required field"),
            destinationLongitude:  yup.string().required("Longitude is a required field"),

            categoryId: yup.number().required("Category is required"),
            customerRefNo: yup.string().required("Customer reference number is required"),
            dropOption: yup.number().required("Delivery option is required"),
            fragile: yup.number(),

            shipmentDetails: yup.array().of(
                yup.object({
                    quantity: yup.number().integer("Quantity must be an integer")
                        .typeError('Quantity must be a number').min(1, "Invalid Quantity")
                        .required("Quantity is required"),
                    description: yup.string(),
                    height: yup.number().typeError('Height must be a number').min(1, "Invalid Height")
                    .required("Height is required")
                        .test(
                        "maxDigitsAfterDecimal",
                        "Height could only have maximum of 2 digits after decimal or less",
                        (number:any) => /^\d+(\.\d{1,2})?$/.test(number)
                      ),
                    length: yup.number().typeError('Length must be a number').min(1,"Invalid Length")
                    .required("Length is required")
                        .test(
                        "maxDigitsAfterDecimal",
                        "Length could only have maximum of 2 digits after decimal or less",
                        (number:any) => /^\d+(\.\d{1,2})?$/.test(number)
                      ),
                    width: yup.number().typeError('Width must be a number').min(1,"Invalid Width")
                    .required("Width is required")
                        .test(
                        "maxDigitsAfterDecimal",
                        "Width could only have maximum of 2 digits after decimal or less",
                        (number:any) => /^\d+(\.\d{1,2})?$/.test(number)
                      ),
                    weight: yup.number().typeError('Weight must be a number').min(1,"Invalid Weight")
                    .required("Weight is required")
                        .test(
                        "maxDigitsAfterDecimal",
                        "Weight could only have maximum of 2 digits after decimal or less",
                        (number:any) => /^\d+(\.\d{1,2})?$/.test(number)
                      ),
                    sizeDimension: yup.number().typeError('Size Dimension must be a number').min(1,"Invalid Size Dimension")
                    .required("Size Dimension is required")
                        .test(
                        "maxDigitsAfterDecimal",
                        "Size Dimension could only have maximum of 2 digits after decimal or less",
                        (number:any) => /^\d+(\.\d{1,2})?$/.test(number)
                      ),
                    weightDimension: yup.number().typeError('Weight Dimension must be a number').min(1,"Invalid Weight Dimension")
                    .required("Weight Dimension is required")
                        .test(
                        "maxDigitsAfterDecimal",
                        "Weight Dimension could only have maximum of 2 digits after decimal or less",
                        (number:any) => /^\d+(\.\d{1,2})?$/.test(number)
                      ),
                    document: yup.string(),
                })
            ),
            scheduleType: yup.string().required("Please select one option"),
            shipmentDate: yup.string().when('scheduleType', {
                is: (scheduleType) => scheduleType === "17",
                then: yup.string().required('Date is required field')
            }),
            shipmentTime: yup.string().when('scheduleType', {
                is: (scheduleType) => scheduleType === "17",
                then: yup.string().required('Time is required field')
            })
        })
    )
});
