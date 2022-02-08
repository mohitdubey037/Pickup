import { FormikValues } from "formik";
import { Box } from "@material-ui/core";

import { Button } from "app/components/Buttons";
import DetailsForm from "./DetailsForm";
import { shipmentDetailsItemInitValue } from "./helper";

function SingleShipmentDetails(props: {
  formik: FormikValues;
  index: number;
  disabled?: boolean;
}) {
  const {
    formik: { values, setFieldValue },
    disabled = false,
  } = props;

  const singleFormValues = values.orders[props.index];

  const addMoreItemHandler = () => {
    const shipmentDetails = singleFormValues.shipmentDetails;
    shipmentDetails.push(shipmentDetailsItemInitValue);
    setFieldValue("shipmentDetails", shipmentDetails);
  };

  return (
    <Box mb={8}>
      <DetailsForm
        disabled={disabled}
        formik={props.formik}
        index={props.index}
        noOfItem={singleFormValues.shipmentDetails.length}
      />
      {singleFormValues.categoryId && (
        <Button
          label={"Add More Items"}
          secondary={true}
          onClick={addMoreItemHandler}
          size="medium"
        />
      )}
    </Box>
  );
}
export default SingleShipmentDetails;
