import React, { useState } from "react";
import { FormikValues } from "formik";
import { Flex, FormWrapper } from "app/components/Input/style";
import RadioGroup from "app/components/RadioGroup";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
// import KeyboardDatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import { TimePicker } from "@mui/lab";

function ScheduleShipmentForm(props: { formik: FormikValues }) {
  const { handleChange, values, errors, touched, handleBlur, handleSubmit } =
    props.formik;
  const [value, setValue] = useState<Date | null>(new Date());
  const [open, setOpen] = useState(false);
  const [openTime, setOpenTime] = useState(false);
  return (
    <FormWrapper>
      <Flex>
        <RadioGroup
          defaultValue={values.whatToDo}
          label={"What do you want to do with the order?"}
          name={"whatToDo"}
          id={"whatToDo"}
          options={[
            {
              value: "1",
              label: "Ship Right Now",
            },
            {
              value: "2",
              label: "Ship Later",
            },
            {
              value: "3",
              label: "Move to Holding Zone",
            },
          ]}
          error={touched.whatToDo && errors.whatToDo}
          onChange={handleChange}
        />
      </Flex>
      <Flex top={20}>
        <Flex>
          <Flex flex={1}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
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
            {/* <CustomInput
              error={touched.shipmentDate && errors.shipmentDate}
              label={"Date"}
              placeholder={"e.g 06/06/2021"}
            /> */}
          </Flex>
          <Flex left={30} flex={1}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TimePicker
                label="Time"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
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
            {/* <CustomInput
              error={touched.shipmentTime && errors.shipmentTime}
              label={"Time"}
              placeholder={"e.g 12:32"}
            /> */}
          </Flex>
        </Flex>

        <Flex flex={1}></Flex>
      </Flex>
    </FormWrapper>
  );
}

export default ScheduleShipmentForm;
