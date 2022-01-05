import { useEffect, useState } from "react";
import { Drawer } from "app/components/Drawer";
import ModuleContainer from "app/components/ModuleContainer";
import { FormContainer } from "app/components/ModuleContainer/style";

import {
    ContainerTitle,
    FormContainerTitle,
} from "app/components/Typography/Typography";

import SingleShipmentDetails from "./SingleShipmentDetails";
import SingleSipmentForm from "./SingleSipmentForm";
import { CardDetails } from "app/components/PaymentCardDetails";
import { masterCard } from "../../../../assets/Images/index";
import { useFormik } from "formik";
import { singleShipmentFormSchema } from "./SingleShipmentFormSchema";
import { Button } from "../../../../components/Buttons";

import { singleShipmentInitValues, shipmentInitValues } from "./helper";
import { Flex } from "app/components/Input/style";
import ScheduleShipmentForm from "./ScheduleShipmentForm";
import { navigate } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "store/reducers/SingleShipmentReducer";

function SingleShipment({ path: string }) {

    const dispatch = useDispatch();

    const orderIds = useSelector((
        state: { singleShipment: { orderIds } }) => {
        return state.singleShipment.orderIds;
      });
    const loading = useSelector((
        state: { globalState: { showLoader } }) => {
        return state.globalState.showLoader;
      })

    const [drawerOpen, setDrawerOpen] = useState(false);
    const redirect = () => {
        navigate(`/dashboard/charter-shipment/order-summary`);
    };

    useEffect(() => {
        dispatch(actions.resetOrderIds());
    }, [dispatch])

    useEffect(() => {
        if(orderIds?.length > 0){
            redirect();
        }
    }, [orderIds])

    const formik = useFormik({
        initialValues: shipmentInitValues,
        // validationSchema: singleShipmentFormSchema,
        onSubmit: async () => {
            dispatch(actions.submitShipment(formik.values))
        },
    });

    useEffect(() => {
        console.log("SingleShipmentRex", formik.values.orders)
    }, [formik.values])


    const addMoreItemHandler = () => {
        const orderDetails = formik.values.orders;
        console.log("shipmentDetails", orderDetails)
        orderDetails.push(singleShipmentInitValues);
        formik.setFieldValue("orders", orderDetails);
      };

    return (
        <ModuleContainer>
            <ContainerTitle>Single order</ContainerTitle>
            {/* <pre style={{ textAlign: "left", fontSize: 16 }}>{JSON.stringify(formik.values, null, 2)}</pre> */}
            {new Array(formik.values.orders.length).fill("").map((_, index) => ( 
                <FormContainer elevation={2}>
                    <FormContainerTitle>Address Details</FormContainerTitle>
                    <div style={{ marginBottom: "30px" }}>
                        <SingleSipmentForm index={index} title={"origin"} formik={formik} />
                        <SingleSipmentForm index={index} title={"destination"} formik={formik} />

                        <FormContainerTitle style={{ textAlign: "left", marginTop: "95px" }}>Order Details</FormContainerTitle>
                        <SingleShipmentDetails index={index} formik={formik} />

                        <FormContainerTitle style={{ textAlign: "left", marginTop: "88px" }}>Schedule Order</FormContainerTitle>
                        <ScheduleShipmentForm index={index} formik={formik} />
                    </div>
                </FormContainer>
            ))}

            <Flex
                style={{ marginBottom: 10, padding: "inherit" }}
                direction={"row-reverse"}
            >
                <Button
                    style={{ width: 190 }}
                    label="Confirm Order"
                    onClick={formik.handleSubmit}
                    showLoader={loading}
                />
                <Button
                    style={{ width: 190, marginRight: 20 }}
                    secondary
                    label="Add New Order"
                    onClick={addMoreItemHandler}
                />
            </Flex>

            <Drawer
                open={drawerOpen}
                setDrawerOpen={(flag) => setDrawerOpen(flag)}
                closeIcon={true}
                title="Payment"
                actionButtons={true}
                cancelButtonText="Cancel"
                actionButtonText="Save"
            >
                <CardDetails
                    cardNumber={"1234 5678 1234 3421"}
                    nameOnCard={"Deepak Pathak"}
                    expiryDate={new Date()}
                    cardImage={masterCard}
                    cardType={"Master Card"}
                />
            </Drawer>
        </ModuleContainer>
    );
}

export default SingleShipment;
