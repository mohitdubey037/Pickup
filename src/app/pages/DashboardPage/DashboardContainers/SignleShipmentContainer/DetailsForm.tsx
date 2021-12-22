import { Formik, FormikValues } from "formik";
import { Typography } from "@material-ui/core";
import AddItemLabel from "app/components/AddItemLabel";
import { Flex } from "app/components/Input/style";
import RadioGroup from "app/components/RadioGroup";
import Select from "app/components/Select";
import { CustomInput } from "../CompanyProfileContainer/style";

import { useEffect, useState } from "react";
import { getCategoryList } from "services/SingleShipmentServices";
import DetailsFormItem from "./DetailsFormItem";
interface SelectBoardType{
  categoryId:number,
  createdAt:string,
  createdBy:number,
  description:string,
  icon:string,
  name:string,
  selectedIcon:string,
  status:number,
  typeId:number,
  updatedAt:string,
  updatedBy:number
}
interface SelectCategoryType{
  id?:number,
  name?:string,
  value:string |number
}
function DetailsForm(props: { formik: FormikValues ,noOfItem:number}) {

  const { handleChange, errors, touched, handleBlur, handleSubmit } =
    props.formik;
    const [selectedBoard, setSelectedBoard] = useState<SelectBoardType[]>([]);
  const [category, setCategory] =  useState<SelectCategoryType>()
  const loadCategory = async ()=>{
   
 
    
  }
  useEffect(() => {
    (async () => { 
      const response = await getCategoryList();
      if (response.success&& response.response){
        const data = response.response as {data: any}
        console.log(data.data.data,"its the response")
         setSelectedBoard(data.data.data)
      }
    })()
    
  }, [])
  return (
    <>
      
      <Flex direction={"column"}>
        <Flex top={20}>
          <Flex flex={1}>
          <Select
              id="Category"
              name="Category"
              label={"Category"}
              value={category?.value}
              onSelect={({target:{value,id,name}})=>{setCategory({value,id,name})}}
              options={selectedBoard ? selectedBoard.map(option => ({value: option.categoryId, label: option.name})):[]}
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
