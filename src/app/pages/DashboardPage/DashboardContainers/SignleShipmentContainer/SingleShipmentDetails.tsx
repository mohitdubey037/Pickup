import { FormikValues, Form, FieldArray } from "formik";
import { Button } from "app/components/Buttons";
import { FormWrapper } from "app/components/Input/style";
import { Flex } from "app/components/Input/style";
import DetailsForm from "./DetailsForm";
import DetailsFormItem from "./DetailsFormItem";
import { useState } from "react";

function SingleShipmentDetails(props: { formik: FormikValues }) {
  const { values } = props.formik;
  const [noOfItem, setNoOfItem] = useState(1)
  const addMoreItemHandler=()=>{
    setNoOfItem(noOfItem+1)
  }
   return (
    <FormWrapper>
      <>
        <DetailsForm formik={props.formik} 
        noOfItem={noOfItem}/>

        {/* {values?.shipementDeatials?.map((formItem, index) => (
          <DetailsFormItem formik={props.formik} index={index} />
        ))} */}
      </>
      <Flex top={20}>
        <Button
          label={"Add More Items"}
          secondary={true}
          style={{ width: 190 }}
          onClick= {addMoreItemHandler}
        />
      </Flex>
    </FormWrapper>
  );
}
export default SingleShipmentDetails;
