import { useState } from "react";
import { Box, Grid } from "@material-ui/core";

import { Input } from "app/components/Input";
import SelectNew from "app/components/Select/SelectNew";
import RadioGroup from "app/components/RadioGroup";
import { H4, H5 } from "app/components/Typography/Typography";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import {
  LOCATION_TYPES,
  BILLING_TYPES,
  PIN_CODE_MASK,
  PHONE_NO_MASK,
} from "../../../../../constants";
import {
  starimage,
  starImageEmpty,
  tooltipIcon,
} from "../../../../assets/Icons";
import AutoComplete from "../PersonalProfileContainer/Autocomplete";
import { FavoritesBox } from "./style";
import { Checkbox } from "app/components/Checkbox";
import CustomTooltip from "app/components/Tooltip/CustomTooltip";

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
  sameDetails,
  hasSameDetails,
}: {
  title: "origin" | "destination";
  formik: any;
  index: number;
  disabled?: boolean;
  canBeDisabled?: boolean;
  sameDetails?: number[];
  hasSameDetails: any;
}) {
  const { handleChange, values, errors, touched, handleBlur, setFieldValue } =
    formik;

  const [timer, setTimer] = useState<any>({});

  const formFieldName = `orders.${index}`;
  const singleFormValues = values.orders[index];

  const singleFormErrors = errors?.orders?.[index];
  const singleFormTouched = touched?.orders?.[index];

  const onChangeHandler = (event: any, name: string) => {
    handleChange(event);

    if (canBeDisabled) {
      timer[name] && clearTimeout(timer[name]);
      let temp = timer;
      temp[name] = setTimeout(() => {
        updateAllFieldsHandler(name, event.target.value);
      }, 1000);
      setTimer(() => temp);
    }
  };

  const updateAllFieldsHandler = (
    name: string,
    value: string | number | boolean
  ) => {
    sameDetails &&
      sameDetails[`hasSame${ADD_TYPE[title]}`].forEach((item) => {
        setFieldValue(`orders.${item}.${name}`, value);
      });
  };

  const handler = (value) => {
    let temp = {};
    if (
      value?.location?.displayPosition?.longitude &&
      value?.location?.displayPosition?.latitude
    ) {
      let tempCountry = "",
        tempProvinceState = "";
      value?.location?.address?.additionalData.forEach((ele) => {
        if (ele.key === "CountryName" && !tempCountry) {
          tempCountry = ele.value;
        }
        if (
          (ele.key === "StateName" || ele.key === "CountyName") &&
          !tempProvinceState
        ) {
          tempProvinceState = ele.value;
        }
      });

      temp[`${title}Longitude`] =
        value?.location?.displayPosition?.longitude || "";
      temp[`${title}Latitude`] =
        value?.location?.displayPosition?.latitude || "";
      temp[`${title}Country`] =
        tempCountry || value?.location?.address?.country || "";
      temp[`${title}ProvinceState`] =
        tempProvinceState ||
        value?.location?.address?.state ||
        value?.location?.address?.county ||
        "";
      temp[`${title}City`] = value?.location?.address?.city || "";
      temp[`${title}PostalCode`] = value?.location?.address?.postalCode || "";
      temp[`${title}AddressLine1`] = value?.location?.address?.label || "";
      temp[`${title}AddressLine2`] = value?.location?.address?.street || "";
    } else {
      temp[`${title}Longitude`] = "";
      temp[`${title}Latitude`] = "";
      temp[`${title}Country`] = "";
      temp[`${title}ProvinceState`] = "";
      temp[`${title}City`] = "";
      temp[`${title}PostalCode`] = "";
      temp[`${title}AddressLine2`] = "";
    }

    let updatedOrders = values.orders;
    updatedOrders[index] = {
      ...updatedOrders[index],
      ...temp,
    };

    if (canBeDisabled) {
      sameDetails &&
        sameDetails[`hasSame${ADD_TYPE[title]}`].forEach((item) => {
          updatedOrders[item] = {
            ...updatedOrders[item],
            ...temp,
          };
        });
    }
    setFieldValue(`orders`, updatedOrders);
  };

  return (
    <Box mb={8}>
      <form>
        <Grid container>
          <Grid item xs>
            <FavoritesBox>
              <H4 text={title}  mr={16} fontFamily="bold" textTransform="capitalize"/>

              <Box
                role="button"
                tabIndex={0}
                className="favorites"
                style={{ opacity: disabled ? 0.5 : 1 }}
                onClick={() => {
                  if (!disabled) {
                    let val = singleFormValues[`${title}Favorite`]
                      ? false
                      : true;

                    setFieldValue(`${formFieldName}.${title}Favorite`, val);
                    canBeDisabled &&
                      updateAllFieldsHandler(`${title}Favorite`, val);
                  }
                }}
                onKeyPress={(e) => {
                  if (!disabled && e.key === "Enter") {
                    let val = singleFormValues[`${title}Favorite`]
                      ? false
                      : true;

                    setFieldValue(`${formFieldName}.${title}Favorite`, val);
                    canBeDisabled &&
                      updateAllFieldsHandler(`${title}Favorite`, val);
                  }
                }}
              >
                {singleFormValues[`${title}Favorite`] ? (
                  <img src={starimage} alt="" className="icon" />
                ) : (
                  <img src={starImageEmpty} alt="" className="icon" />
                )}
                <H5 text="Add to Favorites" className="label" mr={6} color="#878787" />
                <CustomTooltip
                  text="Your location will be saved once you have confirmed your order. 
                        You can access them later from Favourite Locations."
                  content={<img src={tooltipIcon} alt="" />}
                  className="tooltip"
                />
              </Box>
            </FavoritesBox>
          </Grid>

          {index > 0 && (
            <Grid>
              <Checkbox
                label="Use same address as of the first order"
                onChange={() =>
                  hasSameDetails(index, `hasSame${ADD_TYPE[title]}`)
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
          onChange={(e) => {
            setFieldValue(
              `${formFieldName}.${title}BillingType`,
              Number(e.target.value) + 1
            );
            canBeDisabled &&
              updateAllFieldsHandler(
                `${title}BillingType`,
                Number(e.target.value) + 1
              );
          }}
          options={
            !disabled
              ? BILLING_TYPES
              : BILLING_TYPES.map((item) => ({ ...item, disabled: true }))
          }
        />

        {!disabled && (
          <>
            <GridContainer container spacing={2}>
              <Grid item lg={4} sm={6} xs={12}>
                <SelectNew
                  id={`${formFieldName}.${title}LocationType`}
                  name={`${formFieldName}.${title}LocationType`}
                  label={"Location Type"}
                  placeholder={"Select Location Type"}
                  options={LOCATION_TYPES}
                  value={singleFormValues[`${title}LocationType`]}
                  onChange={(e) => onChangeHandler(e, `${title}LocationType`)}
                  error={
                    singleFormTouched?.[`${title}LocationType`] &&
                    singleFormErrors?.[`${title}LocationType`]
                  }
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
                    onChange={(e) => onChangeHandler(e, `${title}CompanyName`)}
                    onBlur={handleBlur}
                    error={
                      singleFormTouched?.[`${title}CompanyName`] &&
                      singleFormErrors?.[`${title}CompanyName`]
                    }
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
                  onChange={(e) => onChangeHandler(e, `${title}FirstName`)}
                  onBlur={handleBlur}
                  error={
                    singleFormTouched?.[`${title}FirstName`] &&
                    singleFormErrors?.[`${title}FirstName`]
                  }
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
                  onChange={(e) => onChangeHandler(e, `${title}LastName`)}
                  onBlur={handleBlur}
                  error={
                    singleFormTouched?.[`${title}LastName`] &&
                    singleFormErrors?.[`${title}LastName`]
                  }
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
                  onChange={(e) => onChangeHandler(e, `${title}AddressLine2`)}
                  onBlur={handleBlur}
                  error={
                    singleFormTouched?.[`${title}AddressLine2`] &&
                    singleFormErrors?.[`${title}AddressLine2`]
                  }
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
                  onChange={(e) => onChangeHandler(e, `${title}City`)}
                  onBlur={handleBlur}
                  error={
                    singleFormTouched?.[`${title}City`] &&
                    singleFormErrors?.[`${title}City`]
                  }
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
                  onChange={(e) => onChangeHandler(e, `${title}PostalCode`)}
                  onBlur={handleBlur}
                  error={
                    singleFormTouched?.[`${title}PostalCode`] &&
                    singleFormErrors?.[`${title}PostalCode`]
                  }
                  required
                  type="mask"
                  maskProps={PIN_CODE_MASK}
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
                  onChange={(e) => onChangeHandler(e, `${title}ProvinceState`)}
                  onBlur={handleBlur}
                  error={
                    singleFormTouched?.[`${title}ProvinceState`] &&
                    singleFormErrors?.[`${title}ProvinceState`]
                  }
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
                  onChange={(e) => onChangeHandler(e, `${title}Country`)}
                  onBlur={handleBlur}
                  error={
                    singleFormTouched?.[`${title}Country`] &&
                    singleFormErrors?.[`${title}Country`]
                  }
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
                  onChange={(e) => onChangeHandler(e, `${title}ContactNumber`)}
                  onBlur={handleBlur}
                  error={
                    singleFormTouched?.[`${title}ContactNumber`] &&
                    singleFormErrors?.[`${title}ContactNumber`]
                  }
                  required
                  type="mask"
                  maskProps={PHONE_NO_MASK}
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
                  onChange={(e) =>
                    onChangeHandler(e, `${title}AlternateContactNumber`)
                  }
                  onBlur={handleBlur}
                  error={
                    singleFormTouched?.[`${title}AlternateContactNumber`] &&
                    singleFormErrors?.[`${title}AlternateContactNumber`]
                  }
                  required
                  type="mask"
                  maskProps={PHONE_NO_MASK}
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
                  onChange={(e) => onChangeHandler(e, `${title}EmailAddress`)}
                  onBlur={handleBlur}
                  error={
                    singleFormTouched?.[`${title}EmailAddress`] &&
                    singleFormErrors?.[`${title}EmailAddress`]
                  }
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  id={`${formFieldName}.${title}AdditionalNotes`}
                  name={`${formFieldName}.${title}AdditionalNotes`}
                  label={"Additional Notes"}
                  placeholder={"Add any notes here"}
                  onChange={(e) =>
                    onChangeHandler(e, `${title}AdditionalNotes`)
                  }
                  initValue={singleFormValues[`${title}AdditionalNotes`]}
                  disabled={disabled}
                  value={singleFormValues[`${title}AdditionalNotes`]}
                  onBlur={handleBlur}
                  error={
                    singleFormTouched?.[`${title}AdditionalNotes`] &&
                    singleFormErrors?.[`${title}AdditionalNotes`]
                  }
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
