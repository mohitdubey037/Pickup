import { Button } from "app/components/Buttons";
import { Input } from "app/components/Input";
import ModuleContainer from "app/components/ModuleContainer";
import { Table } from "app/components/Table";
import { ContainerTitle } from "app/components/Typography/Typography";
import { OnHoldTable } from "./helper";
import { InvoicesWrapper, InvoiceTableTop } from "./InvoiceStyle";
import { dots3, sliders } from "app/assets/Icons";

const InvoicesContainer = ({ path: string }) => {
  const tableTop = () => {
    return (
      <InvoiceTableTop>
        <p>{OnHoldTable.length} Shipments(0 Selected)</p>
        <div>
          <Button size="large" label="Download" onClick={() => {}} />
        </div>
      </InvoiceTableTop>
    );
  };

  return (
    <ModuleContainer>
      <ContainerTitle>Search</ContainerTitle>
      <InvoicesWrapper>
        <Input label="Invoice Number" placeholder="eg. 123,321" />
        <Input label="From Date" placeholder="Select" />
        <Input label="To Date" placeholder="Select" />

        <img src={sliders} alt="" />
      </InvoicesWrapper>
      <Table
        data={OnHoldTable}
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