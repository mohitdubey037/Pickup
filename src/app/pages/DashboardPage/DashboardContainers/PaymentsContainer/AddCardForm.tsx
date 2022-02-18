import React, { useEffect } from "react";
import { useFormik } from "formik";

import { Input } from "app/components/Input";
import { Button } from "app/components/Buttons";
import { Checkbox } from "app/components/Checkbox";
import { DrawerFooter, DrawerInnerContent } from "app/components/Drawer/style";
import { cardSchema } from "./cardSchema";
import { IndividualCard } from "./PaymentsCardContainer";

interface AddCardFromProps {
    setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
    saveAction: (data) => void;
    enableSave?: boolean;
    submitButtonLabel?: string;
    cardData?: IndividualCard;
}

const AddCardForm: React.FC<AddCardFromProps> = ({
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
            expiryDate: `${cardData.exp_month ? cardData.exp_month + "/" : ""}${
                cardData.exp_year || ""
            }`,
            cvc: "",
            nameOnCard: cardData.name || "",
            // pinCode: "",
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

    useEffect(() => {
        console.log(values);
    })

    return (
        <>
            <DrawerInnerContent>
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
                {/* <Input
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
            /> */}
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
                        onChange={() =>
                            setFieldValue("saveCard", !values.saveCard)
                        }
                    />
                )}
            </DrawerInnerContent>

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
        </>
    );
};

export default AddCardForm;
