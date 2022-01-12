import { Button } from "app/components/Buttons";
import { Input } from "app/components/Input";
import ModuleContainer from "app/components/ModuleContainer";
import { Table } from "app/components/Table";
import { ContainerTitle } from "app/components/Typography/Typography";
import { invoiceTable } from "./helper";
import { InvoicesWrapper, InvoiceTableTop } from "./InvoiceStyle";
import { dots3, sliders } from "app/assets/Icons";
import { useEffect, useState } from "react";
import { getInvoiceList } from "../../../../../services/PaymentServices/index";
import { Drawer } from "app/components/Drawer";
import AdvanceFilters from "../SearchContainer/AdvanceFilters";
import SearchOrderDetailsDrawer from "../SearchContainer/SearchOrderDetailsDrawer";
import AddNewPaymentDrawer from "./AddNewPaymentDrawer";
import OrderDetailsDrawer from "../SignleShipmentContainer/OrderDetailsDrawer";

const InvoicesContainer = ({ path: string }) => {
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [invoiceData, setInvoiceData] = useState([]);

  const [searchRecordData, setSearchRecordData] = useState([{}]);
  const [selectedInvoiceId, setSelectedInvoiceId] = useState("");
  const [drawerType, setDrawerType] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [singleOrderData, setSingleOrderData] = useState([{}]);
  const getSearchOrderListData = async () => {
    fetch(
      "https://staging-api.pickups.mobi/order/v1/api/order/business/shipments",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMTgxLCJ0eXBlIjoibG9naW4iLCJyb2xlIjoxNywiaWF0IjoxNjI4NTA3ODUzfQ.nmXM8_mkHwehZIFi7XX6_g8tR2o4l3EPsUufRIXQpLM",
        },
      }
    )
      .then((response) => response.json())
      .then((resData) => {
        console.log("resData", resData);
        let data = resData.data;
        setSearchRecordData(data);
      });
  };
const getDrawerTitle = () => {
    if (drawerType == "invoice") {
      return "Invoice #" + selectedInvoiceId;
    } else if (drawerType == "advanceFilter") {
      return "Advanced Filter";
    } else {
      return "";
    }
  };
  const getSingleOrderData = async (id: any) => {
    fetch(
      "https://staging-api.pickups.mobi/order/v1/api/order/business/shipment/" +
        id,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMTgxLCJ0eXBlIjoibG9naW4iLCJyb2xlIjoxNywiaWF0IjoxNjI4NTA3ODUzfQ.nmXM8_mkHwehZIFi7XX6_g8tR2o4l3EPsUufRIXQpLM",
        },
      }
    )
      .then((response) => response.json())
      .then((resData) => {
        let data = resData.data;
        // console.log("getSingleOrderData", data, resData);
        setSingleOrderData(data);
        setSelectedInvoiceId(id);
        setDrawerType("orderDetails");
        setDrawerOpen(true);
      })
      .catch(() => {
        setSelectedInvoiceId(id);
        setDrawerType("orderDetails");
        setDrawerOpen(true);
      });
  };

  useEffect(() => {
    getSearchOrderListData();
  }, []);

  useEffect(() => {
    (async () => {
      const res = (await getInvoiceList()) as any;
      if (!res.error) {
        const InvoiceDetails = res.response.data.data;
        // console.log("data");
        // console.log("shipmentDetailsRes", InvoiceDetails);
        // const data = InvoiceDetails.map((item) => {
        //   return {
        //     "Invoice Date": item.invoiceCreatedAt,
        //     "Shipment Count": item.shipmentCount,
        //     "Shipped by": item.shippedBy,
        //     "Invoice Amount": `$ ${item.total}`,
        //     "Invoice Number": item.invoiceNumber,
        //   };
        //});
        setInvoiceData(InvoiceDetails);
      }
    })();
  }, []);

  // const openInvoiceDrawer = (id: any, type: any) => {
  //   if (type == "orderDetails") {
      
  //   } else {
  //     setSelectedInvoiceId(id);
  //     setDrawerType(type);
  //     setDrawerOpen(true);
  //   }
  const openInvoiceDrawer = (id: any, type: any) => {
    if (type == "orderDetails") {
      getSingleOrderData(id);
    } else {
      setSelectedInvoiceId(id);
      setDrawerType(type);
      setDrawerOpen(true);
    }
  };
  const tableTop = () => {
    return (
      <InvoiceTableTop>
        <p style={{ fontWeight: "bold", color: "black", fontSize: 19 }}>
          {invoiceTable.length} Invoices (0 Selected)
        </p>
        <div>
          <Button
            style={{ width: 190, marginRight: 20 }}
            size="large"
            secondary
            label="Download Selected"
            onClick={() => {}}
          />
        </div>
      </InvoiceTableTop>
    );
  };

  return (
    <ModuleContainer>
      <ContainerTitle>Invoices</ContainerTitle>
      <InvoicesWrapper>
        <Input label="Invoice Number" placeholder="eg. 123,321" />
        <Input label="From Date" placeholder="Select" />
        <Input label="To Date" placeholder="Select" />
      </InvoicesWrapper>
      {/* <Table
        data={OnHoldTable}
        tableTop={tableTop()}
        showCheckbox
        showPagination
        perPageRows={15}
        filterColumns={[0, 1, 2, 3, 4, 5]}
      />
      <hr/> */}
      <Table
        data={invoiceTable(invoiceData,openInvoiceDrawer)}
        tableTop={tableTop()}
        showCheckbox
        showPagination
        perPageRows={15}
        filterColumns={[0, 1, 2, 3, 4, 5]}
      />
      <Drawer
        open={drawerOpen}
        title={getDrawerTitle()}
        setDrawerOpen={(flag) => setDrawerOpen(flag)}
        closeIcon={true}
        actionButtons={true}
      >
        {drawerType == "invoice" ? (
          <AddNewPaymentDrawer />
       
        ) : (
          <OrderDetailsDrawer orderId={4150} setDrawerOpen={setDrawerOpen}/>
        )}
        
      </Drawer>
    </ModuleContainer>
  );
};

export default InvoicesContainer;
