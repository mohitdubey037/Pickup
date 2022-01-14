import { Input, PasswordInput } from "app/components/Input";
import { Flex, Block } from "app/components/Input/style";
import { Button } from "app/components/Buttons";
import { useFormik } from "formik";
// import { passwordSchema } from "./passwordSchema";
import { Avatar, Grid } from "@material-ui/core";
import { COUNTRY, INDUSTRY } from "../../../../../constants";
import Select from "app/components/Select";

const EditCompanyDetailsForm = ({
  title = "",
  setCompanyDrawerOpen,
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
    setFieldValue,
  } = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      newPasswordConfirmation: "",
      saveCard: false,
    },
    // validationSchema: passwordSchema,
    onSubmit: (values) => saveAction(values),
  });

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
            onChange={handleChange}
            // error={touched.companyName && errors.companyName}
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
            onBlur={handleBlur}
            onChange={handleChange}
            // error={touched.address1 && errors.address1}
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
            onBlur={handleBlur}
            onChange={handleChange}
            // error={touched.address2 && errors.address2}
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
                onBlur={handleBlur}
                onChange={handleChange}
                // error={touched.city && errors.city}
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
                onBlur={handleBlur}
                onChange={handleChange}
                // error={touched.province && errors.province}
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
              options={COUNTRY}
              label={"Country"}
              value={values[title + "country"]}
              onSelect={(e) => console.log(e)}
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
            onBlur={handleBlur}
            onChange={handleChange}
            // error={touched.hstNumber && errors.hstNumber}
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
            onBlur={handleBlur}
            onChange={handleChange}
            // error={touched.businessNumber && errors.businessNumber}
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
            onBlur={handleBlur}
            onChange={handleChange}
            // error={touched.pincode && errors.pincode}
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
                  options={INDUSTRY}
                  label={"Industry"}
                  value={values[title + "industry"]}
                  onSelect={(e) => console.log(e)}
                />
              </Grid>
            </Block>
          </Flex>
          <Flex direction={"column"}>
            <Block style={{ flex: 1, textAlign: "left" }}>
              <Input
                id="employeeStrength"
                name="employeeStrength"
                onBlur={handleBlur}
                onChange={handleChange}
                // error={touched.employeeStrength && errors.employeeStrength}
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
        ></Button>
      </Flex>
    </Flex>
  );
};

export default EditCompanyDetailsForm;
