import { Flex } from 'app/components/Input/style'
import ModuleContainer from 'app/components/ModuleContainer'
import Select from 'app/components/Select'
import { Table } from 'app/components/Table'
import { ContainerTitle, FormContainerTitle } from 'app/components/Typography/Typography'
import React from 'react'
import OrderHoldingComponent from './OrderHoldingComponent'
import { OrderSummaryTable } from './OrderSummaryHelper'
import { Button } from "../../../../components/Buttons";
import { navigate } from '@reach/router'
function OrderSummary({ path: string }) {
    
    return (
        <>
          
          <ModuleContainer>
      <Flex>
        <Flex flex={1}>
          <ContainerTitle>Order Summary</ContainerTitle>
        </Flex>
        <div style={{ width: 300 }}>
         
        </div>
      </Flex>

      <Flex direction={"column"} top={20}>
        <Table
          data={OrderSummaryTable}
        />
      </Flex>
    </ModuleContainer>
  <div style={{display:'inline-flex',justifyContent:'space-evenly',paddingLeft:400}}>
<ContainerTitle >Total</ContainerTitle>
</div>
<div style={{display:'inline-flex',justifyContent:'space-evenly',paddingLeft:150}}>
<ContainerTitle >$250</ContainerTitle>
</div>
      <div style={{marginLeft:600, padding:10 , paddingTop:30, paddingBottom:40}}>
      <OrderHoldingComponent />
      </div>
      <Flex style={{ marginBottom: 10, padding:"inherit" }} direction={"row-reverse"}>
        <Button
          style={{ width: 190 }}
          label="Proceed to Payment"
          onClick={()=>{
            navigate?.("shipment-summary")
          }}
          
        />
        <Button
          style={{ width: 190, marginRight: 20 }}
          secondary
          label="Back"
          onClick={()=>{}}
        />
      </Flex>
        </>
    
    );
}
export default OrderSummary;