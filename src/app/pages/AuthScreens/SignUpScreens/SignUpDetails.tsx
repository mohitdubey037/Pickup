import { useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "../../../components/Link/index";
import {
  Header,
  SignUpWrapper,
  FormWrapper,
  FormContent,
  LogoImage,
  LoginLink,
} from "../style";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Buttons";
import { BlackLink } from "../../../components/Typography/Typography";
import { signUpSchema } from "./signUpSchemas";
import { actions } from "store/reducers/SignUpReducer";
import { Grid, Typography } from "@material-ui/core";
import { title } from "process";
import { Checkbox } from "app/components/Checkbox";

type SignUpProps = RouteComponentProps;

const SignUpDetails = ({ navigate }: SignUpProps) => {
  const dispatch = useDispatch();
  const signUpResponse = useSelector(
    (state: { signUp: { signUpResponse: { verifyEmailLink: string } } }) => {
      return state.signUp.signUpResponse;
    }
  );
  const showLoader = useSelector(
    (state: { globalState: { showLoader: boolean } }) =>
      state.globalState.showLoader
  );

  useEffect(() => {
    return () => {
      dispatch(actions.registerUserResponse({}));
    };
  }, []);

  //   useEffect(() => {
  //     if (signUpResponse.verifyEmailLink) {
  //       navigate?.("/email-sent");
  //     }
  //   }, [signUpResponse.verifyEmailLink, navigate]);

  const onSignUp = () => {
    dispatch(actions.registerUser(email));
  };

  const {
    handleChange,
    values: { email },
    errors,
    touched,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: { email: "" },
    validationSchema: signUpSchema,
    onSubmit: onSignUp,
  });

  return (
    <SignUpWrapper>
      <LogoImage />
      <FormWrapper>
        <form>
          <FormContent>
            <Header>SIGN UP</Header>
            <Grid container spacing={4} style={{ marginRight: 30 }}>
              <Grid item xs={6}>
                <Input
                  id={title + "firstName"}
                  name={title + "firstName"}
                  label={"First Name"}
                  placeholder={"Start typing"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched[title + "firstName"] && errors[title + "firstName"]
                  }
                  validate
                />
              </Grid>
              <Grid item xs={6}>
                <Input
                  id={title + "lastName"}
                  name={title + "lastName"}
                  label={"Last Name"}
                  placeholder={"Start typing"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched[title + "lastName"] && errors[title + "lastName"]
                  }
                  validate
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  label="Company Name"
                  placeholder="Start typing"
                  id="companyName"
                  name="companyName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  label="Phone Number"
                  placeholder="Start typing"
                  id="phoneNumber"
                  name="phoneNumber"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
              <div style={{ paddingLeft: 10, display: "flex" }}>
                <Checkbox label="I agree to the Terms and Policies" />
              </div>
              <Button
                label="Next"
                showLoader={showLoader}
                // onClick={handleSubmit}
              onClick={()=>{
                handleSubmit();
                navigate?.("./password")
              }}
              />
            </Grid>
          </FormContent>
        </form>
      </FormWrapper>
    </SignUpWrapper>
  );
};

export default SignUpDetails;
