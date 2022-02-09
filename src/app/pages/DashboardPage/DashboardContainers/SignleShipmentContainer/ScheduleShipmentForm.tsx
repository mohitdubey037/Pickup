import moment from "moment";
import { FormikValues } from "formik";
import { Box, Grid } from "@material-ui/core";

import RadioGroup from "app/components/RadioGroup";
import DatePickerInput from "app/components/Input/DatePickerInput";
import TimePickerInput from "app/components/Input/TimePickerInput";
import { SCHEDULE_OPTIONS } from "../../../../../constants";

function ScheduleShipmentForm(props: {
  formik: FormikValues;
  index: number;
  disabled?: boolean;
  canBeDisabled?: boolean;
  sameDetails?: number[];
}) {
  const {
    formik: { values, errors, touched, setFieldTouched, setFieldValue },
    index,
    disabled = false,
    canBeDisabled = false,
    sameDetails,
  } = props;

  const formFieldName = `orders.${index}`;
  const singleFormValues = values.orders[index];
  const singleFormErrors = errors?.orders?.[index];
  const singleFormTouched = touched?.orders?.[index];

  const updateAllFieldsHandler = (name: string, value: string | number) => {
    sameDetails &&
      sameDetails[`hasSameSchedule`].forEach((item) => {
        setFieldValue(`orders.${item}.${name}`, value);
      });
  };

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
            options={
              !disabled
                ? SCHEDULE_OPTIONS
                : SCHEDULE_OPTIONS.map((item) => ({ ...item, disabled: true }))
            }
            error={
              singleFormTouched?.scheduleType && singleFormErrors?.scheduleType
            }
            onChange={(e) => {
              setFieldValue(`${formFieldName}.scheduleType`, e.target.value);
              canBeDisabled &&
                updateAllFieldsHandler(`scheduleType`, e.target.value);
            }}
            required
          />
        </Grid>
        {singleFormValues.scheduleType === "17" && (
          <>
            <Grid item md={3}>
              <DatePickerInput
                label="Date"
                placeholder={"e.g 06/06/2021"}
                minDate={moment().toDate()}
                maxDate={moment().add(120, "hours").toDate()}
                value={singleFormValues.shipmentDate || null}
                onChange={(val) => {
                  singleFormTouched?.shipmentDate !== true &&
                    setFieldTouched(
                      `${formFieldName}.shipmentDate`,
                      true,
                      true
                    );
                  setFieldValue(`${formFieldName}.shipmentDate`, val);
                  canBeDisabled && updateAllFieldsHandler(`shipmentDate`, val);
                }}
                disabled={disabled}
                error={
                  singleFormTouched?.shipmentDate &&
                  singleFormErrors?.shipmentDate
                }
                disablePast={true}
                required
              />
            </Grid>
            <Grid item md={3}>
              <TimePickerInput
                label="Time"
                value={singleFormValues.shipmentTime || null}
                onChange={(val) => {
                  singleFormTouched?.shipmentTime !== true &&
                    setFieldTouched(
                      `${formFieldName}.shipmentTime`,
                      true,
                      true
                    );
                  setFieldValue(`${formFieldName}.shipmentTime`, val);
                  canBeDisabled && updateAllFieldsHandler(`shipmentTime`, val);
                }}
                disabled={disabled}
                error={
                  singleFormTouched?.shipmentTime &&
                  singleFormErrors?.shipmentTime
                }
                placeholder={"e.g 12:32"}
                required
              />
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
}

export default ScheduleShipmentForm;
