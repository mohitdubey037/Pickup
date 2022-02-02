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
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import { Box, Grid } from "@material-ui/core";

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
    <Box mb={2} mt={1}>
     <Grid container spacing={2}>
     <Grid item xs={12}>
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
      </Grid>
      {singleFormValues.scheduleType === "17" && (
     
         <>
            <Grid item md={3}>
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
            </Grid>
            <Grid item md={3}>
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
            </Grid>
            </>
      )}
      
      </Grid>
    </Box>
  );
}

export default ScheduleShipmentForm;
