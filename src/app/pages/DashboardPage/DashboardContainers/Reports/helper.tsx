import { imageIcon,printer } from "app/assets/Icons"
const getActionItem = () => {
    return(
        <div style={{display:'flex', gap:'20px'}}>
            <img src={imageIcon} alt=''/>
            <img src={printer} alt=''/>
        </div>
    )
}
export const reportsTable = [
    {'Source':'Uploaded','Invoice Id':'ITOR-0821-123','Shipment Id':'1','Item Count':'5','Shipping Date':'06/06/21','Status':'Pending','LBH (inches)':'30 x 30 x 30','Shipping Cost':'$50',},
    {'Source':'Uploaded','Invoice Id':'ITOR-0821-123','Shipment Id':'1','Item Count':'5','Shipping Date':'06/06/21','Status':'Pending','LBH (inches)':'30 x 30 x 30','Shipping Cost':'$50',},
    {'Source':'Uploaded','Invoice Id':'ITOR-0821-123','Shipment Id':'1','Item Count':'5','Shipping Date':'06/06/21','Status':'Pending','LBH (inches)':'30 x 30 x 30','Shipping Cost':'$50',},
    {'Source':'Uploaded','Invoice Id':'ITOR-0821-123','Shipment Id':'1','Item Count':'5','Shipping Date':'06/06/21','Status':'Pending','LBH (inches)':'30 x 30 x 30','Shipping Cost':'$50',},
    {'Source':'Uploaded','Invoice Id':'ITOR-0821-123','Shipment Id':'1','Item Count':'5','Shipping Date':'06/06/21','Status':'Pending','LBH (inches)':'30 x 30 x 30','Shipping Cost':'$50',},
    {'Source':'Uploaded','Invoice Id':'ITOR-0821-123','Shipment Id':'1','Item Count':'5','Shipping Date':'06/06/21','Status':'Pending','LBH (inches)':'30 x 30 x 30','Shipping Cost':'$50',},
    {'Source':'Uploaded','Invoice Id':'ITOR-0821-123','Shipment Id':'1','Item Count':'5','Shipping Date':'06/06/21','Status':'Pending','LBH (inches)':'30 x 30 x 30','Shipping Cost':'$50',},
    {'Source':'Uploaded','Invoice Id':'ITOR-0821-123','Shipment Id':'1','Item Count':'5','Shipping Date':'06/06/21','Status':'Pending','LBH (inches)':'30 x 30 x 30','Shipping Cost':'$50',},
    {'Source':'Uploaded','Invoice Id':'ITOR-0821-123','Shipment Id':'1','Item Count':'5','Shipping Date':'06/06/21','Status':'Pending','LBH (inches)':'30 x 30 x 30','Shipping Cost':'$50',},
    {'Source':'Uploaded','Invoice Id':'ITOR-0821-123','Shipment Id':'1','Item Count':'5','Shipping Date':'06/06/21','Status':'Pending','LBH (inches)':'30 x 30 x 30','Shipping Cost':'$50',},
    {'Source':'Uploaded','Invoice Id':'ITOR-0821-123','Shipment Id':'1','Item Count':'5','Shipping Date':'06/06/21','Status':'Pending','LBH (inches)':'30 x 30 x 30','Shipping Cost':'$50',},
    {'Source':'Uploaded','Invoice Id':'ITOR-0821-123','Shipment Id':'1','Item Count':'5','Shipping Date':'06/06/21','Status':'Pending','LBH (inches)':'30 x 30 x 30','Shipping Cost':'$50',}
]



export const reportsColoumns = [
    {
      id: "Source",
      label: "Source",
      isSort: false,
    },
    {
      id: "invoiceId",
      label: "Invoice Id",
      isSort: true,
    },
    {
      id: "orderId",
      label: "Order Id",
      isSort: true,
    },
    {
      id: "Item Count",
      label: "ItemCount",
      isSort: true,
    },
    {
      id: "Order Date",
      label: "OrderDate",
      isSort: false,
    },
    {
      id: "Status",
      label: "Status",
      isSort: true,
    },
    {
        id: "LBH",
        label: "LBH (inches)",
        isSort: true,
      },
      {
        id: "Order Cost",
        label: "OrderCost",
        isSort: true,
      },
  ];