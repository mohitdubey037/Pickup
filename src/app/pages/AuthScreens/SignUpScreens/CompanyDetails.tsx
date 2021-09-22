/* eslint-disable react-hooks/exhaustive-deps */
import { RouteComponentProps, useParams } from "@reach/router";
import { useFormik } from "formik";
import useSWR from "swr";
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
import { getEmailUserId } from "services/SignUpSerivces";
import { useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import { showToast } from "utils";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "store/reducers/SignUpReducer";

const CompanyDetails = ({ navigate, path }: RouteComponentProps) => {
  const { userId } = useParams();
  const companyRegisterResponse = useSelector(
    (state: { signUp: { companyRegisterResponse: { companyId: number } } }) =>
      state.signUp.companyRegisterResponse
  );
  const dispatch = useDispatch();

  const { data, isValidating } = useSWR(userId, getEmailUserId, {
    loadingTimeout: 3000,
    revalidateOnMount: true,
    onLoadingSlow: () => {
      showToast("Invalid", "error");
      navigate?.("/");
    },
    revalidateOnFocus: false,
  });

  
  const { emailId } = data || {};

  useEffect(() => {
    return () => {
      dispatch(actions.registerCompanyResponse({}));
    };
  }, []);
  useEffect(() => {
    if (companyRegisterResponse?.companyId) {
      navigate?.("/password", { state: { email: emailId } });
    }
  }, [companyRegisterResponse?.companyId, emailId]);

  useEffect(() => {
    setFieldValue("email", emailId);
  }, [emailId]);

  const onSubmit = () => {
    dispatch(actions.registerCompany(values));
  };

  const {
    handleChange,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    setFieldValue,
    values,
    isValid,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: companyDetailsSchema,
    onSubmit: () => {
      onSubmit();
    },
  });

  return (
    <SignUpWrapper>
      <LogoImage />
      <FormWrapper isValidating={isValidating}>
        {isValidating ? (
          <CircularProgress />
        ) : (
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
              initValue={values.email}
              disabled={true}
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
            <Button disabled={!isValid} label="Next" onClick={handleSubmit} />
          </FormContent>
        )}
      </FormWrapper>
    </SignUpWrapper>
  );
};

export default CompanyDetails;
