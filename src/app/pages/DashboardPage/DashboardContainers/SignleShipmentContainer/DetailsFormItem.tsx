import { FormikValues } from "formik";
import { Typography } from "@material-ui/core";
import AddItemLabel from "app/components/AddItemLabel";
import { Flex } from "app/components/Input/style";
import Select from "app/components/Select";
import { CustomInput } from "../CompanyProfileContainer/style";
import { WEIGHTDIMENSION, DIMENSION2 } from "../../../../../constants";
import { useEffect, useState } from "react";

function DetailsFormItem(props: { formik: FormikValues; index: number, orderIndex: number, hasDimensions: boolean }) {
    const { handleChange, values, errors, touched, handleBlur, setFieldValue } =
        props.formik;
    const { index } = props;
    const formItem = `shipmentDetails.${index}`;
    const errorItem = errors.shipmentDetails && errors.shipmentDetails[index];
    const toucherItem =
        touched.shipmentDetails && touched.shipmentDetails[index];

    const formFieldName = `orders.${props.orderIndex}`;
    const singleFormValues = values.orders[props.orderIndex];
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
                                error={toucherItem?.[`${formFieldName}.${formItem}.weight`] && errorItem?.weight[`${formFieldName}.${formItem}.weight`]}
                                label={"Order Weight"}
                                initValue={formItemValue.weight}
                                placeholder={"eg. 100"}
                            />
                        </Flex>
                        <Flex flex={1} left={30}>
                            <Select
                                id={`${formFieldName}.${formItem}.weightDimension`}
                                name={`${formFieldName}.${formItem}.weightDimension`}
                                label={"Unit"}
                                value={formItemValue.weightDimension}
                                onSelect={handleChange}
                                options={WEIGHTDIMENSION}
                            />
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
                                    error={toucherItem?.[`${formFieldName}.${formItem}.length`] && errorItem?.[`${formFieldName}.${formItem}.length`]}
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
                                    error={toucherItem?.[`${formFieldName}.${formItem}.width`] && errorItem?.[`${formFieldName}.${formItem}.width`]}
                                    label={"Width"}
                                    initValue={formItemValue.width}

                                    placeholder={"Start typing"}
                                />
                            </Flex>
                            <Flex flex={1} left={30}>
                                <CustomInput
                                    id={`${formFieldName}.${formItem}.height`}
                                    name={`${formFieldName}.${formItem}.height`}
                                    onBlur={handleBlur}
                                    initValue={formItemValue.height}

                                    onChange={handleChange}
                                    error={toucherItem?.[`${formFieldName}.${formItem}.height`] && errorItem?.[`${formFieldName}.${formItem}.height`]}
                                    label={"Height"}
                                    placeholder={"Start typing"}
                                />
                            </Flex>
                            <Flex flex={1} left={30}>
                                <Select
                                    id={`${formFieldName}.${formItem}.sizeDimension`}
                                    name={`${formFieldName}.${formItem}.sizeDimension`}
                                    label={"Unit"}
                                    value={formItemValue.sizeDimension}
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
                                error={toucherItem?.[`${formFieldName}.${formItem}.quantity`] && errorItem?.[`${formFieldName}.${formItem}.quantity`]}
                                label={"Pieces"}
                                initValue={formItemValue.quantity}

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
                            error={toucherItem?.[`${formFieldName}.${formItem}.orderCost`] && errorItem?.[`${formFieldName}.${formItem}.orderCost`]}
                            label={"Order Cost"}
                            initValue={formItemValue.orderCost}
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
                        error={toucherItem?.[`${formFieldName}.${formItem}.description`] && errorItem?.[`${formFieldName}.${formItem}.description`]}
                        label={"Order Description"}
                        placeholder={"Add a description of the order"}
                        type={"textarea"}
                        value={singleFormValues[`${formFieldName}.${formItem}.description`]}
                        initValue={formItemValue.description}

                    />
                </Flex>

                <Flex top={20}>
                    <AddItemLabel text={"Add order Picture"} />
                </Flex>
            </Flex>
        </div>
    );
}

export default DetailsFormItem;
