import React, { useState } from "react";

import { FormikValues } from "formik";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import { TimePicker } from "@mui/lab";

import { Flex, FormWrapper } from "app/components/Input/style";
import RadioGroup from "app/components/RadioGroup";

import { SCHEDULE_OPTIONS } from "../../../../../constants";

function ScheduleShipmentForm(props: { formik: FormikValues }) {

  const { handleChange, values, errors, touched, setFieldValue } = props.formik;
  const [value, setValue] = useState<Date | null>(new Date());
  const [open, setOpen] = useState(false);
  const [openTime, setOpenTime] = useState(false);

  return (
    <FormWrapper>
      <Flex>
        <RadioGroup
          id={"scheduleType"}
          name={"scheduleType"}
          defaultValue={values.scheduleType}
          label={"What do you want to do with the order?"}
          options={SCHEDULE_OPTIONS}
          error={touched.scheduleType && errors.scheduleType}
          onChange={handleChange}
        />
      </Flex>
      {values.scheduleType === "17" && (
        <Flex top={20}>
          <Flex>
            <Flex flex={1}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date"
                  value={values.shipmentDate || undefined}
                  onChange={(val) => setFieldValue("shipmentDate", val)}
                  open={open}
                  onOpen={() => setOpen(true)}
                  onClose={() => setOpen(false)}
                  disablePast
                  renderInput={(params) => (
                    <TextField
                      label="Date"
                      placeholder={"e.g 06/06/2021"}
                      {...params}
                      onClick={(e) => setOpen(true)}
                      defaultValue={""}
                    />
                  )}
                />
              </LocalizationProvider>
            </Flex>
            <Flex left={30} flex={1}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                  label="Time"
                  value={values.shipmentTime || undefined}
                  onChange={(val) => setFieldValue("shipmentTime", val)}
                  open={openTime}
                  onOpen={() => setOpenTime(true)}
                  onClose={() => setOpenTime(false)}
                  renderInput={(params) => (
                    <TextField
                      placeholder={"e.g 12:32"}
                      {...params}
                      onClick={(e) => setOpenTime(true)}
                      defaultValue={""}
                      error={touched.shipmentTime && errors.shipmentTime}
                    />
                  )}
                />
              </LocalizationProvider>
            </Flex>
          </Flex>
        <Flex flex={1}></Flex>
      </Flex>
      )}
    </FormWrapper>
  );
}

export default ScheduleShipmentForm;
