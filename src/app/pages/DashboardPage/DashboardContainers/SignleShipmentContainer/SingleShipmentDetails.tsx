import { Typography } from "@material-ui/core";
import AddItemLabel from "app/components/AddItemLabel";
import { Button } from "app/components/Buttons";
import { FormWrapper } from "app/components/Input/style";
import { Flex } from "app/components/Input/style";
import RadioGroup from "app/components/RadioGroup";
import Select from "app/components/Select";
import { CustomInput } from "../CompanyProfileContainer/style";

function SingleShipmentDetails() {
  return (
    <FormWrapper>
      <Typography className="typography" variant="h1" component="h3">
        Parent Shipment
      </Typography>
      <Flex direction={"column"}>
        <Flex top={20}>
          <Flex flex={1}>
            <CustomInput label={"Category"} placeholder={"Start typing"} />
          </Flex>
          <Flex flex={1} left={30}>
            <Select label={"Customer Reference Number"} />
          </Flex>
        </Flex>
        <Flex top={20}>
          <Flex flex={1}>
            <Flex flex={1}>
              <CustomInput
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
              <CustomInput label={"Length"} placeholder={"Start typing"} />
            </Flex>
            <Flex flex={1} left={30}>
              <CustomInput label={"Width"} placeholder={"Start typing"} />
            </Flex>
            <Flex flex={1} left={30}>
              <CustomInput label={"Height"} placeholder={"Start typing"} />
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
            <CustomInput label={"Pieces"} placeholder={"Start typing"} />
          </Flex>
          <Flex flex={1} left={30}>
            <CustomInput label={"Shipment Cost"} placeholder={"Start typing"} />
          </Flex>
        </Flex>
        <Flex top={20}>
          <CustomInput label={"Pieces"} placeholder={"Start typing"} />
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
            label={"Shipment Description"}
            placeholder={"Start typing"}
            type={"textarea"}
          />
        </Flex>

        <Flex top={20}>
          <AddItemLabel text={"Add Shipment Picture"} />
        </Flex>

        <Flex top={20}>
          <Button
            label={"Add More Items"}
            secondary={true}
            style={{ width: 190 }}
          />
        </Flex>
      </Flex>
    </FormWrapper>
  );
}
export default SingleShipmentDetails;
