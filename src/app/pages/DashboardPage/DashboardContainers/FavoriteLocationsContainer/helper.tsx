import moment from "moment";
import * as yup from "yup";

import EditIcon from "app/components/EditIcon/EditIcon";
import { trash } from "app/assets/Icons";
import { Flex } from "app/components/CommonCss/CommonCss";
import {
  PHONE_NUMBER_REGEX_NEW,
  PIN_CODE_REGEX,
} from "../../../../../constants";

export const editContactDetailsSchema = yup.object().shape({
  latitude: yup.string().required("Latitude is a required field"),
  longitude: yup.string().required("Longitude is a required field"),
  companyName: yup.string().when("billingType", {
    is: (billingType) => billingType === 2,
    then: yup.string().required("Company Name is a required field"),
  }),
  firstName: yup.string().required("First Name is a required field"),
  lastName: yup.string().required("Last Name is a required field"),
  address1: yup
    .string()
    .required("Address Line 1 is a required field")
    .test("isValidAddress", "Please enter valid address", function () {
      return this.parent.latitude || this.parent.longitude;
    }),
  address2: yup.string(),
  city: yup.string().required("City is a required field"),
  postal: yup
    .string()
    .required("Postal Code is a required field")
    .matches(PIN_CODE_REGEX, "Please enter valid Postal code"),
  state: yup.string().required("Province/State is a required field"),
  country: yup.string().required("Country is a required field"),
  phone: yup
    .string()
    .required("Contact Number is a required field")
    .matches(PHONE_NUMBER_REGEX_NEW, "Please enter valid Contact Number"),
  alternate: yup
    .string()
    .required("Alternate Contact Number is a required field")
    .matches(PHONE_NUMBER_REGEX_NEW, "Please enter valid Contact Number"),
  email: yup
    .string()
    .required("Email Address is a required field")
    .email("Please enter valid email"),
  details: yup.string().required("Additional Notes is a required field"),
});

const getClientItem = (
  item: any,
  openDrawer: (type: string, item?: any) => void
) => {
  return (
    <a onClick={() => openDrawer("contactDetails", item)}>
      {`${item.locationFirstName} ${item.locationLastName}`}
    </a>
  );
};

const getActionItem = (
  item: any,
  openDrawer: (type: string, item?: any) => void,
  deleteLocation: (locationId: string) => void
) => {
  return (
    <Flex justifyContent="space-between">
      <EditIcon onClick={() => openDrawer("editContactDetails", item)} />
      <EditIcon src={trash} onClick={() => deleteLocation(item.locationId)} />
    </Flex>
  );
};

export const getLocationData = (
  locationData: any,
  openDrawer: (type: string, item?: any) => void,
  deleteLocation: (locationId: string) => void
) => {
  let makeTableData: any = [];
  if (locationData && locationData.length) {
    makeTableData = locationData.map((item) => {
      return {
        Client: getClientItem(item, openDrawer),
        Email: item.locationEmail,
        Date: moment(item.createdDate).format("DD/MM/YYYY"),
        Address:
          item.locationAddressLine1 +
          (item.locationAddressLine2 ? `, ${item.locationAddressLine2}` : ""),
        City: item.locationCity,
        "Postal Code": item.locationPinCode,
        "Provience/State": item.locationProvinceCode,
        Country: item.locationCountry,
        Action: getActionItem(item, openDrawer, deleteLocation),
      };
    });
  }
  return makeTableData;
};

export const favoriteLocationColoumns = [
  {
    id: "locationFirstName",
    label: "Client",
    isSort: true,
  },
  {
    id: "locationEmail",
    label: "Email",
  },
  {
    id: "createdDate",
    label: "Date",
    isSort: true,
  },
  {
    id: "locationAddressLine1",
    label: "Address",
  },
  {
    id: "locationCity",
    label: "City",
  },
  {
    id: "locationPinCode",
    label: "Postal Code",
  },
  {
    id: "locationProvinceCode",
    label: "Provience/State",
  },
  {
    id: "locationCountry",
    label: "Country",
  },
  {
    id: "action",
    label: "Action",
  },
];
