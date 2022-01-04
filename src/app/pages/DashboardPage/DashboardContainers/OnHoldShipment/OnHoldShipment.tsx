import { Button } from "app/components/Buttons";
import { Input } from "app/components/Input";
import ModuleContainer from "app/components/ModuleContainer";
import { Table } from "app/components/Table";
import { ContainerTitle } from "app/components/Typography/Typography";
import { OnHoldTable } from "./helper";
import { OnHoldFieldsWrapper, OnHoldTableTop } from "./Style";
import { dots3, sliders } from "app/assets/Icons";
import Select from "app/components/Select";
import { useState } from "react";
import { Drawer } from "app/components/Drawer";
import ScheduleShipmentsDrawer from "./ScheduleShipmentsDrawer";

const OnHoldShipmentContainer = ({ path: string }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const tableTop = () => {
    return (
      <OnHoldTableTop>
        <p>{OnHoldTable.length} orders</p>
        <div>
          <Button label="Delete" secondary={true} onClick={() => {}} style={{borderColor:'#C94C43',color:'#C94C43'}} />
          <Button label="Schedule" onClick={() => {
                        setDrawerOpen(true);
                    }} />
          <img src={dots3} alt="" />
        </div>
      </OnHoldTableTop>
    );
  };

  return (
    <ModuleContainer>
      <ContainerTitle>On Hold Shipments</ContainerTitle>
      <OnHoldFieldsWrapper>
          <Input label="Invoice Number" style={{width:180}}placeholder="eg. 123,321" />
          <Input label="Shipping Id" placeholder="eg. 123,321" />
          <Input label="From Shipping Date" placeholder="Select" />
          <Input label="To Shipping Date" placeholder="Select" />
          <Select label="Status" style={{width:90}}/>
          <Button secondary  size="large" label="Saved Filters" onClick={() => {}} />
          <img style={{paddingRight:1, marginTop:100}} src={sliders} alt="" />
      </OnHoldFieldsWrapper>
      
      <Table
        data={OnHoldTable}
        tableTop={tableTop()}
        showCheckbox
        showPagination
        perPageRows={15}
        filterColumns={[0, 1, 2, 3, 4, 5]}
      />
         <Drawer
                open={drawerOpen}
                title="Schedule Shipments"
                setDrawerOpen={(flag) => setDrawerOpen(flag)}
                closeIcon={true}
                actionButtons={true}
            ><ScheduleShipmentsDrawer/>
               </Drawer>
    </ModuleContainer>
  );
};

export default OnHoldShipmentContainer;
