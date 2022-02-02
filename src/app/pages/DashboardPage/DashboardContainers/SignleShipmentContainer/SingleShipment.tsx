import { useEffect } from "react";
import ModuleContainer from "app/components/ModuleContainer";
import { FormContainer } from "app/components/ModuleContainer/style";
import { remove } from "app/assets/Icons";
import {
  H2, H3
} from "app/components/Typography/Typography";

import SingleShipmentDetails from "./SingleShipmentDetails";
import SingleSipmentForm from "./SingleSipmentForm";
import { useFormik, validateYupSchema, yupToFormErrors } from "formik";
import { singleShipmentFormSchema } from "./SingleShipmentFormSchema";
import { Button } from "../../../../components/Buttons";

import { shipmentInitValues, getNextOrderValues } from "./helper";
import { Flex, FullCard } from "app/components/Input/style";
import ScheduleShipmentForm from "./ScheduleShipmentForm";
import { navigate } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "store/reducers/SingleShipmentReducer";
import { globalActions } from "store/reducers/GlobalReducer";
import { Box, ButtonGroup } from "@material-ui/core";
import { ButtonsGroup } from "app/components/Buttons/style";

function SingleShipment({ path: string }) {
  
  const dispatch = useDispatch();

  const shipmentDetails = useSelector(
    (state: { singleShipment: { shipmentDetails } }) => {
      return state.singleShipment.shipmentDetails;
    }
  );
  const orderIds = useSelector((state: { singleShipment: { orderIds } }) => {
    return state.singleShipment.orderIds;
  });
  const loading = useSelector((state: { globalState: { showLoader } }) => {
    return state.globalState.showLoader;
  });

  const redirect = (url: string) => {
    navigate(`/dashboard/${url}`);
  };

  useEffect(() => {
    dispatch(actions.resetOrderIds());
    dispatch(globalActions.showLoader(false));
  }, [dispatch]);

  const formik = useFormik({
    initialValues: shipmentDetails || shipmentInitValues,
    validate: (values: any) => {
        try {
            validateYupSchema(values, singleShipmentFormSchema, true, values);
        } catch (err) {
            return yupToFormErrors(err);
        }
    },
    onSubmit: async () => {
      dispatch(actions.submitShipment(formik.values));
    },
  });

  useEffect(() => {
    (() => formik.validateForm())();
  }, []);

  useEffect(() => {
    if (orderIds?.length > 0) {
      if (formik.values?.orders?.[0]?.scheduleType === "22") {
        redirect("holding-zone");
      } else {
        redirect("charter-shipment/order-summary");
      }
    }
  }, [orderIds, formik.values.orders]);

  const addMoreItemHandler = () => {
    const orderDetails = formik.values.orders;
    const nextOrderValue = getNextOrderValues(orderDetails[0]);
    const updatedOrderDetails = [...orderDetails, nextOrderValue];
    formik.setFieldValue("orders", updatedOrderDetails);
  };

  const deleteOrderHandler = (index: number) => {
    const orderDetails = [...formik.values.orders];
    orderDetails.splice(index, 1);
    formik.setFieldValue("orders", orderDetails);
  };
  const authUser = useSelector((state: any) => {
    return state.auth?.user;
  });

  if([1,2,3,4].indexOf(authUser?.roleId) === -1) {
    navigate(' /non-authorized-page')
  }
  return (
    <ModuleContainer>
      {formik?.values?.orders.length === 1 && (
        <H2 title="Single order" />
      )}
      {new Array(formik.values.orders.length).fill("").map((_, index) => (
        <>
          {formik.values.orders.length > 1 && (
            <H2 title={`Order${index + 1}`} />
          )}
          <FullCard
            key={index}
          >
            {formik.values.orders.length > 1 && (
              <Box
                role="button"
                tabIndex={0}
                onKeyPress={(e) =>
                  e.key === "Enter" && deleteOrderHandler(index)
                }
                onClick={() => deleteOrderHandler(index)}
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                }}
              >
                <img src={remove} alt="delete" />
              </Box>
            )}



            <H3 text="Address Details" />
              <SingleSipmentForm
                canBeDisabled
                disabled={index > 0}
                index={index}
                title={"origin"}
                formik={formik}
              />
              <SingleSipmentForm
                index={index}
                title={"destination"}
                formik={formik}
              />

              <H3 text="Order Details" />
              <SingleShipmentDetails
                disabled={index > 0}
                index={index}
                formik={formik}
              />
              <H3 text=" Schedule Order" />
              <ScheduleShipmentForm
                disabled={index > 0}
                index={index}
                formik={formik}
              />
          </FullCard>
        </>
      ))}

      <ButtonsGroup style={{float:'right'}} mb={4} mt={2}>
        {loading && (
          <div
            style={{
              position: "absolute",
              zIndex: 100000,
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
            }}
          ></div>
        )}
        <Button
          label="Confirm Order"
          disabled={!formik.isValid}
          onClick={formik.handleSubmit}
          showLoader={loading}
          size="medium"
        />
        <Button
          secondary
          label="Add New Order"
          disabled={!formik.isValid}
          onClick={addMoreItemHandler}
          size="medium"
        />
      </ButtonsGroup>
    </ModuleContainer>
  );
}

export default SingleShipment;
