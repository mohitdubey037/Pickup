import React, { FC } from "react";
import moment from "moment";
import { useFormik, validateYupSchema, yupToFormErrors } from "formik";
import { Grid } from "@material-ui/core";

import { Button } from "app/components/Buttons";
import { DrawerFooter, DrawerInnerContent } from "app/components/Drawer/style";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import DatePickerInput from "app/components/Input/DatePickerInput";
import TimePickerInput from "app/components/Input/TimePickerInput";
import RadioGroup from "app/components/RadioGroup";
import { SCHEDULE_OPTIONS } from "../../../../../constants";
import { getSingleDate } from "../SignleShipmentContainer/helper";
import { scheduleShipmentFormSchema } from "./helper";

interface ScheduleShipmentsDrawerProps {
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleSchedule: (values) => void;
}

const ScheduleShipmentsDrawer: FC<ScheduleShipmentsDrawerProps> = ({
  setDrawerOpen,
  handleSchedule,
}) => {
  const checkScheduleTime = () => {
    touched?.shipmentDate !== true &&
      setFieldTouched("shipmentDate", true, true);
    touched?.shipmentTime !== true &&
      setFieldTouched("shipmentTime", true, true);
  };

  const {
    values,
    handleChange,
    errors,
    touched,
    setFieldTouched,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      scheduleType: "",
      shipmentDate: "",
      shipmentTime: "",
    },
    validate: (values: any) => {
      try {
        validateYupSchema(values, scheduleShipmentFormSchema, true, values);
      } catch (err) {
        return yupToFormErrors(err);
      }
    },
    onSubmit: (values) => {
      const data = {
        type: values.scheduleType,
        orderAt: getSingleDate(values.shipmentDate, values.shipmentTime),
      };
      handleSchedule(data);
    },
  });

  return (
    <>
      <DrawerInnerContent>
        <GridContainer container spacing={2}>
          <Grid item xs={12}>
            <RadioGroup
              id="scheduleType"
              name="scheduleType"
              defaultValue={values.scheduleType}
              value={values.scheduleType}
              label="When are you going to ship this?"
              options={SCHEDULE_OPTIONS.slice(0, 2)}
              error={touched?.scheduleType && errors?.scheduleType}
              onChange={handleChange}
              required
            />
          </Grid>
          {values.scheduleType === "17" && (
            <>
              <Grid item xs={12}>
                <DatePickerInput
                  label="Date"
                  placeholder={"e.g 06/06/2021"}
                  minDate={moment().toDate()}
                  maxDate={moment().add(120, "hours").toDate()}
                  value={values.shipmentDate || null}
                  onChange={(val) => {
                    checkScheduleTime();
                    setFieldValue("shipmentDate", val);
                  }}
                  error={touched?.shipmentDate && errors?.shipmentDate}
                  disablePast={true}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TimePickerInput
                  label="Time"
                  value={values.shipmentTime || null}
                  onChange={(val) => {
                    checkScheduleTime();
                    setFieldValue("shipmentTime", val);
                  }}
                  error={touched?.shipmentTime && errors?.shipmentTime}
                  placeholder={"e.g 12:32"}
                  required
                />
              </Grid>
            </>
          )}
        </GridContainer>
      </DrawerInnerContent>

      <DrawerFooter>
        <Button
          secondary
          onClick={() => setDrawerOpen(false)}
          label="Cancel"
          size="medium"
        />
        <Button label="Save" onClick={handleSubmit} size="medium" />
      </DrawerFooter>
    </>
  );
};

export default ScheduleShipmentsDrawer;
