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

function ScheduleShipmentForm(props: { formik: FormikValues, index: number, disabled ?: boolean }) {

  const { formik: {values, errors, touched, setFieldValue}, disabled } = props;

  const formFieldName = `orders.${props.index}`;
  const singleFormValues = values.orders[props.index]
  const singleFormErrors = errors?.orders?.[props.index];
    const singleFormTouched = touched?.orders?.[props.index];

  const [open, setOpen] = useState(false);
  const [openTime, setOpenTime] = useState(false);

    const updateAllFieldsHandler = (name: string, value: string | number) => {
        console.log("SomeValue", value)
        values.orders.forEach((item, idx) => {
            setFieldValue(`orders.${idx}.${name}`, value)
        })
    }

  return (
    <FormWrapper>
      <Flex>
        <RadioGroup
          id={`${formFieldName}.scheduleType`}
          name={`${formFieldName}.scheduleType`}
          defaultValue={singleFormValues.scheduleType}
          value={singleFormValues.scheduleType}
          label={"What do you want to do with the order?"}
          options={!disabled ? SCHEDULE_OPTIONS : SCHEDULE_OPTIONS.map(item => ({...item, disabled: true}))}
          error={singleFormTouched?.scheduleType && singleFormErrors?.scheduleType}
          onChange={(event) => updateAllFieldsHandler("scheduleType", event.target.value)}
        />
      </Flex>
      {singleFormValues.scheduleType === "17" && (
        <Flex top={20}>
          <Flex>
            <Flex flex={1} direction="column" style={{ alignItems: "start"}}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date"
                  value={singleFormValues.shipmentDate || null}
                  onChange={(val) => updateAllFieldsHandler("shipmentDate", val)}
                  open={open}
                  disabled={disabled}
                  onOpen={() => setOpen(true)}
                  onClose={() => setOpen(false)}
                  disablePast
                  renderInput={(params) => (
                    <TextField
                      label="Date"
                      disabled={disabled}
                      placeholder={"e.g 06/06/2021"}
                      {...params}
                      onClick={(e) => !disabled && setOpen(true)}
                      defaultValue={""}
                    />
                  )}
                />
              </LocalizationProvider>
              {singleFormErrors?.shipmentDate && singleFormTouched?.shipmentDate && (
                    <p style={{ margin: 0, color: "#c94c43" }}>{singleFormErrors?.shipmentDate}</p>
                )}
            </Flex>
            <Flex left={30} flex={1} direction="column" style={{ alignItems: "start"}}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                  label="Time"
                  value={singleFormValues.shipmentTime || null}
                  onChange={(val) => updateAllFieldsHandler("shipmentTime", val)}
                  open={openTime}
                  disabled={disabled}
                  onOpen={() => setOpenTime(true)}
                  onClose={() => setOpenTime(false)}
                  renderInput={(params) => (
                    <TextField
                      placeholder={"e.g 12:32"}
                      disabled={disabled}
                      {...params}
                      onClick={(e) => !disabled && setOpenTime(true)}
                      defaultValue={""}
                      error={touched?.[`${formFieldName}.shipmentTime`] && errors?.[`${formFieldName}.shipmentTime`]}
                    />
                  )}
                />
              </LocalizationProvider>
              {singleFormErrors?.shipmentTime && singleFormTouched?.shipmentTime && (
                    <p style={{ margin: 0, color: "#c94c43" }}>{singleFormErrors?.shipmentDate}</p>
                )}
            </Flex>
          </Flex>
        <Flex flex={1}></Flex>
      </Flex>
      )}
    </FormWrapper>
  );
}

export default ScheduleShipmentForm;
