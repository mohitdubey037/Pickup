import { useState } from "react";
import { Drawer } from "app/components/Drawer";
import ModuleContainer from "app/components/ModuleContainer";
import { FormContainer } from "app/components/ModuleContainer/style";

import {
  ContainerTitle,
  FormContainerTitle,
} from "app/components/Typography/Typography";

import SingleShipmentDetails from "./SingleShipmentDetails";
import SingleSipmentForm from "./SingleSipmentForm";
import { CardDetails } from "app/components/PaymentCardDetails";
import { masterCard } from "../../../../assets/Images/index";
import { useFormik } from "formik";
import { SingleShipmentFormSchema } from "./SingleShipmentFormSchema";
import { Button } from "../../../../components/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "store/reducers/SingleShipmentReducer";
import { singleShipmentInitValues,addShipmentForm } from "./helper";
import { Flex } from "app/components/Input/style";
import ScheduleShipmentForm from "./ScheduleShipmentForm";
import { navigate } from "@reach/router";
import { addShipmentDetail } from "services/SingleShipmentServices";

function SingleShipment({ path: string }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const singleShipmentResponse = useSelector(
    (state: { singleShipment: { singleShipmentResponse: {} } }) =>
      state.singleShipment.singleShipmentResponse
  );
  const dispatch = useDispatch();
  const redirect = () => {
    navigate("/charter-shipment/single-shipment/order-summary");
  };

  const formik = useFormik({
    initialValues: singleShipmentInitValues,
    validationSchema: SingleShipmentFormSchema,
    onSubmit: async() => {
      console.log(formik.values,'Full')
      
      const res= await addShipmentForm(formik.values,1) 
      redirect();
      // dispatch(actions.submitSingleShipment(formik.values));
    },
  }); 
  const handleSubmit= async() => {
    console.log(formik.values,'Full')
    const body={companyName:formik.values['OrigincompanyName']}
    console.log(body,'this is Body')

    const res= await addShipmentDetail(body) 
    //redirect();
    // dispatch(actions.submitSingleShipment(formik.values));
  }
  return (
    <ModuleContainer>
      <ContainerTitle>Single order</ContainerTitle>
      <FormContainer elevation={2}>
        <FormContainerTitle>Address Details</FormContainerTitle>
        <div style={{ marginBottom: "30px" }}>
          <SingleSipmentForm title={"Origin"} formik={formik} />
          <SingleSipmentForm title={"Destination"} formik={formik} />
        </div>
      </FormContainer>
      <FormContainer elevation={2}>
        <FormContainerTitle>Order Details</FormContainerTitle>
        <SingleShipmentDetails formik={formik} />
      </FormContainer>

      <FormContainer elevation={2}>
        <FormContainerTitle>Schedule Shipment</FormContainerTitle>
        <ScheduleShipmentForm formik={formik} />
      </FormContainer>

      <Drawer
        open={drawerOpen}
        setDrawerOpen={(flag) => setDrawerOpen(flag)}
        closeIcon={true}
        title="Payment"
        actionButtons={true}
        cancelButtonText="Cancel"
        actionButtonText="Save"
      >
        <CardDetails
          cardNumber={"1234 5678 1234 3421"}
          nameOnCard={"Deepak Pathak"}
          expiryDate={new Date()}
          cardImage={masterCard}
          cardType={"Master Card"}
        />
      </Drawer>
      <Flex style={{ marginBottom: 10, padding:"inherit" }} direction={"row-reverse"}>
        <Button
          style={{ width: 190 }}
          label="Confirm Order"
          // onClick={handleSubmit}
          // link={() => navigate?.("/")}
          onClick={()=>{
            handleSubmit();
            navigate?.("order-summary")
          }}
          
        />
        <Button
          style={{ width: 190, marginRight: 20 }}
          secondary
          label="Add New Order"
          onClick={()=>{}}
        />
      </Flex>
{/*       
        <Drawer 
          open={true}
         
         title="This is a sample Drawer!!"
         setDrawerOpen={()=>{}}
    
    
          >
            <div>Dont Open It</div>
          </Drawer>
       */}
      
    </ModuleContainer>
  );
}

export default SingleShipment;
