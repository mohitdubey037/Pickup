import { FormikValues } from "formik";
import { Typography } from "@material-ui/core";
import AddItemLabel from "app/components/AddItemLabel";
import { Flex } from "app/components/Input/style";
import Select from "app/components/Select";
import { CustomInput } from "../CompanyProfileContainer/style";
import { WEIGHTDIMENSION, DIMENSION2 } from "../../../../../constants";
import { useEffect, useState } from "react";

function DetailsFormItem(props: { formik: FormikValues; index: number, hasDimensions: boolean }) {
    const { handleChange, values, errors, touched, handleBlur, setFieldValue } =
        props.formik;
    const { index } = props;
    const formItem = `shipmentDetails.${index}`;
    const errorItem = errors.shipmentDetails && errors.shipmentDetails[index];
    const toucherItem =
        touched.shipmentDetails && touched.shipmentDetails[index];

    const formItemValue = values.shipmentDetails[index];

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
                                name={`${formItem}.weight`}
                                id={`${formItem}.weight`}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={toucherItem?.weight && errorItem?.weight}
                                label={"Order Weight"}
                                initValue={formItemValue.weight}
                                placeholder={"eg. 100"}
                            />
                        </Flex>
                        <Flex flex={1} left={30}>
                            <Select
                                id={`${formItem}.weightDimension`}
                                name={`${formItem}.weightDimension`}
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
                                    id={`${formItem}.length`}
                                    name={`${formItem}.length`}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    initValue={formItemValue.length}
                                    error={toucherItem?.length && errorItem?.length}
                                    label={"Length"}
                                    placeholder={"Start typing"}
                                />
                            </Flex>
                            <Flex flex={1} left={30}>
                                <CustomInput
                                    id={`${formItem}.width`}
                                    name={`${formItem}.width`}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    error={toucherItem?.width && errorItem?.width}
                                    label={"Width"}
                                    initValue={formItemValue.width}

                                    placeholder={"Start typing"}
                                />
                            </Flex>
                            <Flex flex={1} left={30}>
                                <CustomInput
                                    id={`${formItem}.height`}
                                    name={`${formItem}.height`}
                                    onBlur={handleBlur}
                                    initValue={formItemValue.height}

                                    onChange={handleChange}
                                    error={toucherItem?.height && errorItem?.height}
                                    label={"Height"}
                                    placeholder={"Start typing"}
                                />
                            </Flex>
                            <Flex flex={1} left={30}>
                                <Select
                                    id={`${formItem}.sizeDimension`}
                                    name={`${formItem}.sizeDimension`}
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
                                id={`${formItem}.quantity`}
                                name={`${formItem}.quantity`}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={toucherItem?.quantity && errorItem?.quantity}
                                label={"Pieces"}
                                initValue={formItemValue.quantity}

                                placeholder={"eg. 10"}
                            />
                        </Flex>
                    </Flex>
                    <Flex flex={1} left={30}>
                        <CustomInput
                            id={`${formItem}.orderCost`}
                            name={`${formItem}.orderCost`}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={toucherItem?.orderCost && errorItem?.orderCost}
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
                        id={`${formItem}.description`}
                        name={`${formItem}.description`}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={toucherItem?.description && errorItem?.description}
                        label={"Order Description"}
                        placeholder={"Add a description of the order"}
                        type={"textarea"}
                        value={values[`${formItem}.description`]}
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
