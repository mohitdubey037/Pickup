import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModuleContainer from "app/components/ModuleContainer";
import { H2, H3 } from "app/components/Typography/Typography";
import ChildAccountForm from "./ChildAccountForm";
import AdminDetails from "./AdminDetails";
import Cards from "./Cards";
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
import { CustomLink } from "app/components/Typography/Links";
import { Flex, FullCard } from "app/components/CommonCss/CommonCss";

export default function ChildAccount({ path: string }) {
  const dispatch = useDispatch();

const loading = useSelector((state: { globalState: { showLoader } }) => {
  return state.globalState.showLoader;
});

  const authUser = useSelector((state: any) => {
    return state.auth?.user;
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
  dispatch(actions.resetChildAccount());
  setEmailSentDrawerOpen(false);
  formik.resetForm({ values : childNewInitValue });
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

  if ([4].indexOf(authUser?.roleId) || authUser?.childAccount === 1) {
    navigate("/non-authorized-page");
  }

  return (
    <ModuleContainer>
      <Flex justifyContent="space-between" alignItems="center">
      <H2 title="Create New Child" />
      <CustomLink label="Back" onClick={() => navigate?.("/dashboard/my-account/child-account-list")}  redlink />
      </Flex>
      <FullCard>
        <H3 text="Create Child" />
        <ChildAccountForm 
          formik={formik}
        />
      </FullCard>

      <FullCard>
        <H3 text="Admin Details" />
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
        setDrawerOpen={() => handleCloseDrawer()}
        title="Child Created"
        closeIcon={true}
        >
        <EmailSentDrawer handleCloseDrawer={handleCloseDrawer} handleSubmit={handleSubmit}/>
      </Drawer>
      
    </ModuleContainer>
  );
}
