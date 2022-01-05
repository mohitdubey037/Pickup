import { Button } from "app/components/Buttons";
import { Input } from "app/components/Input";
import ModuleContainer from "app/components/ModuleContainer";
import { Table } from "app/components/Table";
import { ContainerTitle } from "app/components/Typography/Typography";
import { OnHoldTable } from "./helper";
import { InvoicesWrapper, InvoiceTableTop } from "./InvoiceStyle";
import { dots3, sliders } from "app/assets/Icons";
import { useEffect, useState } from "react";
import { getInvoiceList } from "../../../../../services/PaymentServices/index";

const InvoicesContainer = ({ path: string }) => {
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [invoiceData, setInvoiceData] = useState([]);
  const [selectedInvoiceId, setSelectedInvoiceId] = useState("");
  const [drawerType, setDrawerType] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  useEffect(() => {
    (async () => {
      const res = (await getInvoiceList()) as any;
      if (!res.error) {
        const InvoiceDetails = res.response.data.data;
        console.log("data");
        console.log("shipmentDetailsRes", InvoiceDetails);
        const data = InvoiceDetails.map((item) => {
          return {
            "Invoice Date": item.invoiceCreatedAt,
            "Shipment Count": item.shipmentCount,
            "Shipped by": item.shippedBy,
            "Invoice Amount": `$ ${item.total}`,
            "Invoice Number": item.invoiceNumber,
          };
        });
        setInvoiceData(data);
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

  const tableTop = () => {
    return (
      <InvoiceTableTop>
        <p style={{ fontWeight: "bold", color: "black", fontSize: 19 }}>
          {OnHoldTable.length} Invoices (0 Selected)
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
        data={invoiceData}
        tableTop={tableTop()}
        showCheckbox
        showPagination
        perPageRows={15}
        filterColumns={[0, 1, 2, 3, 4, 5]}
      />
    </ModuleContainer>
  );
};

export default InvoicesContainer;
