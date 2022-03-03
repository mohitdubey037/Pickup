/* eslint-disable react-hooks/exhaustive-deps */
import { RouteComponentProps, useParams } from "@reach/router";
import { useFormik } from "formik";
import useSWR from "swr";
import {
  SignUpWrapper,
  FormContent,
  FormWrapper,
  LogoImage,
  SignUpBackgroundWrapper,
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
import { H1 } from "app/components/Typography/Typography";
import { Grid } from "@mui/material";

const CompanyDetails = ({ navigate, path }: RouteComponentProps) => {
  const { userId } = useParams();
  const companyRegisterResponse = useSelector(
    (state: { signUp: { companyRegisterResponse: { companyId: number } } }) =>
      state.signUp.companyRegisterResponse
  );
  const showLoader = useSelector(
    (state: { globalState: { showLoader: boolean } }) =>
      state.globalState.showLoader
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
      <SignUpBackgroundWrapper>
        <LogoImage />
        <FormWrapper isValidating={isValidating}>
          {isValidating ? (
            <CircularProgress />
          ) : (
            <FormContent>
              <H1 title="COMPANY DETAILS" mb={24} />
              <Grid container spacing={2}>
                <Grid item sm={6} xs={12}>
                  <Input
                    id={"firstName"}
                    name={"firstName"}
                    label="Fist Name"
                    placeholder="John"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.firstName && errors.firstName}
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Input
                    id={"lastName"}
                    name={"lastName"}
                    label="Last Name"
                    placeholder="Doe"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.lastName && errors.lastName}
                  />
                </Grid>
              </Grid>
              <Input
                id={"companyName"}
                name={"companyName"}
                label="Company Name"
                placeholder="Company Name"
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
                placeholder="+1 (999)-999-9999"
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.phoneNumber && errors.phoneNumber}
              />
              <Button disabled={!isValid} label="Next" onClick={handleSubmit} />
            </FormContent>
          )}
        </FormWrapper>
      </SignUpBackgroundWrapper>
    </SignUpWrapper>
  );
};

export default CompanyDetails;
