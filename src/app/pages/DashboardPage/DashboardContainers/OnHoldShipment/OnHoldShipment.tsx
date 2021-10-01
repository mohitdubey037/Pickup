import { Button } from "app/components/Buttons";
import { Input } from "app/components/Input";
import ModuleContainer from "app/components/ModuleContainer";
import { Table } from "app/components/Table";
import { ContainerTitle } from "app/components/Typography/Typography";
import { OnHoldTable } from "./helper";
import { OnHoldFieldsWrapper, OnHoldTableTop } from "./Style";
import { dots3, sliders } from "app/assets/Icons";

const OnHoldShipmentContainer = ({ path: string }) => {
  const tableTop = () => {
    return (
      <OnHoldTableTop>
        <p>{OnHoldTable.length} Shipments</p>
        <div>
          <Button label="Delete" secondary={true} onClick={() => {}} style={{borderColor:'#C94C43',color:'#C94C43'}} />
          <Button label="Edit" onClick={() => {}} />
          <img src={dots3} alt="" />
        </div>
      </OnHoldTableTop>
    );
  };

  return (
    <ModuleContainer>
      <ContainerTitle>Search</ContainerTitle>
      <OnHoldFieldsWrapper>
          <Input label="Invoice Number" placeholder="eg. 123,321" />
          <Input label="Shipping Id" placeholder="eg. 123,321" />
          <Input label="From Shipping Date" placeholder="Select" />
          <Input label="To Shipping Date" placeholder="Select" />
          <Input label="Status" placeholder="Select" />
          <Button label="Saved Filters" onClick={() => {}} />
        <img src={sliders} alt="" />
      </OnHoldFieldsWrapper>
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

export default OnHoldShipmentContainer;
