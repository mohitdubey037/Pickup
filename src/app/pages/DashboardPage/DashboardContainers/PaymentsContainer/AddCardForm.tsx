import { Input } from "app/components/Input"
import { Flex } from "app/components/Input/style"
import { Button } from "app/components/Buttons"
import { useFormik } from "formik"
import { cardSchema } from "./cardSchema"
import { Checkbox } from "app/components/Checkbox";
import RadioGroup from "app/components/RadioGroup"

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
        <Flex direction="column" style={{ height: '100%', width: '540px' }}>
            <div>
                <h3>{title}</h3>
                <Flex direction="row">
                    <RadioGroup
                        value={values.cardType}
                        onChange={handleChange}
                        label="Method of payments"
                        options={[
                            { label: "Credit Card", value: "1" },
                            { label: "Debit Card", value: "0" },
                        ]}
                        name={"cardType"}
                        error={touched.cardType && errors.cardType}
                    />
                </Flex>
                <Flex>
                    <Input
                        id="cardNumber"
                        name="cardNumber"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={touched.cardNumber && errors.cardNumber}
                        label="Card Number"
                        placeholder={"**** **** **** ****"}
                    />
                </Flex>
                <Flex direction="row" style={{ gap: '20px', gridGap: '20px' }}>
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
                </Flex>
                <Flex>
                    <Input
                        id="nameOnCard"
                        name="nameOnCard"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={touched.nameOnCard && errors.nameOnCard}
                        label="Name on Card"
                        placeholder={"Start typing"}
                    />
                </Flex>
                <Flex>
                    <Input
                        id="pinCode"
                        name="pinCode"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={touched.pinCode && errors.pinCode}
                        label="Pin Code"
                        placeholder={"1234"}
                    />
                </Flex>
                <Flex>
                    <Input
                        id="nickName"
                        name="nickName"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={touched.nickName && errors.nickName}
                        label="Nickname (optional)"
                        placeholder={"Name your card"}
                    />
                </Flex>
                {enableSave && (
                    <div style={{ display: "flex" }}>
                        <span style={{ padding: "0px 10px 0px 0px" }}>
                            <Checkbox  
                                id="saveCard"
                                name="saveCard"
                                label="Save Card for Future" 
                                onChange={() => setFieldValue("saveCard", !values.saveCard)}
                            />
                        </span>
                        <span style={{ display: "flex" }}>

                        </span>
                    </div>
                )}
            </div>
            <Flex direction="row" justifyContent={'space-between'} style={{ alignItems: 'flex-end' }} >
                <Button secondary style={{ width: 'fit-content', minWidth: '150px' }} onClick={() => setDrawerOpen(false)} label="Cancel"></Button>
                <Button style={{ width: 'fit-content', minWidth: '150px' }} label={submitButtonLabel} onClick={handleSubmit}></Button>
            </Flex>
        </Flex>
    )
}

export default AddCardForm
