import { calendar } from "app/assets/Icons"
import { OnHoldDataType } from "./OnHoldShipment"

const getActionItem = (id: number, singleScheduleHandler) => {
    return (
        <div onClick={() => singleScheduleHandler(id)} style={{ display: 'flex', gap: '20px' }}>
            <img src={calendar} alt="calendar" />
        </div>
    )
}

const getOrderIdItem = (openInvoiceDrawer, value, id: any) => {
    return <span onClick={() => openInvoiceDrawer(id)}>{value}</span>;
};


export const searchTable = (
    searchRecordData: OnHoldDataType[],
    openInvoiceDrawer: any,
    singleScheduleHandler: any
) => {
    let makeTableData: any = [];
    if (searchRecordData && searchRecordData.length) {
        searchRecordData.map((item: OnHoldDataType) => {
            makeTableData.push({
                "Source": "Uploaded",
                "Category": item.category,
                "Item Count": getOrderIdItem(openInvoiceDrawer, item.itemCount, item.orderId),
                "Order Date": item.shippingDate,
                "Status": item.status ? item.status : "-",
                "Action": getActionItem(item.orderId, singleScheduleHandler),
            });
        });
    }
    return makeTableData;
};