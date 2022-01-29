import { useState, useEffect, useRef } from "react";
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
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import { Flex } from "app/components/Input/style";
import { Link } from "app/components/Link";
import Modal from 'react-modal';
import TermsAndPolicies from "./Terms&Policies";

type SignUpProps = RouteComponentProps;

const SignUpDetails = ({ navigate }: SignUpProps) => {

    const firstFieldRef = useRef<any>(null);

    useEffect(() => {
        firstFieldRef.current?.focus();
    },[])

    const dispatch = useDispatch();

    const location = useLocation();

    const companyResponse = useSelector(
        ({ signUp: { companyRegisterResponse: { companyId } } }: { signUp: { companyRegisterResponse: { companyId: number } } }) => companyId
    );

    const showLoader = useSelector((state: { globalState: { showLoader: boolean } }) => state.globalState.showLoader)

    const [token, setToken] = useState<string>('');
    const [showTermsPolicies, setShowTermsPolicies] = useState('');

    useEffect(() => {
        const params = getParamsFromUrl(location.search);
        setToken(params['token'])
    }, [location.search])

    useEffect(() => {
        return () => {
            dispatch(actions.registerUserResponse({}));
        };
    }, [dispatch]);

    useEffect(() => {
        if (companyResponse) {
            navigate?.("/password")}
    }, [companyResponse, navigate]);

const onSignUp = (values: any) => {
    const data = { ...values, token: token }
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
                            <GridContainer container spacing={2}>
                                <Grid item xs={6}>
                                    <Input
                                        ref={firstFieldRef}
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
                                        placeholder="+1 (999)-999-9999"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.phoneNumber && errors.phoneNumber}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Box mt={1} mb={4}>
                                        <Checkbox
                                            isChecked={consent}
                                            id="consent"
                                            label={<Termslink>I agree to the <Link to={`/sign-up-details?token=${token}`} onClick={() => setShowTermsPolicies('terms')}>Terms</Link> and <Link to={`/sign-up-details?token=${token}`} onClick={() => setShowTermsPolicies('policies')}>Policies</Link></Termslink>}
                                            name="consent"
                                            onChange={() => setFieldValue('consent', !consent)}
                                            onBlur={handleBlur}
                                            error={touched.consent && errors.consent}
                                        />
                                    </Box>
                                    <Modal
                                        isOpen={!!showTermsPolicies}
                                        onRequestClose={() => setShowTermsPolicies('')}
                                    >
                                        <TermsAndPolicies name={showTermsPolicies} />
                                    </Modal>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button label="Next" disabled={!(isValid)} showLoader={showLoader} onClick={handleSubmit} size="large" />
                                </Grid>
                            </GridContainer>
                        </FormContent>
                    </form>
                </FormWrapper>
            </SignUpBackgroundWrapper>
        </SignUpWrapper>
    );
};

export default SignUpDetails;
