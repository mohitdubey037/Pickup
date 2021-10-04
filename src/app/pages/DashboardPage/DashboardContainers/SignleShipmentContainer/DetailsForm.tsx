import { FormikValues } from "formik";
import { Typography } from "@material-ui/core";
import AddItemLabel from "app/components/AddItemLabel";
import { Flex } from "app/components/Input/style";
import RadioGroup from "app/components/RadioGroup";
import Select from "app/components/Select";
import { CustomInput } from "../CompanyProfileContainer/style";

function DetailsForm(props: { formik: FormikValues }) {
  const { handleChange, errors, touched, handleBlur, handleSubmit } =
    props.formik;
  return (
    <>
      <Typography className="typography" variant="h1" component="h3">
        Parent Shipment
      </Typography>
      <Flex direction={"column"}>
        <Flex top={20}>
          <Flex flex={1}>
            <CustomInput
              id="Category"
              name="Category"
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.Category && errors.Category}
              label={"Category"}
              placeholder={"Start typing"}
            />
          </Flex>
          <Flex flex={1} left={30}>
            <Select label={"Customer Reference Number"} />
          </Flex>
        </Flex>
        <Flex top={20}>
          <Flex flex={1}>
            <Flex flex={1}>
              <CustomInput
                id="ShipmentWeight"
                name="ShipmentWeight"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.ShipmentWeight && errors.ShipmentWeight}
                label={"Shipment Weight"}
                placeholder={"Start typing"}
              />
            </Flex>
            <Flex flex={1} left={30}>
              <Select
                label={"Unit"}
                id={"locationType"}
                name={"locationType"}
              />
            </Flex>
          </Flex>

          <Flex flex={1} left={30}>
            <Flex flex={1}>
              <CustomInput
                id="Length"
                name="Length"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.Length && errors.Length}
                label={"Length"}
                placeholder={"Start typing"}
              />
            </Flex>
            <Flex flex={1} left={30}>
              <CustomInput
                id="Width"
                name="Width"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.Width && errors.Width}
                label={"Width"}
                placeholder={"Start typing"}
              />
            </Flex>
            <Flex flex={1} left={30}>
              <CustomInput
                id="Height"
                name="Height"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.Height && errors.Height}
                label={"Height"}
                placeholder={"Start typing"}
              />
            </Flex>
            <Flex flex={1} left={30}>
              <Select
                id={"locationType"}
                name={"locationType"}
                label={"Unit"}
              />
            </Flex>
          </Flex>
        </Flex>
        <Flex top={20}>
          <Flex flex={1}>
            <CustomInput
              id="Pieces"
              name="Pieces"
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.Pieces && errors.Pieces}
              label={"Pieces"}
              placeholder={"Start typing"}
            />
          </Flex>
          <Flex flex={1} left={30}>
            <CustomInput
              id="ShipmentCost"
              name="ShipmentCost"
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.ShipmentCost && errors.ShipmentCost}
              label={"Shipment Cost"}
              placeholder={"Start typing"}
            />
          </Flex>
        </Flex>
        <Flex top={20}>
          <CustomInput
            id="Pieces"
            name="Pieces"
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.Pieces && errors.Pieces}
            label={"Pieces"}
            placeholder={"Start typing"}
          />
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
              label={"Fragile Shipment"}
              options={[
                { label: "Yes", value: "1" },
                { label: "No", value: "0" },
              ]}
              name={"Fragile Shipment"}
            />
          </Flex>
        </Flex>

        <Flex top={20}>
          <CustomInput
            id="ShipmentDescription"
            name="ShipmentDescription"
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.ShipmentDescription && errors.ShipmentDescription}
            label={"Shipment Description"}
            placeholder={"Start typing"}
            type={"textarea"}
          />
        </Flex>

        <Flex top={20}>
          <AddItemLabel text={"Add Shipment Picture"} />
        </Flex>
      </Flex>
    </>
  );
}

export default DetailsForm;
