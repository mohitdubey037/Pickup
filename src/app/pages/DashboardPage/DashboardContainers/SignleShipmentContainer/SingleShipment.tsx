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
import { singleShipmentFormSchema } from "./SingleShipmentFormSchema";
import { Button } from "../../../../components/Buttons";

import { singleShipmentInitValues, addShipmentForm } from "./helper";
import { Flex } from "app/components/Input/style";
import ScheduleShipmentForm from "./ScheduleShipmentForm";
import { navigate } from "@reach/router";

function SingleShipment({ path: string }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const redirect = (orderId: number) => {
    navigate(`/dashboard/charter-shipment/order-summary/${orderId}`);
  };

  const formik = useFormik({
    initialValues: singleShipmentInitValues,
    validationSchema: singleShipmentFormSchema,
    onSubmit: async () => {
      setIsLoading(true);
      const res = await addShipmentForm(formik.values, 1);

      setIsLoading(false);
      if (res.success) {
        const orderId = res.response.data.data;
        redirect(orderId);
      }
    },
  });

  return (
    <ModuleContainer>
      <ContainerTitle>Single order</ContainerTitle>
      <FormContainer elevation={2}>
        <FormContainerTitle>Address Details</FormContainerTitle>
        <div style={{ marginBottom: "30px" }}>
          <SingleSipmentForm title={"origin"} formik={formik} />
          <SingleSipmentForm title={"destination"} formik={formik} />
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
      <Flex
        style={{ marginBottom: 10, padding: "inherit" }}
        direction={"row-reverse"}
      >
        <Button
          style={{ width: 190 }}
          label="Confirm Order"
          onClick={formik.handleSubmit}
          showLoader={isLoading}
        />
        <Button
          style={{ width: 190, marginRight: 20 }}
          secondary
          label="Add New Order"
          onClick={() => {}}
        />
      </Flex>
    </ModuleContainer>
  );
}

export default SingleShipment;
