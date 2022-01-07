import { FormikValues } from "formik";
import { Typography } from "@material-ui/core";

import { Flex } from "app/components/Input/style";
import Select from "app/components/Select";
import { CustomInput } from "../CompanyProfileContainer/style";
import { WEIGHTDIMENSION, DIMENSION2 } from "../../../../../constants";

function DetailsFormItem(props: { formik: FormikValues; index: number, orderIndex: number, hasDimensions: boolean }) {
    const { handleChange, values, errors, touched, handleBlur } =
        props.formik;
    const { index } = props;
    const formItem = `shipmentDetails.${index}`;
    
    const formFieldName = `orders.${props.orderIndex}`;
    const singleFormValues = values.orders[props.orderIndex];
    const singleFormErrors = errors?.orders?.[index];
    const singleFormTouched = touched?.orders?.[index];

    const errorItem = singleFormErrors?.shipmentDetails?.[index];
    const toucherItem = singleFormTouched?.shipmentDetails?.[index];

    console.log("toucherItem", errorItem)

    const formItemValue = singleFormValues.shipmentDetails[index];

    return (
        <div style={{ marginTop: "48px" }}>
            <Typography className="typography" variant="h1" component="h3">
                Item#{index + 1}
            </Typography>
            <Flex direction={"column"}>
                <Flex top={20}>
                    <Flex flex={1}>
                        <Flex flex={1}>
                            <CustomInput
                                name={`${formFieldName}.${formItem}.weight`}
                                id={`${formFieldName}.${formItem}.weight`}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={toucherItem?.weight && errorItem?.weight}
                                label={"Order Weight"}
                                initValue={formItemValue.weight}
                                value={formItemValue.weight}
                                placeholder={"eg. 100"}
                                validate
                            />
                        </Flex>
                        <Flex flex={1} left={30} direction="column" style={{ alignItems: "start"}}>
                            <Select
                                id={`${formFieldName}.${formItem}.weightDimension`}
                                name={`${formFieldName}.${formItem}.weightDimension`}
                                label={"Unit"}
                                value={Number(formItemValue.weightDimension)}
                                onSelect={handleChange}
                                options={WEIGHTDIMENSION}
                            />
                            {errorItem?.weightDimension && toucherItem?.weightDimension && (
                                <p style={{ margin: 0, color: "red" }}>{errorItem?.weightDimension}</p>
                            )}
                        </Flex>
                    </Flex>

                    {props.hasDimensions && (
                        <Flex flex={1} left={30}>
                            <Flex flex={1}>
                                <CustomInput
                                    id={`${formFieldName}.${formItem}.length`}
                                    name={`${formFieldName}.${formItem}.length`}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    initValue={formItemValue.length}
                                    value={formItemValue.length}
                                    error={toucherItem?.length && errorItem?.length}
                                    label={"Length"}
                                    placeholder={"Start typing"}
                                />
                            </Flex>
                            <Flex flex={1} left={30}>
                                <CustomInput
                                    id={`${formFieldName}.${formItem}.width`}
                                    name={`${formFieldName}.${formItem}.width`}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    error={toucherItem?.width && errorItem?.width}
                                    label={"Width"}
                                    initValue={formItemValue.width}
                                    value={formItemValue.width}
                                    placeholder={"Start typing"}
                                />
                            </Flex>
                            <Flex flex={1} left={30}>
                                <CustomInput
                                    id={`${formFieldName}.${formItem}.height`}
                                    name={`${formFieldName}.${formItem}.height`}
                                    onBlur={handleBlur}
                                    initValue={formItemValue.height}
                                    value={formItemValue.height}
                                    onChange={handleChange}
                                    error={toucherItem?.height && errorItem?.height}
                                    label={"Height"}
                                    placeholder={"Start typing"}
                                />
                            </Flex>
                            <Flex flex={1} left={30}>
                                <Select
                                    id={`${formFieldName}.${formItem}.sizeDimension`}
                                    name={`${formFieldName}.${formItem}.sizeDimension`}
                                    label={"Unit"}
                                    value={Number(formItemValue.sizeDimension)}
                                    onSelect={handleChange}
                                    options={DIMENSION2}
                                />
                            </Flex>
                        </Flex>
                    )}
                </Flex>
                <Flex top={20}>
                    <Flex flex={1}>
                        <Flex flex={1}>
                            <CustomInput
                                id={`${formFieldName}.${formItem}.quantity`}
                                name={`${formFieldName}.${formItem}.quantity`}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={toucherItem?.quantity && errorItem?.quantity}
                                label={"Pieces"}
                                initValue={formItemValue.quantity}
                                value={formItemValue.quantity}
                                placeholder={"eg. 10"}
                            />
                        </Flex>
                    </Flex>
                    <Flex flex={1} left={30}>
                        <CustomInput
                            id={`${formFieldName}.${formItem}.orderCost`}
                            name={`${formFieldName}.${formItem}.orderCost`}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={toucherItem?.orderCost && errorItem?.orderCost}
                            label={"Order Cost"}
                            initValue={formItemValue.orderCost}
                            value={formItemValue.orderCost}
                            placeholder={"eg. $300"}
                        />
                    </Flex>
                    <Flex flex={1} left={30}></Flex>
                    <Flex flex={1} left={30}></Flex>
                    <Flex flex={1} left={30}></Flex>
                </Flex>

                <Flex top={20}>
                    <CustomInput
                        id={`${formFieldName}.${formItem}.description`}
                        name={`${formFieldName}.${formItem}.description`}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={toucherItem?.description && errorItem?.description}
                        label={"Order Description"}
                        placeholder={"Add a description of the order"}
                        type={"textarea"}
                        value={formItemValue.description}
                        initValue={formItemValue.description}

                    />
                </Flex>
            </Flex>
        </div>
    );
}

export default DetailsFormItem;
