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
interface SelectBoardType {
  categoryId: number;
  createdAt: string;
  createdBy: number;
  description: string;
  icon: string;
  name: string;
  selectedIcon: string;
  status: number;
  typeId: number;
  updatedAt: string;
  updatedBy: number;
}
interface SelectCategoryType {
  id?: number;
  name?: string;
  value: string | number;
}
function DetailsForm(props: { formik: FormikValues; noOfItem: number }) {
  const { handleChange, values, errors, touched, handleBlur, handleSubmit } =
    props.formik;
  const [selectedBoard, setSelectedBoard] = useState<SelectBoardType[]>([]);
  const [category, setCategory] = useState<SelectBoardType>();
  const categorySelectHandler = (value: string | number) => {
    const selectedCategory = selectedBoard.find(
      (item) => item.categoryId === value
    );
    setCategory(selectedCategory);
  };
  const [dimensions, setDimensions] = useState<boolean | null>();

  useEffect(() => {
    (async () => {
      const response = await getCategoryList();
      if (response.success && response.response) {
        const data = response.response as { data: any };
        console.log(data.data.data, "its the response");
        setSelectedBoard(data.data.data);
        setDimensions(data.data.data.dimensions);
      }
    })();
  }, []);
  return (
    <>
      <Flex direction={"column"}>
        <Flex top={20}>
          <Flex flex={1}>
            <Select
              id="categoryId"
              name="categoryId"
              label={"Category"}
              value={values?.categoryId}
              onSelect={(e) => {
                categorySelectHandler(e.target.value);
                handleChange(e);
              }}
              options={
                selectedBoard
                  ? selectedBoard.map((option) => ({
                      value: option.categoryId,
                      label: option.name,
                    }))
                  : []
              }
            />
          </Flex>
          <Flex flex={1} left={30}>
            <CustomInput
              name={`ShipmentWeight`}
              id={`ShipmentWeight`}
              onBlur={handleBlur}
              onChange={handleChange}
              label={"Customer Reference Number"}
              placeholder={"Start typing"}
            />
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
              id={"fragile"}
              name={"fragile"}
              options={[
                { label: "Yes", value: 1 },
                { label: "No", value: 0 },
              ]}
              onChange={handleChange}
            />
          </Flex>
        </Flex>
        {dimensions ? "text" : "text"}
        {new Array(props.noOfItem).fill("").map((value, index) => {
          return <DetailsFormItem formik={props.formik} index={index} />;
        })}
      </Flex>
    </>
  );
}

export default DetailsForm;
