import { Formik, FormikValues } from "formik";
import { Typography } from "@material-ui/core";
import AddItemLabel from "app/components/AddItemLabel";
import { Flex } from "app/components/Input/style";
import RadioGroup from "app/components/RadioGroup";
import Select from "app/components/Select";
import { CustomInput } from "../CompanyProfileContainer/style";
import DetailsFormItem from "./DetailsFormItem";

function DetailsForm(props: { formik: FormikValues ,noOfItem:number}) {
  const { handleChange, errors, touched, handleBlur, handleSubmit } =
    props.formik;
  return (
    <>
      
      <Flex direction={"column"}>
        <Flex top={20}>
          <Flex flex={1}>
          <Select
              id="Category"
              name="Category"
              label={"Category"}
            />
          </Flex>
          <Flex flex={1} left={30}>
            <Select label={"Customer Reference Number"} />
          </Flex>
        </Flex>
        <Flex top={20}>
          <Flex flex={1}>
            <Select
              id={"Delivery options"}
              name={"Delivery options"}
              label={"Delivery options"}
            />
          </Flex>
          <Flex flex={1} left={30}>
            <RadioGroup
              label={"Fragile Order"}
              options={[
                { label: "Yes", value: "1" },
                { label: "No", value: "0" },
              ]}
              name={"Fragile order"}
            />
          </Flex>
        </Flex>
        {new Array(props.noOfItem).fill("").map((value,index)=>{
          return(
          <DetailsFormItem
          formik={props.formik}
          index={index}/>
        )})}
      </Flex>
    </>
  );
}

export default DetailsForm;
