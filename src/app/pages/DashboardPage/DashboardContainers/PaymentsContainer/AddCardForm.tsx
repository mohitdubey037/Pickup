import { Input } from "app/components/Input"
import { Flex } from "app/components/Input/style"
import { Button } from "app/components/Buttons"
import { useFormik } from "formik"
import { cardSchema } from "./cardSchema"
import RadioGroup from "app/components/RadioGroup"

const AddCardForm = ({ title='', setDrawerOpen, saveAction }) => {

    const {
        handleChange,
        errors,
        touched,
        handleBlur,
        handleSubmit,
      } = useFormik({
        initialValues: { cardType: "1", cardNumber: "", expiryDate: "", cvc: "", nameOnCard: "", pinCode: "", nickName: "" },
        validationSchema: cardSchema,
        onSubmit: (values) => saveAction(values),
      });

    return (
            <Flex direction="column" style={{ height: '100%', width: '540px' }}>
                <div>
                    <h2>{title}</h2>
                    <h3>Type of card</h3>
                    <Flex direction="row">
                        <RadioGroup
                            options={[
                            { label: "Credit Card", value: "1" },
                            { label: "Debit Card", value: "0" },
                            ]}
                            name={"cardType"}
                            error={touched.cardType && errors.cardType}
                        />
                    </Flex>
                    <Flex>
                        <Input onChange={handleChange} onBlur={handleBlur} error={touched.cardNumber && errors.cardNumber} id="cardNumber" name="cardNumber" label="Card Number" />
                    </Flex>
                    <Flex direction="row" style={{ gap: '20px', gridGap: '20px' }}>
                        <Input onChange={handleChange} onBlur={handleBlur} error={touched.expiryDate && errors.expiryDate} id="expiryDate" name="expiryDate" label="Expiration Date" />
                        <Input onChange={handleChange} onBlur={handleBlur} error={touched.cvc && errors.cvc} id="cvc" name="cvc" label="CVC" value="1234567890"/>
                    </Flex>
                    <Flex>
                        <Input onChange={handleChange} onBlur={handleBlur} error={touched.nameOnCard && errors.nameOnCard} id="nameOnCard" name="nameOnCard" label="Name on Card" />
                    </Flex>
                    <Flex>
                        <Input onChange={handleChange} onBlur={handleBlur} error={touched.pinCode && errors.pinCode} id="pinCode" name="pinCode" label="Pin Code" />
                    </Flex>
                    <Flex>
                        <Input onChange={handleChange} onBlur={handleBlur} error={touched.nickName && errors.nickName} id="nickName" name="nickName" label="Nickname (optional)" />
                    </Flex>
                </div>
                <Flex direction="row" justifyContent={'space-between'} style={{ alignItems: 'flex-end' }} >
                    <Button secondary style={{ width: '150px' }} onClick={() => setDrawerOpen(false)} label="Cancel"></Button>
                    <Button style={{ width: '150px' }} label="Save" onClick={handleSubmit} ></Button>
                </Flex>
            </Flex>
    )
}

export default AddCardForm
