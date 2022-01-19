import { useEffect } from "react";
import ModuleContainer from "app/components/ModuleContainer";
import { FormContainer } from "app/components/ModuleContainer/style";
import { remove } from "app/assets/Icons";
import {
  ContainerTitle,
  FormContainerTitle,
} from "app/components/Typography/Typography";

import SingleShipmentDetails from "./SingleShipmentDetails";
import SingleSipmentForm from "./SingleSipmentForm";
import { useFormik, validateYupSchema, yupToFormErrors } from "formik";
import { singleShipmentFormSchema } from "./SingleShipmentFormSchema";
import { Button } from "../../../../components/Buttons";

import { shipmentInitValues, getNextOrderValues } from "./helper";
import { Flex } from "app/components/Input/style";
import ScheduleShipmentForm from "./ScheduleShipmentForm";
import { navigate } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "store/reducers/SingleShipmentReducer";
import { globalActions } from "store/reducers/GlobalReducer";

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
    
  return (
    <ModuleContainer>
      {formik?.values?.orders.length === 1 && (
        <ContainerTitle>Single order</ContainerTitle>
      )}
      {new Array(formik.values.orders.length).fill("").map((_, index) => (
        <>
          {formik.values.orders.length > 1 && (
            <h2>Order {index + 1}</h2>
          )}
          <FormContainer
            key={index}
            elevation={2}
            style={{ position: "relative" }}
          >
            {formik.values.orders.length > 1 && (
              <div
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
              </div>
            )}
            <FormContainerTitle>Address Details</FormContainerTitle>
            <div style={{ marginBottom: "30px" }}>
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

              <FormContainerTitle
                style={{ textAlign: "left", marginTop: "95px" }}
              >
                Order Details
              </FormContainerTitle>
              <SingleShipmentDetails
                disabled={index > 0}
                index={index}
                formik={formik}
              />

              <FormContainerTitle
                style={{ textAlign: "left", marginTop: "88px" }}
              >
                Schedule Order
              </FormContainerTitle>
              <ScheduleShipmentForm
                disabled={index > 0}
                index={index}
                formik={formik}
              />
            </div>
          </FormContainer>
        </>
      ))}

      <Flex
        style={{ marginBottom: 10, padding: "inherit" }}
        direction={"row-reverse"}
      >
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
          style={{ width: 190 }}
          label="Confirm Order"
          disabled={!formik.isValid}
          onClick={formik.handleSubmit}
          showLoader={loading}
        />
        <Button
          style={{ width: 190, marginRight: 20 }}
          secondary
          label="Add New Order"
          disabled={!formik.isValid}
          onClick={addMoreItemHandler}
        />
      </Flex>
    </ModuleContainer>
  );
}

export default SingleShipment;
