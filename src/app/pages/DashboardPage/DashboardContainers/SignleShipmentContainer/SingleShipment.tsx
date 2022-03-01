import { useEffect, Fragment, useState } from "react";
import { navigate } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import { useFormik, validateYupSchema, yupToFormErrors } from "formik";
import { Box } from "@mui/material";

import ModuleContainer from "app/components/ModuleContainer";
import { H2, H3 } from "app/components/Typography/Typography";
import SingleShipmentDetails from "./SingleShipmentDetails";
import SingleSipmentForm from "./SingleSipmentForm";
import { singleShipmentFormSchema } from "./SingleShipmentFormSchema";
import { Button } from "../../../../components/Buttons";
import {
  getSameDetailsValues,
  shipmentInitValues,
  singleShipmentInitValues,
} from "./helper";
import ScheduleShipmentForm from "./ScheduleShipmentForm";
import { actions } from "store/reducers/SingleShipmentReducer";
import { globalActions } from "store/reducers/GlobalReducer";
import { ButtonsGroup } from "app/components/Buttons/style";
import { Checkbox } from "app/components/Checkbox";
import { CustomLink } from "app/components/Typography/Links";
import { Flex, FullCard } from "app/components/CommonCss/CommonCss";

function SingleShipment({ path }) {
  const dispatch = useDispatch();

  const [sameDetails, setSameDetails] = useState<any>({
    hasSameOrigin: [],
    hasSameDestination: [],
    hasSameSchedule: [],
  });

  const orderIds = useSelector((state: { singleShipment: { orderIds } }) => {
    return state.singleShipment.orderIds;
  });
  const loading = useSelector((state: { globalState: { showLoader } }) => {
    return state.globalState.showLoader;
  });
  const authUser = useSelector((state: any) => {
    return state.auth?.user;
  });

  const redirect = (url: string) => {
    navigate(`/dashboard/${url}`);
  };

  useEffect(() => {
    dispatch(actions.resetSingleShipment());
    dispatch(globalActions.showLoader(false));
  }, [dispatch]);

  const formik = useFormik({
    initialValues: shipmentInitValues,
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
      redirect("charter-shipment/order-summary");
    }
  }, [orderIds]);

  const hasSameDetailsHandler = (index: number, sectionName: string) => {
    const fieldName = `orders.${index}.${sectionName}`;
    let currentValue = formik.values.orders[index][`${sectionName}`];
    formik.setFieldValue(fieldName, !currentValue);

    let temp = sameDetails;
    if (currentValue) {
      for (var i = 0; i < temp[sectionName].length; i++) {
        if (temp[sectionName][i] === index) {
          temp[sectionName].splice(i, 1);
        }
      }
    } else {
      temp[sectionName] = [...temp[sectionName], index];
      let updatedOrderDetails = getSameDetailsValues(
        formik.values.orders,
        index,
        sectionName
      );
      formik.setFieldValue("orders", updatedOrderDetails);
    }
    setSameDetails(temp);
  };

  const addMoreItemHandler = () => {
    const orderDetails = formik.values.orders;
    const updatedOrderDetails = [...orderDetails, singleShipmentInitValues];
    formik.setFieldValue("orders", updatedOrderDetails);
  };

  const deleteOrderHandler = (index: number) => {
    const orderDetails = [...formik.values.orders];
    orderDetails.splice(index, 1);
    formik.setFieldValue("orders", orderDetails);
  };

  if ([1, 2, 3, 4].indexOf(authUser?.roleId) === -1) {
    navigate("/non-authorized-page");
  }

  return (
    <ModuleContainer>
      {formik?.values?.orders.length === 1 && <H2 title="Single order" />}
      {new Array(formik.values.orders.length).fill("").map((_, index) => (
        <Fragment key={index}>
          {formik.values.orders.length > 1 && (
            <Flex justifyContent="space-between" alignItems="center" top={24}>
              <H2 title={`Order ${index + 1}`} />
              <CustomLink
                label="Delete"
                onClick={() => deleteOrderHandler(index)}
                redlink
              />
            </Flex>
          )}
          <FullCard key={index}>
            <H3 text="Address Details" className="section-title" />
            <SingleSipmentForm
              canBeDisabled={
                index === 0 && sameDetails.hasSameOrigin.length > 0
              }
              disabled={index > 0 && formik.values.orders[index].hasSameOrigin}
              index={index}
              title={"origin"}
              formik={formik}
              sameDetails={sameDetails}
              hasSameDetails={hasSameDetailsHandler}
            />
            <SingleSipmentForm
              canBeDisabled={
                index === 0 && sameDetails.hasSameDestination.length > 0
              }
              disabled={
                index > 0 && formik.values.orders[index].hasSameDestination
              }
              index={index}
              title={"destination"}
              formik={formik}
              sameDetails={sameDetails}
              hasSameDetails={hasSameDetailsHandler}
            />

            <H3 text="Order Details" />
            <SingleShipmentDetails
              // disabled={index > 0}
              index={index}
              formik={formik}
            />

            <Box display="flex" justifyContent="space-between">
              <H3 text="Schedule Order" />
              {index > 0 && (
                <Box>
                  <Checkbox
                    label="Use same schedule as of the first order"
                    onChange={() =>
                      hasSameDetailsHandler(index, "hasSameSchedule")
                    }
                  />
                </Box>
              )}
            </Box>
            <ScheduleShipmentForm
              canBeDisabled={
                index === 0 && sameDetails.hasSameSchedule.length > 0
              }
              disabled={
                index > 0 && formik.values.orders[index].hasSameSchedule
              }
              index={index}
              formik={formik}
              sameDetails={sameDetails}
            />
          </FullCard>
        </Fragment>
      ))}

      <ButtonsGroup style={{ float: "right" }} mb={4} mt={2}>
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
          />
        )}
        <Button
          label="Add New Order"
          disabled={!formik.isValid}
          onClick={addMoreItemHandler}
          size="medium"
          secondary
        />
        <Button
          label="Confirm Order"
          disabled={!formik.isValid}
          onClick={formik.handleSubmit}
          showLoader={loading}
          size="medium"
        />
      </ButtonsGroup>
    </ModuleContainer>
  );
}

export default SingleShipment;
