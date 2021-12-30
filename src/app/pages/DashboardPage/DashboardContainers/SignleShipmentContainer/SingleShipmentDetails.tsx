import { FormikValues, Form, FieldArray } from "formik";
import { Button } from "app/components/Buttons";
import { FormWrapper } from "app/components/Input/style";
import { Flex } from "app/components/Input/style";
import DetailsForm from "./DetailsForm";

import { shipmentDetailsItemInitValue } from "./helper";

function SingleShipmentDetails(props: { formik: FormikValues }) {
  const { values, setFieldValue } = props.formik;

  const addMoreItemHandler = () => {
    const shipementDeatials = values.shipementDeatials;
    shipementDeatials.push(shipmentDetailsItemInitValue);
    setFieldValue("shipementDeatials", shipementDeatials);
  };

  return (
    <FormWrapper>
      <>
        <DetailsForm
          formik={props.formik}
          noOfItem={values.shipementDeatials.length}
        />
      </>
      <Flex top={20}>
        <Button
          label={"Add More Items"}
          secondary={true}
          style={{ width: 190 }}
          onClick={addMoreItemHandler}
        />
      </Flex>
    </FormWrapper>
  );
}
export default SingleShipmentDetails;
