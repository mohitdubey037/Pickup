import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ModuleContainer from "app/components/ModuleContainer";
import { H2, H3 } from "app/components/Typography/Typography";
import ChildAccountForm from "./ChildAccountForm";
import AdminDetails from "./AdminDetails";
import Cards from "./Cards";
import { Flex, FullCard } from "app/components/Input/style";
import { Button } from "app/components/Buttons";
import { actions } from "store/reducers/PaymentReducer";
import { useFormik, validateYupSchema, yupToFormErrors } from "formik";

export default function ChildAccount({ path: string }) {
  const dispatch = useDispatch();
  useEffect(() => {
        dispatch(actions.getCards());
}, []);

// const formik = useFormik({
//   initialValues: shipmentDetails || shipmentInitValues,
//   validate: (values: any) => {
//     try {
//       validateYupSchema(values, singleShipmentFormSchema, true, values);
//     } catch (err) {
//       return yupToFormErrors(err);
//     }
//   },
//   onSubmit: async () => {
//     dispatch(actions.submitShipment(formik.values));
//   },
// });

// useEffect(() => {
//   (() => formik.validateForm())();
// }, []);

// const handleConfirm = async (values: object) => {
//   postChildAccountData(values);
// }

  return (
    <ModuleContainer>
      <H2 title="Create New Child" />

      <FullCard>
        <H3 text="Create Child" />
        <ChildAccountForm 
        // formik={formik}
        />
      </FullCard>

      <FullCard>
        <H3 text="Superintendent Details" />
        <AdminDetails />
      </FullCard>

      <FullCard>
        <Cards />
      </FullCard>

      <Flex justifyContent="flex-end">
        <Button  size="medium" label="Invite Child" />
      </Flex>
      
    </ModuleContainer>
  );
}
