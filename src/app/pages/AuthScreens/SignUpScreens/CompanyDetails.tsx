import { RouteComponentProps, useParams } from "@reach/router";
import { useFormik } from "formik";
import {
  SignUpWrapper,
  FormContent,
  FormWrapper,
  LogoImage,
  Row,
  Header,
} from "../style";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Buttons";
import { companyDetailsSchema } from "./signUpSchemas";

const CompanyDetails = ({ navigate, path }: RouteComponentProps) => {
  const { userId } = useParams();
  const {
    handleChange,
    values: { email },
    errors,
    touched,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: companyDetailsSchema,
    onSubmit: () => {},
  });

  return (
    <SignUpWrapper>
      <LogoImage />
      <FormWrapper>
        <FormContent>
          <Header>COMPANY DETAILS</Header>
          <Row>
            <Input
              id={"firstName"}
              name={"firstName"}
              label="Fist Name"
              placeholder="Start typing"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.firstName && errors.firstName}
            />
            <Input
              id={"lastName"}
              name={"lastName"}
              label="Last Name"
              placeholder="Start typing"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.lastName && errors.lastName}

            />
          </Row>
          <Input
            id={"companyName"}
            name={"companyName"}
            label="Company Name"
            placeholder="Start typing"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.companyName && errors.companyName}

          />
          <Input
            id={"email"}
            name={"email"}
            label="Email address"
            placeholder="johndoe@pickups.com"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email}

          />
          <Input
            id={"phoneNumber"}
            name={"phoneNumber"}
            label="Phone number"
            placeholder="Start typing"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.phoneNumber && errors.phoneNumber}

          />
          <Button label="Next" onClick={handleSubmit} />
        </FormContent>
      </FormWrapper>
    </SignUpWrapper>
  );
};

export default CompanyDetails;
