import { FormikValues } from "formik";
import { Typography } from "@material-ui/core";
import AddItemLabel from "app/components/AddItemLabel";
import { Flex } from "app/components/Input/style";
import Select from "app/components/Select";
import { CustomInput } from "../CompanyProfileContainer/style";
import { WEIGHTDIMENSION,DIMENSION2 } from "../../../../../constants";
import { useState } from "react";

function DetailsFormItem(props: { formik: FormikValues; index: number }) {
  const { handleChange, errors, touched, handleBlur, handleSubmit } =
    props.formik;
  const { index } = props;
  const formItem = `shipementDeatials.${index}`;
  const errorItem = errors.shipementDeatials && errors.shipementDeatials[index];
  const toucherItem =
    touched.shipementDeatials && touched.shipementDeatials[index];
    const [dimensions ,setDimensions]=useState<boolean|null>()
  return (
    <>
      <Typography
        className="typography"
        variant="h1"
        component="h3"
      >Item#{index+1}</Typography>
      <Flex direction={"column"}>
        <Flex top={20}>
          <Flex flex={1}>
            <Flex flex={1}>
              <CustomInput
                name={`${formItem}.ShipmentWeight`}
                id={`${formItem}.ShipmentWeight`}
                onBlur={handleBlur}
                onChange={handleChange}
                error={toucherItem?.ShipmentWeight && errorItem?.ShipmentWeight}
                label={"order Weight"}
                placeholder={"Start typing"}
              />
            </Flex>
            <Flex flex={1} left={30}>
              <Select
                label={"Unit"}
                id={"locationType"}
                name={"locationType"}
                options={WEIGHTDIMENSION}
              />
            </Flex>
          </Flex>

          <Flex flex={1} left={30}>
            <Flex flex={1}>
              <CustomInput
                id={`${formItem}.Length`}
                name={`${formItem}.Length`}
                onBlur={handleBlur}
                onChange={handleChange}
                error={toucherItem?.Length && errorItem?.Length}
                label={"Length"}
                placeholder={"Start typing"}
              />
            </Flex>
            <Flex flex={1} left={30}>
              <CustomInput
                id={`${formItem}.Width`}
                name={`${formItem}.Width`}
                onBlur={handleBlur}
                onChange={handleChange}
                error={toucherItem?.Width && errorItem?.Width}
                label={"Width"}
                placeholder={"Start typing"}
              />
            </Flex>
            <Flex flex={1} left={30}>
              <CustomInput
                id={`${formItem}.Height`}
                name={`${formItem}.Height`}
                onBlur={handleBlur}
                onChange={handleChange}
                error={toucherItem?.Height && errorItem?.Height}
                label={"Height"}
                placeholder={"Start typing"}
              />
            </Flex>
            <Flex flex={1} left={30}>
              <Select
                id={"locationType"}
                name={"locationType"}
                label={"Unit"}
                options={DIMENSION2}
              />
            </Flex>
          </Flex>
        </Flex>
        <Flex top={20}>
          <Flex flex={1}>
            <CustomInput
              id={`${formItem}.Pieces`}
              name={`${formItem}.Pieces`}
              onBlur={handleBlur}
              onChange={handleChange}
              error={toucherItem?.Pieces && errorItem?.Pieces}
              label={"Pieces"}
              placeholder={"Start typing"}
            />
          </Flex>
          <Flex flex={1} left={30}></Flex>
          <Flex flex={1} left={30}></Flex>
          <Flex flex={1} left={30}></Flex>
        </Flex>

        <Flex top={20}>
          <CustomInput
            id={`${formItem}.ShipmentDescription`}
            name={`${formItem}.ShipmentDescription`}
            onBlur={handleBlur}
            onChange={handleChange}
            error={
              toucherItem?.ShipmentDescription && errorItem?.ShipmentDescription
            }
            label={"order Description"}
            placeholder={"Start typing"}
            type={"textarea"}
          />
        </Flex>

        <Flex top={20}>
          <AddItemLabel text={"Add order Picture"} />
        </Flex>
      </Flex>
    </>
  );
}

export default DetailsFormItem;
