import { RouteComponentProps } from "@reach/router";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import {
  Header,
  SignUpWrapper,
  FormWrapper,
  FormContent,
  LogoImage,
} from "../style";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Buttons";
// import { signUpSchema } from "./signUpSchemas";
import { Grid } from "@material-ui/core";
import { Checkbox } from "app/components/Checkbox";
import { formInitValues, validationSchema } from "./helper";
import { useLocation } from "@reach/router";
import { SendSignUpDetails } from "services/SignUpSerivces/index";
import { Link } from "app/components/Link";

type SignUpProps = RouteComponentProps;

const SignUpDetails = ({ navigate }: SignUpProps) => {
  // const dispatch = useDispatch();
  // const signUpResponse = useSelector(
  //   (state: { signUp: { signUpResponse: { verifyEmailLink: string } } }) => {
  //     return state.signUp.signUpResponse;
  //   }
  // );
  const showLoader = useSelector(
    (state: { globalState: { showLoader: boolean } }) =>
      state.globalState.showLoader
  );

  const location = useLocation();
  console.log("Location: ", location);

  // const search = new URLSearchParams(location.search);
  // console.log("Search res", search.get("emailId"), "User ID: ", search.get("userId"));

  // const params = new UrlParams(location.search);
  // console.log(search.get('emailId'));

  // useEffect(() => {
  //   return () => {
  //     dispatch(actions.registerUserResponse({}));
  //   };
  // }, []);

  //   useEffect(() => {
  //     if (signUpResponse.verifyEmailLink) {
  //       navigate?.("/email-sent");
  //     }
  //   }, [signUpResponse.verifyEmailLink, navigate]);

  // const onSignUp = () => {
  //   dispatch(actions.registerUser(email));
  // };

  // useEffect(() => {
  //   onSignUpFormSubmit(values);
  // }, []);

  function getParamsFromUrl(search: string) {
    const qs = search.substring(1);
    const params = {};

    qs.split("&").reduce((a, b) => {
      let [key, val] = b.split("=");
      a[key] = val;
      return a;
    }, params);
    return params;
  }

  //  const params = getParamsFromUrl('emailId');
  const params = getParamsFromUrl(location.search);
  console.log(params["emailId"]);

  const onSignUpFormSubmit = async (values: any) => {
    console.log("In API calling section");
    const body = {
      firstName: values.firstName,
      lastName: values.lastName,
      companyName: values.companyName,
      emailId: values.emailId,
      phoneNumber: values.phoneNumber,
    };
    console.log("Body: ", body, "Values: ", values);
    const res = await SendSignUpDetails(body);
    if (res.success) {
      navigate?.("/password");
      console.log("We are redirecting:");
    }
    console.log("Response", res);
  };

  const { handleChange, values, errors, touched, handleBlur, handleSubmit } =
    useFormik({
      initialValues: formInitValues,
      validationSchema: validationSchema,
      onSubmit: onSignUpFormSubmit,
    });

  // const redirect = () => {
  //   navigate("/password");
  // };

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
                  id={"firstName"}
                  name={"firstName"}
                  label={"First Name"}
                  placeholder={"John"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched["firstName"] && errors["firstName"]}
                  validate
                />
              </Grid>
              <Grid item xs={6}>
                <Input
                  id={"lastName"}
                  name={"lastName"}
                  label={"Last Name"}
                  placeholder={"Doe"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.lastName && errors.lastName}
                  validate
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  label="Company Name"
                  placeholder="John Doe’s Company"
                  id="companyName"
                  name="companyName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  label="Phone Number"
                  placeholder="(999)-999-9999"
                  id="phoneNumber"
                  name="phoneNumber"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
              <div
                style={{
                  paddingLeft: 10,
                  display: "flex",
                  // alignItems: "center",
                }}
              >
                <Checkbox
                  label={
                    <div>
                      <span>I agree to the </span>
                      <Link
                        to={"/"}
                        style={{
                          color: "#2A95D1",
                          textDecoration: "underline",
                        }}
                      >Terms
                      </Link>
                      <span> and </span>
                      <Link
                        to={"/"}
                        style={{
                          color: "#2A95D1",
                          textDecoration: "underline",
                        }}
                      >
                        Policies
                      </Link>
                    </div>
                  }
                />
              </div>
              <Button
                label="Next"
                showLoader={showLoader}
                onClick={() => {
                  handleSubmit();
                  // navigate?.("/password");
                  // redirect();
                  console.log("In Next button");
                }}
                style={{ margin: "12px 16px 16px" }}
              />
            </Grid>
          </FormContent>
        </form>
      </FormWrapper>
    </SignUpWrapper>
  );
};

export default SignUpDetails;
