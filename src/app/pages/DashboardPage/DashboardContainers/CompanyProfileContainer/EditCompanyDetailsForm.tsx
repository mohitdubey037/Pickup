import { Input, PasswordInput } from "app/components/Input";
import { Flex, Block } from "app/components/Input/style";
import { Button } from "app/components/Buttons";
import { useFormik } from "formik";
// import { passwordSchema } from "./passwordSchema";
import { Avatar, Grid } from "@material-ui/core";
import { COUNTRY_TEXT, INDUSTRY_TEXT } from "../../../../../constants";
import Select from "app/components/Select";
import { editCompanySchema } from "./CompanyProfileSchema";
import { useEffect, useState } from "react";
import { ColleagueDetailsType } from "./types";

const EditCompanyDetailsForm = ({
  title = "",
  setCompanyDrawerOpen,
  companyDetails,
  saveAction,
  enableSave = false,
  submitButtonLabel = "Save",
}) => {
  const {
    values,
    handleChange,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    isValid,
  } = useFormik({
    initialValues: {
      companyName: companyDetails?.companyName || "",
      businessNumber: companyDetails?.businessNumber || "",
      industry: companyDetails?.industry || "",
      employeeStrength: companyDetails?.employeeStrength || "",
      address1: companyDetails?.addressLine1 || "",
      address2: companyDetails?.addressLine2 || "",
      city: companyDetails?.city || "",
      pincode: companyDetails?.pincode || "",
      province: companyDetails?.province || "",
      country: companyDetails?.country || "",
      hstNumber: companyDetails?.hstNumber || "",
    },
    validationSchema: editCompanySchema,
    onSubmit: (values) => saveAction(values),
  });
  // useEffect(() => {
  //   console.log("touched", touched);
  //   console.log("errors", errors);
  // }, [touched, errors]);
  useEffect(() => {
    console.log(values);
  }, [values]);
  return (
    <Flex direction="column" style={{ height: "100%", width: "540px" }}>
      <div>
        <Flex
          style={{
            marginBottom: 20,
          }}
        >
          <Avatar
            style={{
              width: 86,
              height: 86,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <img src="https://i.pravatar.cc/300" width={86} />
          </Avatar>
        </Flex>
        <Flex
          style={{
            marginBottom: 20,
          }}
        >
          <Input
            id="companyName"
            name="companyName"
            onBlur={handleBlur}
            value={values.companyName}
            initValue={values.companyName}
            onChange={handleChange}
            error={touched.companyName && errors?.companyName?.toString()}
            // error={touched?.companyName && errors.companyName}
            label="Company Name"
            placeholder={"Torinit"}
          />
        </Flex>
        <Flex
          style={{
            marginBottom: 20,
          }}
        >
          <Input
            id="address1"
            name="address1"
            value={values.address1}
            initValue={values.address1}
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.address1 && errors?.address1?.toString()}
            label="Adresss Line 1"
            placeholder={"100 Bond Street"}
          />
        </Flex>
        <Flex
          style={{
            marginBottom: 20,
          }}
        >
          <Input
            id="address2"
            name="address2"
            value={values.address2}
            initValue={values.address2}
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.address2 && errors?.address2?.toString()}
            label="Address Line 2"
            placeholder={"123 Avebue"}
          />
        </Flex>
        <Flex style={{ marginBottom: 20 }}>
          <Flex direction={"column"}>
            <Block style={{ flex: 1, textAlign: "left" }}>
              <Input
                id="city"
                name="city"
                value={values.city}
                initValue={values.city}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.city && errors?.city?.toString()}
                label="City"
                placeholder={"Toronto"}
              />
            </Block>
          </Flex>
          <Flex direction={"column"}>
            <Block style={{ flex: 1, textAlign: "left" }}>
              <Input
                id="province"
                name="province"
                value={values.province}
                initValue={values.province}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.province && errors?.province?.toString()}
                label="Province"
                placeholder={"Ontario"}
              />
            </Block>
          </Flex>
        </Flex>
        <Flex style={{ marginBottom: 20 }}>
          <Grid item xs={11}>
            <Select
              id="country"
              name="country"
              options={COUNTRY_TEXT}
              label={"Country"}
              value={values["country"]}
              onSelect={handleChange}
            />
          </Grid>
        </Flex>
        <Flex
          style={{
            marginBottom: 20,
          }}
        >
          <Input
            id="hstNumber"
            name="hstNumber"
            value={values.hstNumber}
            initValue={values.hstNumber}
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.hstNumber && errors?.hstNumber?.toString()}
            label="HST Number"
            placeholder={"1245567842185"}
          />
        </Flex>
        <Flex
          style={{
            marginBottom: 20,
          }}
        >
          <Input
            id="businessNumber"
            name="businessNumber"
            value={values.businessNumber}
            initValue={values.businessNumber}
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.businessNumber && errors?.businessNumber?.toString()}
            label="Business Number"
            placeholder={"5421369"}
          />
        </Flex>
        <Flex
          style={{
            marginBottom: 20,
          }}
        >
          <Input
            id="pincode"
            name="pincode"
            value={values.pincode}
            initValue={values.pincode}
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.pincode && errors?.pincode?.toString()}
            label="Pincode"
            placeholder={"554787"}
          />
        </Flex>
        <Flex style={{ marginBottom: 20 }}>
          <Flex direction={"column"}>
            <Block style={{ flex: 1, textAlign: "left" }}>
              <Grid item xs={11}>
                <Select
                  id="industry"
                  name="industry"
                  options={INDUSTRY_TEXT}
                  label={"Industry"}
                  value={values[title + "industry"]}
                  onSelect={handleChange}
                />
              </Grid>
            </Block>
          </Flex>
          <Flex direction={"column"}>
            <Block style={{ flex: 1, textAlign: "left" }}>
              <Input
                id="employeeStrength"
                name="employeeStrength"
                value={values.employeeStrength}
                initValue={values.employeeStrength}
                onBlur={handleBlur}
                onChange={handleChange}
                error={
                  touched.employeeStrength &&
                  errors?.employeeStrength?.toString()
                }
                label="Employee Strength"
                placeholder={"32"}
              />
            </Block>
          </Flex>
        </Flex>
      </div>
      <Flex
        direction="row"
        justifyContent={"space-between"}
        style={{ alignItems: "flex-end" }}
      >
        <Button
          secondary
          style={{ width: "fit-content", minWidth: "150px" }}
          onClick={() => setCompanyDrawerOpen(false)}
          label="Cancel"
        ></Button>
        <Button
          style={{ width: "fit-content", minWidth: "150px" }}
          label={submitButtonLabel}
          onClick={handleSubmit}
          disabled={!isValid}
        ></Button>
      </Flex>
    </Flex>
  );
};

export default EditCompanyDetailsForm;
