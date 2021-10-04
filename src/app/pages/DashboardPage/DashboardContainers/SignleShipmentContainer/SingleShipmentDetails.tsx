import { FormikValues, Form, FieldArray } from "formik";
import { Button } from "app/components/Buttons";
import { FormWrapper } from "app/components/Input/style";
import { Flex } from "app/components/Input/style";
import DetailsForm from "./DetailsForm";
import DetailsFormItem from "./DetailsFormItem";

function SingleShipmentDetails(props: { formik: FormikValues }) {
  const { values } = props.formik;
   return (
    <FormWrapper>
      <>
        <DetailsForm formik={props.formik} />

        {values?.shipementDeatials?.map((formItem, index) => (
          <DetailsFormItem formik={props.formik} index={index} />
        ))}
      </>
      <Flex top={20}>
        <Button
          label={"Add More Items"}
          secondary={true}
          style={{ width: 190 }}
        />
      </Flex>
    </FormWrapper>
  );
}
export default SingleShipmentDetails;
