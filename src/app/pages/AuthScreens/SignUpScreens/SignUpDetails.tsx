import { useState, useEffect } from "react";
import { RouteComponentProps, useLocation } from "@reach/router";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
    Header,
    SignUpWrapper,
    FormWrapper,
    FormContent,
    LogoImage,
} from "../style";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Buttons";
import { companyDetailsSchema } from "./signUpSchemas";
import { actions } from "store/reducers/SignUpReducer";
import { Grid } from "@material-ui/core";
import { Checkbox } from "app/components/Checkbox";
import { getParamsFromUrl } from "utils/commonUtils";
import { Flex } from "app/components/Input/style";


type SignUpProps = RouteComponentProps;

const SignUpDetails = ({ navigate }: SignUpProps) => {

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
        dirty
    } = useFormik({
        initialValues: { firstName: '', lastName: '', companyName: '', phoneNumber: '', consent: false },
        validationSchema: companyDetailsSchema,
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
                            <Grid item xs={6}>
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
                            <Grid item xs={12}>
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
                            <Grid item xs={12}>
                                <Input
                                    label="Phone Number"
                                    placeholder="(999)-999-9999"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.phoneNumber && errors.phoneNumber}
                                />
                            </Grid>
                            <Flex style={{ paddingLeft: 10, marginBottom: '16px', alignItems: 'center' }}>
                                <Checkbox
                                    isChecked={consent}
                                    id="consent"
                                    name="consent"
                                    onChange={() => setFieldValue('consent', !consent)}
                                    onBlur={handleBlur}
                                    error={touched.consent && errors.consent}
                                    // label="I agree to the Terms and Policies"
                                />
                                <span>I agree to the <a href="#" target="_blank">Terms</a> and <a href="#" target="_blank">Policies</a></span>
                            </Flex>
                            <Button label="Next" disabled={!(isValid && dirty)} showLoader={showLoader} onClick={handleSubmit} />
                        </Grid>
                    </FormContent>
                </form>
            </FormWrapper>
        </SignUpWrapper>
    );
};

export default SignUpDetails;
