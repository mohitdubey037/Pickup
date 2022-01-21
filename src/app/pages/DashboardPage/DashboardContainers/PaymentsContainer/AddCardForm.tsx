import { Input } from "app/components/Input"
import { Flex } from "app/components/Input/style"
import { Button } from "app/components/Buttons"
import { useFormik } from "formik"
import { cardSchema } from "./cardSchema"
import { Checkbox } from "app/components/Checkbox";
import RadioGroup from "app/components/RadioGroup"
import { Box } from "@material-ui/core"
import { DrawerFooter } from "app/components/Drawer/style"

const AddCardForm = ({ title = '', setDrawerOpen, saveAction, enableSave=false, submitButtonLabel="Save" }) => {

    const {
        values,
        handleChange,
        errors,
        touched,
        handleBlur,
        handleSubmit,
        setFieldValue
    } = useFormik({
        initialValues: { cardType: "1", cardNumber: "", expiryDate: "", cvc: "", nameOnCard: "", pinCode: "", nickName: "", saveCard: false },
        validationSchema: cardSchema,
        onSubmit: (values) => saveAction(values),
    });

    return (
        <Box>
                    <Input
                        id="cardNumber"
                        name="cardNumber"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={touched.cardNumber && errors.cardNumber}
                        label="Card Number"
                        placeholder={"**** **** **** ****"}
                    />
                    <Input
                        id="expiryDate"
                        name="expiryDate"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={touched.expiryDate && errors.expiryDate}
                        label="Expiration Date"
                        placeholder={"MM/YY"}
                    />
                    <Input
                        id="cvc"
                        name="cvc"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={touched.cvc && errors.cvc}
                        label="CVC"
                        placeholder={"CVC"}
                    />
                    <Input
                        id="nameOnCard"
                        name="nameOnCard"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={touched.nameOnCard && errors.nameOnCard}
                        label="Name on Card"
                        placeholder={"Start typing"}
                    />
                    <Input
                        id="pinCode"
                        name="pinCode"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={touched.pinCode && errors.pinCode}
                        label="Pin Code"
                        placeholder={"1234"}
                    />
                    <Input
                        id="nickName"
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
                <Button secondary size="medium" onClick={() => setDrawerOpen(false)} label="Cancel"></Button>
                <Button size="medium" label={submitButtonLabel} onClick={handleSubmit}></Button>
            </DrawerFooter>
        </Box>
    )
}

export default AddCardForm
