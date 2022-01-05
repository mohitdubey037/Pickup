import { FormikValues, Form, FieldArray } from "formik";
import { Button } from "app/components/Buttons";
import { FormWrapper } from "app/components/Input/style";
import { Flex } from "app/components/Input/style";
import DetailsForm from "./DetailsForm";

import { shipmentDetailsItemInitValue } from "./helper";

function SingleShipmentDetails(props: { formik: FormikValues, index: number }) {
  const { values, setFieldValue } = props.formik;

  const singleFormValues = values.orders[props.index];

  const addMoreItemHandler = () => {
    const shipmentDetails = singleFormValues.shipmentDetails;
    shipmentDetails.push(shipmentDetailsItemInitValue);
    setFieldValue("shipmentDetails", shipmentDetails);
  };

  return (
    <FormWrapper style={{ width: "100%" }}>
      <>
        <DetailsForm
          formik={props.formik}
          index={props.index}
          noOfItem={singleFormValues.shipmentDetails.length}
        />
      </>
      {singleFormValues.categoryId && (
        <Flex top={20}>
          <Button
            label={"Add More Items"}
            secondary={true}
            style={{ width: 190 }}
            onClick={addMoreItemHandler}
          />
        </Flex>
      )}
    </FormWrapper>
  );
}
export default SingleShipmentDetails;
