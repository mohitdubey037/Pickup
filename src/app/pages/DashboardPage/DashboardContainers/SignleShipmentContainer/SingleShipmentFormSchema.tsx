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
            originAddressLine1: yup.string().required("Address Line 1 is a required field"),
            originAddressLine2: yup.string().required("Address Line 2 is a required field"),
            originCity: yup.string().required("City is a required field"),
            originPostalCode: yup.string().required("Postal Code is a required field"),
            originProvinceState: yup.string().required("Province/State is a required field"),
            originCountry: yup.string().required("Country is a required field"),
            originContactNumber: yup.string().required("Phone number is not valid").matches(PHONE_NUMBER_REGX, "Phone number is not valid"),
            originAlternateContactNumber: yup.string().required("Alternate Contact Number is not valid").matches(PHONE_NUMBER_REGX, " AlternatePhone number is not valid"),
            originEmailAddress: yup.string().email("Please enter valid email").required("Email Address is a required field"),
            originAdditionalNotes: yup.string().required("Additional Notes is a required field"),


            destinationCompanyName: yup.string().when('destinationBillingType', {
                is: (destinationBillingType) => destinationBillingType === 2,
                then: yup.string().required('Company Name is a required field')
            }),
            destinationFirstName: yup.string().required("First Name is a required field"),
            destinationLastName: yup.string().required("Last Name is a required field"),
            destinationAddressLine1: yup.string().required("Address Line 1 is a required field"),
            destinationAddressLine2: yup.string().required("Address Line 2 is a required field"),
            destinationCity: yup.string().required("City is a required field"),
            destinationPostalCode: yup.string().required("Postal Code is a required field"),
            destinationProvinceState: yup.string().required("Province/State is a required field"),
            destinationCountry: yup.string().required("Country is a required field"),
            destinationContactNumber: yup.string().required("Phone number is not valid").matches(PHONE_NUMBER_REGX, "Phone number is not valid"),
            destinationAlternateContactNumber: yup.string().required("Alternate Contact Number is not valid").matches(PHONE_NUMBER_REGX, "Phone number is not valid"),
            destinationEmailAddress: yup.string().email("Please enter valid email").required("Email Address is a required field"),
            destinationAdditionalNotes: yup.string().required("Additional Notes is a required field"),


            categoryId: yup.number().required("Category is required"),
            customerRefNo: yup.string().required("Customer reference number is required"),
            dropOption: yup.number().required("Delivery option is required"),
            fragile: yup.number(),

            shipmentDetails: yup.array().of(
                yup.object({
                    quantity: yup.number().required("Quantity is required"),
                    orderCost: yup.string().required("Order cost is required"),
                    description: yup.string(),
                    height: yup.number(),
                    length: yup.number(),
                    width: yup.number(),
                    weight: yup.number().required("Weight is required"),
                    sizeDimension: yup.number(),
                    weightDimension: yup.number().required("Dimension is required"),
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
