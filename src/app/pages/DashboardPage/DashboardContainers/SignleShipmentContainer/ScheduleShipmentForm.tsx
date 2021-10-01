import { Flex, FormWrapper } from "app/components/Input/style";
import RadioGroup from "app/components/RadioGroup";
import React from "react";
import { CustomInput } from "../CompanyProfileContainer/style";

function ScheduleShipmentForm() {
  return (
    <FormWrapper>
      <Flex>
        <RadioGroup
          label={"What do you want to do with the shipment?"}
          options={[
            {
              value: '1',
              label: "Ship Right Now",
            },
            {
              value: '2',
              label: "Ship Later",
            },
            {
              value: '3',
              label: "Move to Holding Zone",
            },
          ]}
        />
      </Flex>
      <Flex top={20}>
        <Flex>
          <Flex flex={1}>
            <CustomInput label={"Date"} placeholder={"e.g 06/06/2021"} />
          </Flex>
          <Flex left={30} flex={1}>
            <CustomInput label={"Date"} placeholder={"e.g 12:32"} />
          </Flex>
        </Flex>

        <Flex flex={1}></Flex>
      </Flex>
    </FormWrapper>
  );
}

export default ScheduleShipmentForm;
