import React, { useEffect } from "react";
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
import { ChildInitValues } from './helper';
import { ChildAccountSchema } from './ChildAccountSchema';
import { globalActions } from "store/reducers/GlobalReducer";

export default function ChildAccount({ path: string }) {
  const dispatch = useDispatch();

const loading = useSelector((state: { globalState: { showLoader } }) => {
  return state.globalState.showLoader;
});

const formik = useFormik({
  initialValues: ChildInitValues,
  validate: (values: any) => {
    try {
      validateYupSchema(values, ChildAccountSchema, true, values);
    } catch (err) {
      return yupToFormErrors(err);
    }
  },
  onSubmit: () => {
    console.log(formik.values, 'hiii 1');
    const accountValues = {
      ...formik.values,
      expiryMonth: formik.values.expiryDate.split("/")[0],
      expiryYear: formik.values.expiryDate.split("/")[1],
      expiryDate: undefined
    }

    dispatch(actions.submitDetails(accountValues));
  },
});

useEffect(() => {
  dispatch(globalActions.showLoader(false));
},[dispatch])

useEffect(() => {
  (() => formik.validateForm())();
}, []);

// useEffect(() => {
//   console.log(formik);
// })

// const handleConfirm = async (values: object) => {
//   postChildAccountData(values);
// }

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
          size="medium" label="Invite Child" />
      </Flex>
      
    </ModuleContainer>
  );
}
