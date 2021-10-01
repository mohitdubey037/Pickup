import React from "react";
import { Input } from "app/components/Input";
import { Grid, Typography } from "@material-ui/core";
import { FormWrapper } from "app/components/Input/style";
import { Block, Flex, FullCard } from "app/components/Input/style";
import Select from "app/components/Select";
import { CustomInput } from "../CompanyProfileContainer/style";

function SingleShipmentDetails() {
  return (
    <FormWrapper>
      <Typography className="typography" variant="h1" component="h3">
        Parent Shipment
      </Typography>
      <Flex direction={"column"}>
        <Flex style={{ marginTop: 20 }}>
          <Flex style={{ flex: 1 }}>
            <CustomInput label={"Category"} placeholder={"Start typing"} />
          </Flex>
          <Flex style={{ flex: 1, marginLeft: 30 }}>
            <Select label={"Customer Reference Number"} />
          </Flex>
        </Flex>
        <Flex style={{ marginTop: 20 }}>
          <Flex>
            <Flex style={{ flex: 1 }}>
              <CustomInput
                label={"Shipment Weight"}
                placeholder={"Start typing"}
              />
            </Flex>
            <Flex style={{ flex: 1, marginLeft: 30 }}>
              <Select
                label={"Unit"}
                id={"locationType"}
                name={"locationType"}
              />
            </Flex>
          </Flex>

          <Flex style={{ marginLeft: 30 }}>
            <Flex style={{ flex: 1 }}>
              <CustomInput label={"Length"} placeholder={"Start typing"} />
            </Flex>
            <Flex style={{ flex: 1, marginLeft: 30 }}>
              <CustomInput label={"Width"} placeholder={"Start typing"} />
            </Flex>
            <Flex style={{ flex: 1, marginLeft: 30 }}>
              <CustomInput label={"Height"} placeholder={"Start typing"} />
            </Flex>
            <Flex style={{ flex: 1, marginLeft: 30 }}>
              <Select
                id={"locationType"}
                name={"locationType"}
                label={"Unit"}
              />
            </Flex>
          </Flex>
        </Flex>
        <Flex style={{ marginTop: 20 }}>
          <Flex style={{ flex: 1 }}>
            <CustomInput label={"Pieces"} placeholder={"Start typing"} />
          </Flex>
          <Flex style={{ flex: 1 ,marginLeft: 30 }}>
            <CustomInput label={"Shipment Cost"} placeholder={"Start typing"} />
          </Flex>
        </Flex>
        <Flex style={{ marginTop: 20 }}>
          <CustomInput label={"Pieces"} placeholder={"Start typing"} />
        </Flex>
        <Flex style={{ marginTop: 20 }}>
          <CustomInput
            label={"Shipment Description"}
            placeholder={"Start typing"}
            type={"textarea"}
          />
        </Flex>
      </Flex>
    </FormWrapper>
  );
}
export default SingleShipmentDetails;
