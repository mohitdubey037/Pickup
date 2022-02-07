import { Box, Grid } from "@material-ui/core";

import { Input } from "app/components/Input";
import Select from "app/components/Select";
import RadioGroup from "app/components/RadioGroup";
import { H4, H5 } from "app/components/Typography/Typography";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import {
  LOCATION_TYPES,
  BILLING_TYPES,
  PIN_CODE_MASK,
} from "../../../../../constants";
import { starimage, starImageEmpty } from "../../../../assets/Icons";
import AutoComplete from "../PersonalProfileContainer/Autocomplete";
import { FavoritesBox } from "./style";
import { Checkbox } from "app/components/Checkbox";

const ADD_TYPE = {
  origin: "Origin",
  destination: "Destination",
};

function SingleSipmentForm({
  title,
  formik,
  index,
  disabled = false,
  canBeDisabled = false,
}: {
  title: "origin" | "destination";
  formik: any;
  index: number;
  disabled?: boolean;
  canBeDisabled?: boolean;
}) {
  const { handleChange, values, errors, touched, handleBlur, setFieldValue } =
    formik;

  const formFieldName = `orders.${index}`;
  const singleFormValues = values.orders[index];

  const singleFormErrors = errors?.orders?.[index];
  const singleFormTouched = touched?.orders?.[index];

  const updateAllFieldsHandler = (
    name: string,
    value: string | number | boolean
  ) => {
    values.orders.forEach((item, idx) => {
      setFieldValue(`orders.${idx}.${name}`, value);
    });
  };

  const handler = (value) => {
    if (
      value?.location?.displayPosition?.longitude &&
      value?.location?.displayPosition?.latitude
    ) {
      setFieldValue(
        `${formFieldName}.${title}Longitude`,
        value?.location?.displayPosition?.longitude || ""
      );
      setFieldValue(
        `${formFieldName}.${title}Latitude`,
        value?.location?.displayPosition?.latitude || ""
      );
      setFieldValue(
        `${formFieldName}.${title}Country`,
        value?.location?.address?.country || ""
      );
      setFieldValue(
        `${formFieldName}.${title}ProvinceState`,
        value?.location?.address?.state ||
          value?.location?.address?.county ||
          ""
      );
      setFieldValue(
        `${formFieldName}.${title}City`,
        value?.location?.address?.city || ""
      );
      setFieldValue(
        `${formFieldName}.${title}PostalCode`,
        value?.location?.address?.postalCode || ""
      );
      // setFieldValue(`${formFieldName}.${title}AddressLine1`, value?.location?.address?.label || "");
      setFieldValue(
        `${formFieldName}.${title}AddressLine2`,
        value?.location?.address?.street || ""
      );
    } else {
      setFieldValue(`${formFieldName}.${title}Longitude`, "");
      setFieldValue(`${formFieldName}.${title}Latitude`, "");
      setFieldValue(`${formFieldName}.${title}Country`, "");
      setFieldValue(`${formFieldName}.${title}ProvinceState`, "");
      setFieldValue(`${formFieldName}.${title}City`, "");
      setFieldValue(`${formFieldName}.${title}PostalCode`, "");
      setFieldValue(`${formFieldName}.${title}AddressLine2`, "");
    }
  };

  return (
    <Box mb={8}>
      <form>
        <Grid container>
          <Grid item xs>
            <FavoritesBox>
              <H4 text={title} className="title" />

              <Box
                role="button"
                tabIndex={0}
                className="favorites"
                style={{ opacity: disabled ? 0.5 : 1 }}
                onClick={() => {
                  let val = singleFormValues[`${title}Favorite`] ? false : true;
                  !disabled && canBeDisabled
                    ? updateAllFieldsHandler(`${title}Favorite`, val)
                    : setFieldValue(`${formFieldName}.${title}Favorite`, val);
                }}
                onKeyPress={(e) => {
                  let val = singleFormValues[`${title}Favorite`] ? false : true;
                  e.key === "Enter" && canBeDisabled
                    ? updateAllFieldsHandler(`${title}Favorite`, val)
                    : setFieldValue(`${formFieldName}.${title}Favorite`, val);
                }}
              >
                {singleFormValues[`${title}Favorite`] ? (
                  <>
                    <img src={starimage} alt="" className="icon" />
                    <H5 text="Added to Favorites" className="label" />
                  </>
                ) : (
                  <>
                    <img src={starImageEmpty} alt="" className="icon" />
                    <H5 text="Add to Favorites" className="label" />
                  </>
                )}
              </Box>
            </FavoritesBox>
          </Grid>

          {index > 0 && (
            <Grid>
              <Checkbox
                label="Use same address as of the first order"
                onChange={() =>
                  setFieldValue(
                    `${formFieldName}.hasSame${ADD_TYPE[title]}`,
                    !singleFormValues[`hasSame${ADD_TYPE[title]}`]
                  )
                }
              />
            </Grid>
          )}
        </Grid>

        <RadioGroup
          defaultValue={
            singleFormValues?.[`${title}BillingType`]
              ? String(singleFormValues?.[`${title}BillingType`] - 1)
              : "0"
          }
          value={
            singleFormValues?.[`${title}BillingType`]
              ? String(singleFormValues?.[`${title}BillingType`] - 1)
              : "0"
          }
          name={`${formFieldName}.${title}BillingType`}
          // onChange={(e) => setFieldValue(`${formFieldName}.${title}BillingType`, Number(e.target.value) + 1)}
          onChange={(event) =>
            canBeDisabled
              ? updateAllFieldsHandler(
                  `${title}BillingType`,
                  Number(event.target.value) + 1
                )
              : setFieldValue(
                  `${formFieldName}.${title}BillingType`,
                  Number(event.target.value) + 1
                )
          }
          options={
            !disabled
              ? BILLING_TYPES
              : BILLING_TYPES.map((item) => ({ ...item, disabled: true }))
          }
        />

        {!disabled && (
          <>
            <GridContainer container spacing={3}>
              <Grid item lg={4} sm={6} xs={12}>
                <Select
                  id={`${formFieldName}.${title}LocationType`}
                  name={`${formFieldName}.${title}LocationType`}
                  options={LOCATION_TYPES}
                  label={"Location type"}
                  onSelect={(event) =>
                    canBeDisabled
                      ? updateAllFieldsHandler(
                          `${title}LocationType`,
                          event.target.value
                        )
                      : handleChange(event)
                  }
                  value={singleFormValues[`${title}LocationType`]}
                  disabled={disabled}
                  required
                />
              </Grid>
            </GridContainer>
            <GridContainer container spacing={2}>
              {singleFormValues[`${title}BillingType`] === 2 && (
                <Grid item lg={4} sm={6} xs={12}>
                  <Input
                    id={`${formFieldName}.${title}CompanyName`}
                    name={`${formFieldName}.${title}CompanyName`}
                    label={"Company Name"}
                    initValue={singleFormValues[`${title}CompanyName`]}
                    value={singleFormValues[`${title}CompanyName`]}
                    disabled={disabled}
                    placeholder={"Example Company"}
                    onChange={(event) =>
                      canBeDisabled
                        ? updateAllFieldsHandler(
                            `${title}CompanyName`,
                            event.target.value
                          )
                        : handleChange(event)
                    }
                    onBlur={handleBlur}
                    error={
                      singleFormTouched?.[`${title}CompanyName`] &&
                      singleFormErrors?.[`${title}CompanyName`]
                    }
                    validate
                    required
                  />
                </Grid>
              )}
              <Grid item lg={4} sm={6} xs={12}>
                <Input
                  id={`${formFieldName}.${title}FirstName`}
                  name={`${formFieldName}.${title}FirstName`}
                  initValue={singleFormValues[`${title}FirstName`]}
                  value={singleFormValues[`${title}FirstName`]}
                  disabled={disabled}
                  label={"First Name"}
                  placeholder={"John"}
                  onChange={(event) =>
                    canBeDisabled
                      ? updateAllFieldsHandler(
                          `${title}FirstName`,
                          event.target.value
                        )
                      : handleChange(event)
                  }
                  onBlur={handleBlur}
                  error={
                    singleFormTouched?.[`${title}FirstName`] &&
                    singleFormErrors?.[`${title}FirstName`]
                  }
                  validate
                  required
                />
              </Grid>
              <Grid item lg={4} sm={6} xs={12}>
                <Input
                  id={`${formFieldName}.${title}LastName`}
                  name={`${formFieldName}.${title}LastName`}
                  label={"Last Name"}
                  initValue={singleFormValues[`${title}LastName`]}
                  value={singleFormValues[`${title}LastName`]}
                  disabled={disabled}
                  placeholder={"Doe"}
                  onChange={(event) =>
                    canBeDisabled
                      ? updateAllFieldsHandler(
                          `${title}LastName`,
                          event.target.value
                        )
                      : handleChange(event)
                  }
                  onBlur={handleBlur}
                  error={
                    singleFormTouched?.[`${title}LastName`] &&
                    singleFormErrors?.[`${title}LastName`]
                  }
                  validate
                  required
                />
              </Grid>
              <Grid item lg={4} sm={6} xs={12}>
                <AutoComplete
                  id={`${formFieldName}.${title}AddressLine1`}
                  name={`${formFieldName}.${title}AddressLine1`}
                  label={"Address Line 1"}
                  initValue={singleFormValues[`${title}AddressLine1`]}
                  value={singleFormValues[`${title}AddressLine1`]}
                  error={
                    singleFormTouched?.[`${title}AddressLine1`] &&
                    singleFormErrors?.[`${title}AddressLine1`]
                  }
                  placeholder={"123 Address Street"}
                  setFieldValue={setFieldValue}
                  onChange={handleChange}
                  disabled={disabled}
                  handleBlur={handleBlur}
                  onSelect={handler}
                />
              </Grid>
              <Grid item lg={4} sm={6} xs={12}>
                <Input
                  id={`${formFieldName}.${title}AddressLine2`}
                  name={`${formFieldName}.${title}AddressLine2`}
                  label={"Address Line 2"}
                  placeholder={"123 Address Street"}
                  initValue={singleFormValues[`${title}AddressLine2`]}
                  value={singleFormValues[`${title}AddressLine2`]}
                  disabled={disabled}
                  onChange={(event) =>
                    canBeDisabled
                      ? updateAllFieldsHandler(
                          `${title}AddressLine2`,
                          event.target.value
                        )
                      : handleChange(event)
                  }
                  onBlur={handleBlur}
                  error={
                    singleFormTouched?.[`${title}AddressLine2`] &&
                    singleFormErrors?.[`${title}AddressLine2`]
                  }
                  validate
                  required
                />
              </Grid>
              <Grid item lg={4} sm={6} xs={12}>
                <Input
                  id={`${formFieldName}.${title}City`}
                  name={`${formFieldName}.${title}City`}
                  label={"City"}
                  placeholder={"eg. Toronto"}
                  initValue={singleFormValues[`${title}City`]}
                  value={singleFormValues[`${title}City`]}
                  disabled={disabled}
                  onChange={(event) =>
                    canBeDisabled
                      ? updateAllFieldsHandler(
                          `${title}City`,
                          event.target.value
                        )
                      : handleChange(event)
                  }
                  onBlur={handleBlur}
                  error={
                    singleFormTouched?.[`${title}City`] &&
                    singleFormErrors?.[`${title}City`]
                  }
                  validate
                  required
                />
              </Grid>
              <Grid item lg={4} sm={6} xs={12}>
                <Input
                  id={`${formFieldName}.${title}PostalCode`}
                  name={`${formFieldName}.${title}PostalCode`}
                  label={"Postal Code"}
                  initValue={singleFormValues[`${title}PostalCode`]}
                  value={singleFormValues[`${title}PostalCode`]}
                  disabled={disabled}
                  placeholder={"ABC 123"}
                  onChange={(event) =>
                    canBeDisabled
                      ? updateAllFieldsHandler(
                          `${title}PostalCode`,
                          event.target.value
                        )
                      : handleChange(event)
                  }
                  onBlur={handleBlur}
                  error={
                    singleFormTouched?.[`${title}PostalCode`] &&
                    singleFormErrors?.[`${title}PostalCode`]
                  }
                  validate
                  required
                  type="mask"
                  maskProps={{
                    mask: PIN_CODE_MASK,
                    maskPlaceholder: null,
                  }}
                />
              </Grid>
              <Grid item lg={4} sm={6} xs={12}>
                <Input
                  id={`${formFieldName}.${title}ProvinceState`}
                  name={`${formFieldName}.${title}ProvinceState`}
                  label={"Province/State"}
                  placeholder={"eg. Ontario"}
                  initValue={singleFormValues[`${title}ProvinceState`]}
                  value={singleFormValues[`${title}ProvinceState`]}
                  disabled={disabled}
                  onChange={(event) =>
                    canBeDisabled
                      ? updateAllFieldsHandler(
                          `${title}ProvinceState`,
                          event.target.value
                        )
                      : handleChange(event)
                  }
                  onBlur={handleBlur}
                  error={
                    singleFormTouched?.[`${title}ProvinceState`] &&
                    singleFormErrors?.[`${title}ProvinceState`]
                  }
                  validate
                  required
                />
              </Grid>
              <Grid item lg={4} sm={6} xs={12}>
                <Input
                  id={`${formFieldName}.${title}Country`}
                  name={`${formFieldName}.${title}Country`}
                  label={"Country"}
                  initValue={singleFormValues[`${title}Country`]}
                  value={singleFormValues[`${title}Country`]}
                  placeholder={"eg. Canada"}
                  disabled={disabled}
                  onChange={(event) =>
                    canBeDisabled
                      ? updateAllFieldsHandler(
                          `${title}Country`,
                          event.target.value
                        )
                      : handleChange(event)
                  }
                  onBlur={handleBlur}
                  error={
                    singleFormTouched?.[`${title}Country`] &&
                    singleFormErrors?.[`${title}Country`]
                  }
                  validate
                  required
                />
              </Grid>
              <Grid item lg={4} sm={6} xs={12}>
                <Input
                  id={`${formFieldName}.${title}ContactNumber`}
                  name={`${formFieldName}.${title}ContactNumber`}
                  label={"Contact Number"}
                  initValue={singleFormValues[`${title}ContactNumber`]}
                  value={singleFormValues[`${title}ContactNumber`]}
                  placeholder={"+1 (999)-999-9999"}
                  disabled={disabled}
                  onChange={(event) =>
                    canBeDisabled
                      ? updateAllFieldsHandler(
                          `${title}ContactNumber`,
                          event.target.value
                        )
                      : handleChange(event)
                  }
                  onBlur={handleBlur}
                  error={
                    singleFormTouched?.[`${title}ContactNumber`] &&
                    singleFormErrors?.[`${title}ContactNumber`]
                  }
                  validate
                  required
                />
              </Grid>
              <Grid item lg={4} sm={6} xs={12}>
                <Input
                  id={`${formFieldName}.${title}AlternateContactNumber`}
                  name={`${formFieldName}.${title}AlternateContactNumber`}
                  initValue={singleFormValues[`${title}AlternateContactNumber`]}
                  value={singleFormValues[`${title}AlternateContactNumber`]}
                  label={"Alternate Contact Number"}
                  placeholder={"+1 (999)-999-9999"}
                  disabled={disabled}
                  onChange={(event) =>
                    canBeDisabled
                      ? updateAllFieldsHandler(
                          `${title}AlternateContactNumber`,
                          event.target.value
                        )
                      : handleChange(event)
                  }
                  onBlur={handleBlur}
                  error={
                    singleFormTouched?.[`${title}AlternateContactNumber`] &&
                    singleFormErrors?.[`${title}AlternateContactNumber`]
                  }
                  validate
                  required
                />
              </Grid>
              <Grid item lg={4} sm={6} xs={12}>
                <Input
                  id={`${formFieldName}.${title}EmailAddress`}
                  name={`${formFieldName}.${title}EmailAddress`}
                  label={"Email Address"}
                  initValue={singleFormValues[`${title}EmailAddress`]}
                  value={singleFormValues[`${title}EmailAddress`]}
                  placeholder={"johndoe@pickups.com"}
                  disabled={disabled}
                  onChange={(event) =>
                    canBeDisabled
                      ? updateAllFieldsHandler(
                          `${title}EmailAddress`,
                          event.target.value
                        )
                      : handleChange(event)
                  }
                  onBlur={handleBlur}
                  error={
                    singleFormTouched?.[`${title}EmailAddress`] &&
                    singleFormErrors?.[`${title}EmailAddress`]
                  }
                  validate
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  id={`${formFieldName}.${title}AdditionalNotes`}
                  name={`${formFieldName}.${title}AdditionalNotes`}
                  label={"Additional Notes"}
                  placeholder={"Add any notes here"}
                  onChange={(event) =>
                    canBeDisabled
                      ? updateAllFieldsHandler(
                          `${title}AdditionalNotes`,
                          event.target.value
                        )
                      : handleChange(event)
                  }
                  initValue={singleFormValues[`${title}AdditionalNotes`]}
                  disabled={disabled}
                  value={singleFormValues[`${title}AdditionalNotes`]}
                  onBlur={handleBlur}
                  error={
                    singleFormTouched?.[`${title}AdditionalNotes`] &&
                    singleFormErrors?.[`${title}AdditionalNotes`]
                  }
                  validate
                  required
                />
              </Grid>
            </GridContainer>
          </>
        )}
      </form>
    </Box>
  );
}
export default SingleSipmentForm;
