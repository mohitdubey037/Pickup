import { FC, useEffect, useState } from "react";
import { useFormik } from "formik";

import { Input } from "app/components/Input";
import { Button } from "app/components/Buttons";
import { Checkbox } from "app/components/Checkbox";
import { DrawerFooter, DrawerInnerContent } from "app/components/Drawer/style";
import { cardSchema } from "./cardSchema";
import { IndividualCard } from "./PaymentsCardContainer";
import { addNewCardService } from "services/PaymentServices";
import { useDispatch } from "react-redux";
import { actions } from "store/reducers/PaymentReducer";
import { addChildDetailsCard } from "services/ChildAccount";

interface AddCardFromProps {
    setDrawerOpen: (val: boolean) => void;
    saveAction?: () => void;
    getSavedCard?: (data) => void;
    enableSave?: boolean;
    submitButtonLabel?: string;
    cardData?: IndividualCard;
    userId?: string
}

const AddCardForm: FC<AddCardFromProps> = ({
    setDrawerOpen,
    getSavedCard,
    enableSave = false,
    submitButtonLabel = "Save",
    cardData = {},
    userId,
    saveAction
}) => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);

    const {
        values,
        handleChange,
        errors,
        touched,
        handleBlur,
        handleSubmit,
        setFieldValue,
        validateForm,
        isValid
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
            handleAddNewCard({
                ...values,
                cardNumber: values.cardNumber.replace(/ /g, ""),
            }),
    });

    useEffect(() => {
        (() => validateForm())();
      }, []);

    const handleAddNewCard = async (values) => {
        setLoading(true);
        if (!userId) {
            const body = {
                name: values.nameOnCard,
                number: values.cardNumber,
                expiryMonth: values.expiryDate.split("/")[0],
                expiryYear: values.expiryDate.split("/")[1],
                cvd: values.cvc,
            };
            const res: any = await addNewCardService(body);
            if (res.error === null) {
                dispatch(actions.getCards());
                setDrawerOpen(false);
                getSavedCard?.(res.response.data.data);
            }
        }
        else {
            const body = {
                name: values.nameOnCard,
                number: values.cardNumber,
                expiryMonth: values.expiryDate.split("/")[0],
                expiryYear: values.expiryDate.split("/")[1],
                cvd: values.cvc,
                userId: userId
            }
            const res: any = await addChildDetailsCard(body);
            if (res.error === null) {
                setDrawerOpen(false);
                saveAction?.();
            }
        }
        setLoading(false);
    };

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
                    disabled={!(isValid)}
                    label={submitButtonLabel}
                    onClick={handleSubmit}
                    showLoader={loading}
                />
            </DrawerFooter>
        </>
    );
};

export default AddCardForm;
