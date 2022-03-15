import { navigate } from "@reach/router";
import moment from "moment";

export const ChildInitValues = {
    companyName: '',
    businessNumber: '',
    employeeStrength: '',
    industry: '',
    addressLine1: '',
    addressLine2: '',
    pincode: '',
    province: '',
    city: '',
    country:'',

    firstName: '',
    lastName: '',
    phoneNumber: '',
    roleId: '',
    emailId: '',

    name: '',
    number: '',
    expiryDate: '',
    expiryMonth: '',
    expiryYear: '',
    cvd: '',
    // pincard: '',
};

export const editChildValues = {
    companyName: '',
    businessNumber: '',
    employeeStrength: '',
    industry: '',
    addressLine1: '',
    addressLine2: '',
    pincode: '',
    province: '',
    city: '',
    country:'',
}

export const editSuperindedentData = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    roleId: '',
    emailId: '',
}

export const childNewInitValue = {
    latitude: "",
    longitude: "",
    LocationType: 1,
    companyName: "",
    businessNumber: '',
    employeeStrength: '',
    industry: '',
    addressLine1: "",
    addressLine2: "",
    pincode: "",
    province: "",
    city: "",
    country: "",

    firstName: "",
    lastName: "",
    roleId: 2,
    roleDesignation: '',
    phoneNumber: "",
    emailId: "",

    name: '',
    number: '',
    expiryDate: '',
    expiryMonth: '',
    expiryYear: '',
    cvd: '',
};

const getChildCompany = (
    companyName: string,
    companyId: number
) => {
    return (
        <a onClick={() => navigate(`/dashboard/my-account/child-account-details/${companyId}`)}>{companyName}</a>
    );
};

export const childDataTable = (
    searchRecordData: any,
    ) => {
        let makeTableData: any = [];
        if (searchRecordData && searchRecordData.length) {
            makeTableData = searchRecordData.map((item: any) => {
                return {
                    "Company Name": item.companyName ? getChildCompany(item.companyName,item.companyId) : "N/A",
                    "Business Number": item.businessNumber || "N/A",
                    "Invitation Date": item.createdAt ? moment(item.createdAt).format("DD/MM/YYYY") : "N/A",
                    "Status": item?.status,
                    "Admin Name": item.admin || "N/A",
                };
            });
        }
    return makeTableData;
}

export const ChildAccountListColumn = [
    {
      id: "companyName",
      label: "Company Name",
      isSort: true,
    },
    {
      id: "businessNumber",
      label: "Business Number",
      isSort: true,
    },
    {
      id: "createdAt",
      label: "Created At",
      isSort: true,
    },
    {
      id: "status",
      label: "Status",
    },
    {
      id: "admin",
      label: "Admin Name",
    },
  ];

export const transformPayloadToBackend = (values: any) => {
    const payload = {
        ...values,
        phoneNumber: values?.phoneNumber? values.phoneNumber?.replace(/[()-]/g,"") : undefined,
        number: values.number? values.number.replace(/ /g, "") : undefined,
        expiryMonth: values.expiryDate ? values.expiryDate?.split("/")[0] : undefined ,
        expiryYear: values.expiryDate ? values?.expiryDate?.split("/")[1] : undefined,
        expiryDate: undefined
    }
    return payload
}