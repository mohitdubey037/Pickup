import moment from "moment";
import * as yup from "yup";

import EditIcon from "app/components/EditIcon/EditIcon";
import { Flex } from "app/components/Input/style";
import { trash } from "app/assets/Icons";
import { PHONE_NUMBER_REGX } from "../../../../../constants";

export const editContactDetailsSchema = yup.object().shape({
  companyName: yup.string(),
  firstName: yup.string().required("Firstname is required"),
  lastName: yup.string().required("Lastname is required"),
  address1: yup.string().required("Address Line 1 is required"),
  address2: yup.string().required("Address Line 2 is required"),
  city: yup.string().required("City is required"),
  postal: yup.string().required("Postal Code is required"),
  state: yup.string().required("State is required"),
  country: yup.string().required("Country is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(PHONE_NUMBER_REGX, "Phone number is not valid"),
  alternate: yup
    .string()
    .required("Phone number is required")
    .matches(PHONE_NUMBER_REGX, "Phone number is not valid"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is a required field"),
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
        Address: item.locationAddressLine1,
        City: item.locationCity,
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
    id: "client",
    label: "Client",
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
    id: "address",
    label: "Address",
  },
  {
    id: "city",
    label: "City",
  },
  {
    id: "provienceState",
    label: "Provience/State",
  },
  {
    id: "country",
    label: "Country",
  },
  {
    id: "action",
    label: "Action",
  },
];
