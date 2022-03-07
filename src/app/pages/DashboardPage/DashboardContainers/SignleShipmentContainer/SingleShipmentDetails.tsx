import { FormikValues } from "formik";
import { Button } from "app/components/Buttons";
import DetailsForm from "./DetailsForm";
import { shipmentDetailsItemInitValue } from "./helper";
import { Box } from "@mui/material";

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
    <Box mb={5}>
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
