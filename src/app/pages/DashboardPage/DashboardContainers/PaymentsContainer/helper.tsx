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
        <div
            onClick={() => openInvoiceDrawer(id, "invoice")}
            style={{ color: "#1B8AF0" }}
        >
            <u>{invoiceNumber}</u>
        </div>
    );
};

const getOrderIdItem = (
    openInvoiceDrawer: (id: any, type: any) => void,
    shipmentCount: number,
    id: any
) => {
    return (
        <div
            onClick={() => openInvoiceDrawer(id, "orderDetails")}
            style={{ color: "#1B8AF0" }}
        >
            <u>{shipmentCount}</u>
        </div>
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
                "Invoice Amount": `$${item.total}`,
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
