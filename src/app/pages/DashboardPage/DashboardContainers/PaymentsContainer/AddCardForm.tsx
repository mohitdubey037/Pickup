import React from "react";
import { useFormik } from "formik";
import { Box } from "@material-ui/core";

import { Input } from "app/components/Input";
import { Button } from "app/components/Buttons";
import { Checkbox } from "app/components/Checkbox";
import { DrawerFooter } from "app/components/Drawer/style";
import { cardSchema } from "./cardSchema";
import { IndividualCard } from "./PaymentsCardContainer";

interface AddCardFromProps {
    title?: string;
    setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
    saveAction: (data) => void;
    enableSave?: boolean;
    submitButtonLabel?: string;
    cardData?: IndividualCard;
}

const AddCardForm: React.FC<AddCardFromProps> = ({
    title = "",
    setDrawerOpen,
    saveAction,
    enableSave = false,
    submitButtonLabel = "Save",
    cardData = {},
}) => {
    const {
        values,
        handleChange,
        errors,
        touched,
        handleBlur,
        handleSubmit,
        setFieldValue,
    } = useFormik({
        initialValues: {
            cardType: "1",
            cardNumber: cardData.number || "",
            expiryDate: `${
                cardData.expiry_month ? cardData.expiry_month + "/" : ""
            }${cardData.expiry_year || ""}`,
            cvc: "",
            nameOnCard: cardData.name || "",
            pinCode: "",
            nickName: "",
            saveCard: false,
        },
        validationSchema: cardSchema,
        onSubmit: (values) =>
            saveAction({
                ...values,
                cardNumber: values.cardNumber.replace(/ /g, ""),
            }),
    });

    return (
        <Box>
            <Input
                id="cardNumber"
                initValue={values.cardNumber}
                name="cardNumber"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.cardNumber && errors.cardNumber}
                label="Card Number"
                placeholder={"**** **** **** ****"}
                type="mask"
                maskProps={{
                    mask: "9999 9999 9999 9999",
                    maskPlaceholder: null,
                }}
            />
            <Input
                id="expiryDate"
                name="expiryDate"
                initValue={values.expiryDate}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.expiryDate && errors.expiryDate}
                label="Expiration Date"
                placeholder={"MM/YY"}
                type="mask"
                maskProps={{
                    mask: "99/99",
                    maskPlaceholder: null,
                }}
            />
            <Input
                id="cvc"
                initValue={values.cvc}
                name="cvc"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.cvc && errors.cvc}
                label="CVC"
                placeholder={"CVC"}
                type="mask"
                maskProps={{
                    mask: "9999",
                    maskPlaceholder: null,
                }}
            />
            <Input
                id="nameOnCard"
                initValue={values.nameOnCard}
                name="nameOnCard"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.nameOnCard && errors.nameOnCard}
                label="Name on Card"
                placeholder={"John Doe"}
            />
            <Input
                id="pinCode"
                initValue={values.pinCode}
                name="pinCode"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.pinCode && errors.pinCode}
                label="Pin Code"
                placeholder={"1234"}
                type="mask"
                maskProps={{
                    mask: "9999",
                    maskPlaceholder: null,
                }}
            />
            <Input
                id="nickName"
                initValue={values.nickName}
                name="nickName"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.nickName && errors.nickName}
                label="Nickname (optional)"
                placeholder={"Name your card"}
            />
            {enableSave && (
                <Checkbox
                    id="saveCard"
                    name="saveCard"
                    label="Save Card for Future"
                    onChange={() => setFieldValue("saveCard", !values.saveCard)}
                />
            )}
            <DrawerFooter>
                <Button
                    secondary
                    size="medium"
                    onClick={() => setDrawerOpen(false)}
                    label="Cancel"
                />
                <Button
                    size="medium"
                    label={submitButtonLabel}
                    onClick={handleSubmit}
                />
            </DrawerFooter>
        </Box>
    );
};

export default AddCardForm;
