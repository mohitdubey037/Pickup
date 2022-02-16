import { Grid, Typography } from "@material-ui/core";
import { Button } from "app/components/Buttons";
import { DrawerFooter, DrawerInnerContent } from "app/components/Drawer/style";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import DatePickerInput from "app/components/Input/DatePickerInput";
import TimePickerInput from "app/components/Input/TimePickerInput";
import RadioGroup from "app/components/RadioGroup";
import React, { FC, useState } from "react";

interface ScheduleShipmentsDrawerProps {
  submitButtonLabel: string;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: (
    shippingSchedule: string,
    date: string | null,
    time: string | null
  ) => void;
}

const ScheduleShipmentsDrawer: FC<ScheduleShipmentsDrawerProps> = ({
  setDrawerOpen,
  handleSubmit,
  submitButtonLabel,
}) => {
  const [shippingSchedule, setShippingSchedule] = useState<string>("1");
  const [date, setDate] = useState<string | null>("");
  const [time, setTime] = useState<string | null>("");

  const shippingScheduleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingSchedule(e.target.value);
  };

  return (
    <>
      <DrawerInnerContent>
        <Typography>When are you going to ship this?</Typography>
        <GridContainer container spacing={2}>
          <Grid item xs={12}>
            <RadioGroup
              value={shippingSchedule}
              options={[
                { label: "Right Now", value: "1" },
                { label: "Ship Later", value: "0" },
              ]}
              name={"cardType"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                shippingScheduleHandler(e)
              }
            />
          </Grid>
          <Grid item xs={12}>
            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Date"
                            value={date || null}
                            onChange={(val) => setDate(val)}
                            open={dateOpen}
                            onOpen={() => setDateOpen(true)}
                            onClose={() => setDateOpen(false)}
                            disablePast
                            renderInput={(params) => (
                                <TextField
                                    style={{ width: '100%' }}
                                    label="Date"
                                    placeholder={"e.g 06/06/2021"}
                                    {...params}
                                    onClick={() => setDateOpen(true)}
                                    defaultValue={""}
                                />
                            )}
                        />

                    </LocalizationProvider> */}

            <DatePickerInput
              label="Date"
              placeholder={"e.g 06/06/2021"}
              value={date || null}
              onChange={(val) => setDate(val)}
            />
          </Grid>
          <Grid item xs={12}>
            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <TimePicker
                        label="Time"
                        value={time || null}
                        onChange={(val) => setTime(val)}
                        open={timeOpen}
                        onOpen={() => setTimeOpen(true)}
                        onClose={() => setTimeOpen(false)}
                        renderInput={(params) => (
                            <TextField
                                style={{ width: '100%' }}
                                placeholder={"e.g 12:32"}
                                {...params}
                                onClick={(e) => setTimeOpen(true)}
                                defaultValue={""}
                            />
                        )}
                        />
                    </LocalizationProvider> */}
            <TimePickerInput
              label="Time"
              value={time || null}
              onChange={(val) => setTime(val)}
              placeholder={"e.g 12:32"}
              required
            />
          </Grid>
        </GridContainer>
      </DrawerInnerContent>

      <DrawerFooter>
        <Button
          secondary
          onClick={() => setDrawerOpen(false)}
          label="Cancel"
          size="medium"
        />
        <Button
          label={submitButtonLabel}
          onClick={() => handleSubmit(shippingSchedule, date, time)}
          size="medium"
        />
      </DrawerFooter>
    </>
  );
};

export default ScheduleShipmentsDrawer;
