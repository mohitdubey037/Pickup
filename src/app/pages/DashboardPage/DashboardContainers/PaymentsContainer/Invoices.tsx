import { useEffect, useState } from "react";

import { Button } from "app/components/Buttons";
import { Input } from "app/components/Input";
import ModuleContainer from "app/components/ModuleContainer";
import { Table } from "app/components/Table";
import { ContainerTitle } from "app/components/Typography/Typography";
import { Drawer } from "app/components/Drawer";
import { invoiceTable } from "./helper";
import AddNewPaymentDrawer from "./AddNewPaymentDrawer";
import { InvoicesWrapper, InvoiceTableTop } from "./InvoiceStyle";
import { getInvoiceList } from "../../../../../services/PaymentServices/index";

const InvoicesContainer = ({ path: string }) => {
  const [invoiceData, setInvoiceData] = useState([]);
  const [selectedInvoiceId, setSelectedInvoiceId] = useState("");
  const [drawerType, setDrawerType] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const getDrawerTitle = () => {
    if (drawerType === "invoice") {
      return "Invoice #" + selectedInvoiceId;
    } else {
      return "";
    }
  };

  const openInvoiceDrawer = (id: any, type: any) => {
    if (type === "invoice") {
      setSelectedInvoiceId(id);
      setDrawerType(type);
      setDrawerOpen(true);
    }
  };

  const tableTop = () => {
    return (
      <InvoiceTableTop>
        <p>
          {invoiceData.length} Invoices <span>&nbsp;(0 Selected)</span>
        </p>
        <div>
          <Button
            size="large"
            secondary
            label="Download Selected"
            onClick={() => {}}
          />
        </div>
      </InvoiceTableTop>
    );
  };

  const getInvoiceListData = async () => {
    const res: any = await getInvoiceList();
    if (!res.error) {
      const InvoiceList = res.response.data.data.list;
      setInvoiceData(InvoiceList);
    }
  };

  useEffect(() => {
    getInvoiceListData();
  }, []);

  return (
    <ModuleContainer>
      <ContainerTitle title="Invoices" />
      <InvoicesWrapper>
        <Input label="Invoice Number" placeholder="eg. 123,321" />
        <Input label="From Date" placeholder="Select" />
        <Input label="To Date" placeholder="Select" />
      </InvoicesWrapper>
      <Table
        data={invoiceTable(invoiceData, openInvoiceDrawer)}
        tableTop={tableTop()}
        showCheckbox
        showPagination
        perPageRows={10}
        filterColumns={[0, 1, 2, 3, 4, 5]}
      />
      <Drawer
        open={drawerOpen}
        title={getDrawerTitle()}
        setDrawerOpen={(flag) => setDrawerOpen(flag)}
        closeIcon={true}
        actionButtons={true}
      >
        {drawerType === "invoice" ? (
          <AddNewPaymentDrawer invoiceId={selectedInvoiceId} />
        ) : (
          <></>
        )}
      </Drawer>
    </ModuleContainer>
  );
};

export default InvoicesContainer;
