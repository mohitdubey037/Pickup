import { Grid, Typography } from "@material-ui/core";
import { Input } from "app/components/Input";
import { Flex } from "app/components/Input/style";
import RadioGroup from "app/components/RadioGroup";
import React from "react";

function ScheduleShipmentsDrawer() {
  return (
    <>
      <Grid style={{ width: 500 }}></Grid>
      <Typography>When are you going to ship this?</Typography>
      <Flex direction="row">
        <RadioGroup
          options={[
            { label: "Right Now", value: "1" },
            { label: "Ship Later", value: "0" },
          ]}
          name={"cardType"}
        />
      </Flex>
      <Grid item xs={11}>
              <Input
                id="Date"
                name="Date"
                
                label={"Date"}
                placeholder={"e.g 06/06/2021"}
              />
            </Grid>
            <Grid item xs={11}>
              <Input
                id="Time"
                name="Time"
               
                label={"Time"}
                placeholder={"e.g 12:32"}
              />
            </Grid>
    </>
  );
}

export default ScheduleShipmentsDrawer;
