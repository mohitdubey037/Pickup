import { useState } from "react";
import { Drawer } from "app/components/Drawer";
import { Dropdown } from "app/components/Dropdown";
import ModuleContainer from "app/components/ModuleContainer";
import { FormContainer } from "app/components/ModuleContainer/style";
import { Radio } from "app/components/Radio";
import Select from "app/components/Select";
import {
  ContainerTitle,
  FormContainerTitle,
} from "app/components/Typography/Typography";
import WarningMessage from "app/components/WarningMessage/WarningMessage";
import ShipmentSummaryTable from "./ShipmentSummaryTable";
import SingleShipmentDetails from "./SingleShipmentDetails";
import SingleSipmentForm from "./SingleSipmentForm";
import { CardDetails } from "app/components/PaymentCardDetails";
// import { mastercard } from 'app/assets/Images';
import { masterCard } from "../../../../assets/Images/index";
import { useFormik } from "formik";
import { SingleShipmentFormSchema } from "./SingleShipmentFormSchema";
import { Button } from "../../../../components/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "store/reducers/SingleShipmentReducer";
import { singleShipmentInitValues } from "./helper";
import { Flex } from "app/components/Input/style";
import ScheduleShipmentForm from "./ScheduleShipmentForm";

function SingleShipment({ path: string }) {
  
  const [drawerOpen, setDrawerOpen] = useState(false);
  const singleShipmentResponse = useSelector(
    (state: { singleShipment: { singleShipmentResponse: {} } }) =>
      state.singleShipment.singleShipmentResponse
  );
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: singleShipmentInitValues,
    validationSchema: SingleShipmentFormSchema,
    onSubmit: () => {
      dispatch(actions.submitSingleShipment(formik.values));
    },
  });
  return (
    <ModuleContainer>
      <ContainerTitle>Single Shipment</ContainerTitle>
      <FormContainer elevation={2}>
        <FormContainerTitle>Address Details</FormContainerTitle>
        <div style={{ marginBottom: "30px" }}>
          <SingleSipmentForm title={"Origin"} formik={formik} />
          <SingleSipmentForm title={"Destination"} formik={formik} />
        </div>
      </FormContainer>
      <FormContainer elevation={2} >
        <FormContainerTitle>Shipment Details</FormContainerTitle>
        <SingleShipmentDetails formik={formik} />
      </FormContainer>

      <FormContainer elevation={2} >
        <FormContainerTitle>Schedule Shipment</FormContainerTitle>
        <ScheduleShipmentForm />
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
      <Flex style={{ marginTop: 20 }} direction={"row-reverse"}>
        <Button
          style={{ width: 190 }}
          label="Confirm Shipment"
          onClick={formik.handleSubmit}
        />
        <Button
          style={{ width: 190, marginRight: 20 }}
          secondary
          label="Add New Shipment"
        />
      </Flex>
    </ModuleContainer>
  );
}

export default SingleShipment;
