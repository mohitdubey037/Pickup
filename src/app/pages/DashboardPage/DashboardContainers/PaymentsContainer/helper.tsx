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
    openInvoiceDrawer: (key: string, type: any) => void,
    invoiceNumber: string,
    id: any
) => {
    return (
        <div
            onClick={() => openInvoiceDrawer(id, "invoice")}
            style={{ color: "#1B8AF0" }}
        >
            <u> {invoiceNumber}</u>
        </div>
    );
};

// const getOrderIdItem = (
//   openInvoiceDrawer: (key: string, type: any) => void,
//   id: any
// ) => {
//   return (
//     <div
//       onClick={() => openInvoiceDrawer(id, "orderDetails")}
//       style={{ color: "#1B8AF0" }}
//     >
//       <u> {id}</u>
//     </div>
//   );
// };

export const invoiceTable = (
    searchRecordData: any,
    openInvoiceDrawer: (key: string, type: any) => void
) => {
    let makeTableData: any = [];
    if (searchRecordData && searchRecordData.length) {
        makeTableData = searchRecordData.map((item: any) => {
            return {
                "Invoice Date": item.invoiceCreatedAt,
                // "Shipment Count": getOrderIdItem(openInvoiceDrawer, item.shipmentCount),
                "Shipment Count": item.shipmentCount,
                "Shipped by": item.shippedBy,
                "Invoice Amount": `$ ${item.total}`,
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
