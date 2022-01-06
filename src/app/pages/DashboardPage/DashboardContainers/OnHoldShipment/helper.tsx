import { calendar } from "app/assets/Icons"
import { OnHoldDataType } from "./OnHoldShipment"

const getActionItem = (id: string, singleScheduleHandler, index) => {
    return (
        <div onClick={() => singleScheduleHandler(id, index)} style={{ display: 'flex', gap: '20px' }}>
            <img src={calendar} alt="calendar" />
        </div>
    )
}

const getOrderIdItem = (openInvoiceDrawer, value, id: any) => {
    return <span onClick={() => openInvoiceDrawer(id)}>{value}</span>;
};


export const onHoldTable = (
    searchRecordData: OnHoldDataType[],
    openInvoiceDrawer: any,
    singleScheduleHandler: any
) => {
    let makeTableData: any = [];
    if (searchRecordData && searchRecordData.length) {
        searchRecordData.map((item: OnHoldDataType, index: number) => {
            makeTableData.push({
                "Source": "Uploaded",
                "Category": item.category,
                "Order Id": item.orderId,
                "Item Count": getOrderIdItem(openInvoiceDrawer, item.itemCount, item.orderId),
                "Order Date": item.shippingDate,
                "Status": item.status ? item.status : "-",
                "Action": getActionItem(item.orderId, singleScheduleHandler, index),
            });
        });
    }
    return makeTableData;
};