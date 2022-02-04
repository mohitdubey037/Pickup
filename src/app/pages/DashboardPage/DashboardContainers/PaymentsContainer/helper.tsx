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
    openInvoiceDrawer: (key: string, type: any, invoicePdf: string) => void,
    invoiceNumber: number,
    invoicePdf: string,
    id: any
) => {
    console.log(invoicePdf);
    return (
        <div
            onClick={() => openInvoiceDrawer(id, "invoice", invoicePdf)}
            style={{ color: "#1B8AF0" }}
        >
            <u> {invoiceNumber}</u>
        </div>
    );
};

const getOrderIdItem = (
    openInvoiceDrawer: (key: string, type: any, invoicePdf: string) => void,
    shipmentCount: number,
    invoicePdf: string,
    id: any
) => {
    console.log(id);
    return (
        <div
            onClick={() => openInvoiceDrawer(id, "orderDetails", invoicePdf)}
            style={{ color: "#1B8AF0" }}
        >
            <u> {shipmentCount}</u>
        </div>
    );
};

export const invoiceTable = (
    searchRecordData: any,
    openInvoiceDrawer: (key: string, type: any, pdfUrl: string) => void
) => {
    let makeTableData: any = [];
    if (searchRecordData && searchRecordData.length) {
        makeTableData = searchRecordData.map((item: any) => {
            console.log(item);
            return {
                "Invoice Date": item.invoiceCreatedAt,
                "Shipment Count": getOrderIdItem(
                    openInvoiceDrawer,
                    item.invoiceId,
                    item.invoiceId,
                    item.invoicePdf
                ),
                "Shipped By": item.shippedBy,
                "Invoice Amount": `$ ${item.total}`,
                "Invoice Number": getInvoiceIdItem(
                    openInvoiceDrawer,
                    item.invoiceNumber,
                    item.invoiceId,
                    item.invoicePdf
                ),
            };
        });
    }
    return makeTableData;
};
