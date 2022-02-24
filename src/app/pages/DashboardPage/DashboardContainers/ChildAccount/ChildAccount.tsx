import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModuleContainer from "app/components/ModuleContainer";
import { H2, H3 } from "app/components/Typography/Typography";
import ChildAccountForm from "./ChildAccountForm";
import AdminDetails from "./AdminDetails";
import Cards from "./Cards";
import { Flex, FullCard } from "app/components/Input/style";
import { Button } from "app/components/Buttons";
// import { actions } from "store/reducers/PaymentReducer";
import { actions } from 'store/reducers/ChildAccountReducer';
import { useFormik, validateYupSchema, yupToFormErrors } from "formik";
import { childNewInitValue } from './helper';
import { ChildAccountSchema } from './ChildAccountSchema';
import { globalActions } from "store/reducers/GlobalReducer";
import EmailSentDrawer from "app/components/EmailSentDrawer/EmailSentDrawer";
import { Drawer } from "app/components/Drawer";
import { navigate } from "@reach/router";

export default function ChildAccount({ path: string }) {
  const dispatch = useDispatch();

const loading = useSelector((state: { globalState: { showLoader } }) => {
  return state.globalState.showLoader;
});

const formik = useFormik({
  initialValues: childNewInitValue,
  validate: (values: any) => {
    try {
      validateYupSchema(values, ChildAccountSchema, true, values);
    } catch (err) {
      return yupToFormErrors(err);
    }
  },
  onSubmit: () => {
    dispatch(actions.submitDetails(formik.values));
  },
});

const [emailSentDrawerOpen, setEmailSentDrawerOpen] = useState(false);

const handleOpenDrawer = () => {
  setEmailSentDrawerOpen(true);
};
const handleCloseDrawer  = () => {
  // formik.initialValues=ChildInitValues,
  
  dispatch(actions.resetChildAccount());
  setEmailSentDrawerOpen(false);
  formik.resetForm({ values : childNewInitValue });
  // navigate('/dashboard/my-account/child-account-list');
};

const handleSubmit = () => {
  dispatch(actions.resetChildAccount());
  setEmailSentDrawerOpen(false);
  navigate('/dashboard/my-account/child-account-list')
}

const childAccountDetails = useSelector(
  (state: { childAccountDetails: { childAccountDetails } }) => {
    return state.childAccountDetails;
  }
);

useEffect(() => {
  if (childAccountDetails?.childAccountDetails?.message) {
    handleOpenDrawer();
  }
}, [childAccountDetails]);

useEffect(() => {
  dispatch(actions.resetChildAccount());
  dispatch(globalActions.showLoader(false));
},[dispatch])

useEffect(() => {
  (() => formik.validateForm())();
}, []);

  return (
    <ModuleContainer>
      <H2 title="Create New Child" />

      <FullCard>
        <H3 text="Create Child" />
        <ChildAccountForm 
          formik={formik}
        />
      </FullCard>

      <FullCard>
        <H3 text="Superintendent Details" />
        <AdminDetails
         formik = {formik} />
      </FullCard>

      <FullCard>
        <Cards 
        formik={formik} />
      </FullCard>

      <Flex justifyContent="flex-end">
        <Button
          onClick={formik.handleSubmit}
          disabled={!formik.isValid}
          showLoader={loading}
          size="medium" label="Invite Child" />
      </Flex>

      <Drawer
        open={emailSentDrawerOpen}
        setDrawerOpen={() => setEmailSentDrawerOpen(false)}
        title="Email Sent"
        closeIcon={true}
        >
        <EmailSentDrawer handleCloseDrawer={handleCloseDrawer} handleSubmit={handleSubmit}/>
      </Drawer>
      
    </ModuleContainer>
  );
}
