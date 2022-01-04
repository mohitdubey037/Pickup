import { Button } from "app/components/Buttons";
import { Input } from "app/components/Input";
import ModuleContainer from "app/components/ModuleContainer";
import { Table } from "app/components/Table";
import { ContainerTitle } from "app/components/Typography/Typography";
import { OnHoldTable } from "./helper";
import { OnHoldFieldsWrapper, OnHoldTableTop } from "./Style";
import { dots3, sliders } from "app/assets/Icons";
import Select from "app/components/Select";
import { useEffect } from "react";
import { getHoldingShipments } from "services/HoldingService";
const OnHoldShipmentContainer = ({ path: string }) => {


    useEffect(() => {
        (async () => {
            const data = await getHoldingShipments()
            console.log('data', data)
        })()

    },[])

    const tableTop = () => {
        return (
            <OnHoldTableTop>
                <p>{OnHoldTable.length} orders</p>
                <div>
                    <Button label="Delete" secondary={true} onClick={() => { }} style={{ borderColor: '#C94C43', color: '#C94C43' }} />
                    <Button label="Edit" onClick={() => { }} />
                    <img src={dots3} alt="" />
                </div>
            </OnHoldTableTop>
        );
    };

    return (
        <ModuleContainer>
            <ContainerTitle>On Hold Shipments</ContainerTitle>
            <OnHoldFieldsWrapper>
                <Input label="Invoice Number" style={{ width: 180 }} placeholder="eg. 123,321" />
                <Input label="Shipping Id" placeholder="eg. 123,321" />
                <Input label="From Order Date" placeholder="Select" />
                <Input label="To Order Date" placeholder="Select" />
                {/* <Select label="Status" style={{ width: 90 }} /> */}
                {/* <Button secondary size="large" label="Saved Filters" onClick={() => { }} /> */}
                <img style={{ paddingRight: 1, marginTop: 100 }} src={sliders} alt="" />
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
