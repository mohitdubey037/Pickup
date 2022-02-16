import { navigate } from "@reach/router";
import moment from "moment";

export const creditCardDetails = [
    {
        cardId: 1,
        nameOnCard: "John Doe",
        cardType: "MC",
        cardNumber: "**** **** **** 1734",
        expiryDate: "05/24",
    },
    {
        cardId: 2,
        nameOnCard: "Dhikesh Kandy",
        type: "SC",
        cardNumber: "**** **** **** 1122",
        expiryDate: "09/28",
    },
    {
        cardId: 3,
        nameOnCard: "Krishna Jha",
        type: "SC",
        cardNumber: "**** **** **** 1122",
        expiryDate: "09/28",
    },
];

export const debitCardDetails = [
    {
        cardId: 4,
        nameOnCard: "John Doe",
        cardType: "MC",
        cardNumber: "**** **** **** 1734",
        expiryDate: "05/24",
    },
    {
        cardId: 5,
        nameOnCard: "Dhikesh Kandy",
        type: "SC",
        cardNumber: "**** **** **** 1122",
        expiryDate: "09/28",
    },
    {
        cardId: 6,
        nameOnCard: "Krishna Jha",
        type: "SC",
        cardNumber: "**** **** **** 1122",
        expiryDate: "09/28",
    },
];

const getInvoiceIdItem = (
    openInvoiceDrawer: (id: any, type: any) => void,
    invoiceNumber: number,
    id: any
) => {
    return (
        <a onClick={() => openInvoiceDrawer(id, "invoice")}>{invoiceNumber}</a>
    );
};

const getChildCompany = (
    companyName: string,
    companyId: number
) => {
    return (
        <a onClick={() => navigate(`/dashboard/my-account/child-account-details/${companyId}`)}>{companyName}</a>
    );
};

const getOrderIdItem = (
    openInvoiceDrawer: (id: any, type: any) => void,
    shipmentCount: number,
    id: any
) => {
    return (
        <a onClick={() => openInvoiceDrawer(id, "orderDetails")}>
            {shipmentCount}
        </a>
    );
};

export const invoiceTable = (
    searchRecordData: any,
    openInvoiceDrawer: (id: any, type: any) => void
) => {
    let makeTableData: any = [];
    if (searchRecordData && searchRecordData.length) {
        makeTableData = searchRecordData.map((item: any) => {
            return {
                "Invoice Date": moment(item.invoiceCreatedAt).format(
                    "DD/MM/YYYY"
                ),
                "Order Count": getOrderIdItem(
                    openInvoiceDrawer,
                    item.shipmentCount,
                    item.invoiceId
                ),
                "Shipped By": item.shippedBy,
                "Invoice Amount": `$${item.total.toFixed(2)}`,
                "Invoice Number": getInvoiceIdItem(
                    openInvoiceDrawer,
                    item.invoiceNumber,
                    item.invoiceId
                ),
            };
        });
    }
    return makeTableData;
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
