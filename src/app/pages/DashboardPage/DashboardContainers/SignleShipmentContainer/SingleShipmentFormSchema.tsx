import moment from "moment";
import * as yup from "yup";

import { PHONE_NUMBER_REGEX_NEW, PIN_CODE_REGEX } from "../../../../../constants";
import { getSingleDate } from "./helper";

export const singleShipmentFormSchema = yup.object().shape({
    orders: yup.array().of(
        yup.object().shape({
            hasSameOrigin: yup.boolean(),
            originCompanyName: yup.string().when("originBillingType", {
                is: (originBillingType) => originBillingType === 2,
                then: yup.string().required("Company Name is a required field"),
            }),
            originFirstName: yup.string().required("First Name is a required field"),
            originLastName: yup.string().required("Last Name is a required field"),
            originAddressLine1: yup
                .string()
                .required("Address Line 1 is a required field")
                .test("Please", "Please enter valid address", function () {
                    return this.parent.originLatitude || this.parent.originLongitude;
                })
                .test("isSameAddress", "Origin & Destination address must be different", function () {
                    return !(this.parent.originLatitude === this.parent.destinationLatitude && this.parent.originLongitude === this.parent.destinationLongitude);
                }),
            originAddressLine2: yup.string(),
            originCity: yup.string().required("City is a required field"),
            originPostalCode: yup.string().required("Postal Code is a required field").matches(PIN_CODE_REGEX, "Please enter valid Postal code"),
            originProvinceState: yup.string().required("Province/State is a required field"),
            originCountry: yup.string().required("Country is a required field"),
            originContactNumber: yup.string().required("Contact Number is a required field").matches(PHONE_NUMBER_REGEX_NEW, "Please enter valid Contact Number"),
            originAlternateContactNumber: yup.string().required("Alternate Contact Number is a required field").matches(PHONE_NUMBER_REGEX_NEW, "Please enter valid Contact Number"),
            originEmailAddress: yup.string().required("Email Address is a required field").email("Please enter valid email"),
            originAdditionalNotes: yup.string().required("Additional Notes is a required field"),
            originLatitude: yup.string().required("Latitude is a required field"),
            originLongitude: yup.string().required("Longitude is a required field"),

            hasSameDestination: yup.boolean(),
            destinationCompanyName: yup.string().when("destinationBillingType", {
                is: (destinationBillingType) => destinationBillingType === 2,
                then: yup.string().required("Company Name is a required field"),
            }),
            destinationFirstName: yup.string().required("First Name is a required field"),
            destinationLastName: yup.string().required("Last Name is a required field"),
            destinationAddressLine1: yup
                .string()
                .required("Address Line 1 is a required field")
                .test("Please", "Please enter valid address", function () {
                    return this.parent.destinationLatitude || this.parent.destinationLongitude;
                })
                .test("isSameAddress", "Origin & Destination address must be different", function () {
                    return !(this.parent.originLatitude === this.parent.destinationLatitude && this.parent.originLongitude === this.parent.destinationLongitude);
                }),
            destinationAddressLine2: yup.string(),
            destinationCity: yup.string().required("City is a required field"),
            destinationPostalCode: yup.string().required("Postal Code is a required field").matches(PIN_CODE_REGEX, "Please enter valid Postal code"),
            destinationProvinceState: yup.string().required("Province/State is a required field"),
            destinationCountry: yup.string().required("Country is a required field"),
            destinationContactNumber: yup.string().required("Contact Number is a required field").matches(PHONE_NUMBER_REGEX_NEW, "Please enter valid Contact Number"),
            destinationAlternateContactNumber: yup.string().required("Alternate Contact Number is a required field").matches(PHONE_NUMBER_REGEX_NEW, "Please enter valid Contact Number"),
            destinationEmailAddress: yup.string().required("Email Address is a required field").email("Please enter valid email"),
            destinationAdditionalNotes: yup.string().required("Additional Notes is a required field"),
            destinationLatitude: yup.string().required("Latitude is a required field"),
            destinationLongitude: yup.string().required("Longitude is a required field"),

            categoryId: yup.object().required("Category is a required field"),
            customerRefNo: yup.string().required("Customer Reference Number is a required field"),
            dropOption: yup.number().required("Delivery options is a required field"),
            fragile: yup.number(),

            shipmentDetails: yup.array().of(
                yup.object({
                    quantity: yup.number().required("Pieces is a required field").integer("Pieces must be a number").typeError("Pieces must be a number").min(1, "Invalid Pieces"),
                    description: yup.string(),
                    height: yup.string().test("maxDigitsAfterDecimal", "Please enter valid height", function (number: any, context: any) {
                        const orderIdx = context.path.match(/\[([^\]]+)\]/)[1];
                        if (this?.options?.context?.orders?.[orderIdx]?.categoryId?.setDimension) {
                            return Number(number) > 0 && number?.length > 0 && /^\d+(\.\d{1,2})?$/.test(number);
                        } else {
                            return true;
                        }
                    }),
                    length: yup.string().test("maxDigitsAfterDecimal", "Please enter valid length", function (number: any, context: any) {
                        const orderIdx = context.path.match(/\[([^\]]+)\]/)[1];
                        if (this?.options?.context?.orders?.[orderIdx]?.categoryId?.setDimension) {
                            return Number(number) > 0 && number?.length > 0 && /^\d+(\.\d{1,2})?$/.test(number);
                        } else {
                            return true;
                        }
                    }),
                    width: yup.string().test("maxDigitsAfterDecimal", "Please enter valid width", function (number: any, context: any) {
                        const orderIdx = context.path.match(/\[([^\]]+)\]/)[1];
                        if (this?.options?.context?.orders?.[orderIdx]?.categoryId?.setDimension) {
                            return Number(number) > 0 && number?.length > 0 && /^\d+(\.\d{1,2})?$/.test(number);
                        } else {
                            return true;
                        }
                    }),
                    sizeDimension: yup.string().test("maxDigitsAfterDecimal", "Please select valid unit", function (number: any, context: any) {
                        const orderIdx = context.path.match(/\[([^\]]+)\]/)[1];
                        if (this?.options?.context?.orders?.[orderIdx]?.categoryId?.setDimension) {
                            return number && (number === "12" || number === "13" || number === 12 || number || 13);
                        } else {
                            return true;
                        }
                    }),
                    weight: yup.string().test("maxDigitsAfterDecimal", "Please enter valid weight", function (number: any, context: any) {
                        const orderIdx = context.path.match(/\[([^\]]+)\]/)[1];
                        if (this?.options?.context?.orders?.[orderIdx]?.categoryId?.setDimension) {
                            return Number(number) > 0 && number?.length > 0 && /^\d+(\.\d{1,2})?$/.test(number);
                        } else {
                            return true;
                        }
                    }),
                    weightDimension: yup.number().test("maxDigitsAfterDecimal", "Please select valid unit", function (number: any, context: any) {
                        const orderIdx = context.path.match(/\[([^\]]+)\]/)[1];
                        if (this?.options?.context?.orders?.[orderIdx]?.categoryId?.setDimension) {
                            return number && (number === "14" || number === "15" || number === 14 || number || 15);
                        } else {
                            return true;
                        }
                    }),
                    document: yup.string(),
                })
            ),

            hasSameSchedule: yup.boolean(),
            scheduleType: yup.string().required("Please select schedule type"),
            shipmentDate: yup.string().when("scheduleType", {
                is: (scheduleType) => scheduleType === "17",
                then: yup.string().required("Order Date is a required field").nullable(),
            }),
            shipmentTime: yup.string().when("scheduleType", {
                is: (scheduleType) => scheduleType === "17",
                then: yup
                    .string()
                    .required("Order Time is a required field")
                    .test("minShipmentDateLimit", "Please select future time", function () {
                        let orderedAt = moment(getSingleDate(this.parent.shipmentDate, this.parent.shipmentTime)).format("YYYY-MM-DD HH:mm") + ":00";
                        if (moment(orderedAt, "YYYY-MM-DD HH:mm:ss").diff(moment().add(30, "minutes").format("YYYY-MM-DD HH:mm:ss")) < 0) {
                            return false;
                        } else {
                            return true;
                        }
                    })
                    .test("maxShipmentDateLimit", "Schedule time should be within 5 Days", function () {
                        let orderedAt = moment(getSingleDate(this.parent.shipmentDate, this.parent.shipmentTime)).format("YYYY-MM-DD HH:mm") + ":00";
                        if (moment(orderedAt, "YYYY-MM-DD HH:mm:ss").diff(moment().add(120, "hours").format("YYYY-MM-DD HH:mm:ss")) > 0) {
                            return false;
                        } else {
                            return true;
                        }
                    }),
            }),
        })
    ),
});
