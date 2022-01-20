import { useState, useEffect } from "react";
import { RouteComponentProps, useLocation } from "@reach/router";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
    SignUpWrapper,
    FormWrapper,
    FormContent,
    LogoImage,
    SignUpBackgroundWrapper,
    RememberDiv,
    Termslink,
} from "../style";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Buttons";
import { companyDetailsSchema } from "./signUpSchemas";
import { actions } from "store/reducers/SignUpReducer";
import { Box, Grid } from "@material-ui/core";
import { Checkbox } from "app/components/Checkbox";
import { getParamsFromUrl } from "utils/commonUtils";
import { PageTitle } from "app/components/Typography/Typography";
import { GridSpacing } from "app/components/GridSpacing/GridSpacing";
import { Flex } from "app/components/Input/style";


type SignUpProps = RouteComponentProps;

const SignUpDetails = ({ navigate }: SignUpProps) => {
    const classes = GridSpacing();
    const dispatch = useDispatch();

    const location = useLocation();

    const companyResponse = useSelector(
        ({ signUp: { companyRegisterResponse: { companyId } } }: { signUp: { companyRegisterResponse: { companyId: number } } }) => companyId
    );

    const showLoader = useSelector((state: { globalState: { showLoader: boolean } }) => state.globalState.showLoader)

    const [email, setEmail] = useState<string>('')

    useEffect(() => {
        const params = getParamsFromUrl(location.search)
        setEmail(params['emailId'])
    }, [location.search])

    useEffect(() => {
        return () => {
            dispatch(actions.registerUserResponse({}));
        };
    }, [dispatch]);

    useEffect(() => {
        if (companyResponse) {
            navigate?.("/password", { state: {
                email: email
            } });
        }
    }, [companyResponse, navigate, email]);

    const onSignUp = (values: any) => {
        const data = { ...values, emailId: email }
        dispatch(actions.registerCompany(data));
    };

    const {
        handleChange,
        values: { consent },
        errors,
        touched,
        handleBlur,
        handleSubmit,
        setFieldValue,
        isValid,
        validateForm
    } = useFormik({
        initialValues: { firstName: '', lastName: '', companyName: '', phoneNumber: '', consent: false },
        validationSchema: companyDetailsSchema,
        onSubmit: onSignUp,
    });

    useEffect(() => {
        (() => validateForm())();
      }, []);

    return (
        <SignUpWrapper>
        <SignUpBackgroundWrapper>
            <LogoImage />
            <FormWrapper>
                <form>
                    <FormContent>
                    <PageTitle title="SIGN UP" />
                        <Grid container spacing={2}>
                            <Grid item xs={6} className={classes.gridColspacing} >
                                <Input
                                    id={"firstName"}
                                    name={"firstName"}
                                    label={"First Name"}
                                    placeholder={"John"}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched['firstName'] && errors['firstName']}
                                    validate
                                />
                            </Grid>
                            <Grid item xs={6} className={classes.gridColspacing} >
                                <Input
                                    id={"lastName"}
                                    name={"lastName"}
                                    label={"Last Name"}
                                    placeholder={"Doe"}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched['lastName'] && errors['lastName']}
                                    validate
                                />
                            </Grid>
                            <Grid item xs={12} className={classes.gridColspacing}>
                                <Input
                                    label="Company Name"
                                    placeholder="John Doe’s Company"
                                    id="companyName"
                                    name="companyName"
                                    onChange={handleChange}
                                    error={touched.companyName && errors.companyName}
                                    onBlur={handleBlur}
                                />
                            </Grid>
                            <Grid item xs={12} className={classes.gridColspacing}>
                                <Input
                                    
                                    label="Phone Number"
                                    placeholder="+1 (999)-999-9999"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.phoneNumber && errors.phoneNumber}
                                />
                            </Grid>
                            <Grid item xs={12} className={classes.gridColspacing}>
                            <Box mt={1} mb={4}>
                                <Checkbox
                                    isChecked={consent}
                                    id="consent"
                                    label={<Termslink>I agree to the <a href="#" target="_blank">Terms</a> and <a href="#" target="_blank">Policies</a></Termslink>}
                                    name="consent"
                                    onChange={() => setFieldValue('consent', !consent)}
                                    onBlur={handleBlur}
                                    error={touched.consent && errors.consent}
                                />   
                            </Box>
                            </Grid>
                            <Grid item xs={12} className={classes.gridColspacing}>
                            <Button label="Next" disabled={!(isValid)} showLoader={showLoader} onClick={handleSubmit} size="large" />
                            </Grid>
                        </Grid>
                    </FormContent>
                </form>
            </FormWrapper>
            </SignUpBackgroundWrapper>
        </SignUpWrapper>
    );
};

export default SignUpDetails;
