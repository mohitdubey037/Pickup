import { navigate } from "@reach/router";

export const ChildInitValues = {
    companyName: '',
    businessNumber: '',
    employeeStrength: '',
    industry: '',
    address1: '',
    address2: '',
    pincode: '',
    province: '',
    city: '',
    country:'',

    firstName: '',
    lastName: '',
    phoneNumber: '',
    role: '',
    emailId: '',

    name: '',
    number: '',
    expiryYear: '',
    cvd: '',
    // pincard: '',
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
                    "Company Name": getChildCompany(
                        item.companyName,
                        item.companyId
                    ),
                    "Business Number": item.businessNumber,
                    "Invitation Date": item.city,
                    "Status": item.city,
                    "Admin Name": item.city,
                    
                };
            });
        }
    return makeTableData;
}