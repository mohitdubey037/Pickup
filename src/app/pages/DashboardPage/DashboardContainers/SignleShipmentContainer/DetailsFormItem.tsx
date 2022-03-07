import { FormikValues } from "formik";
import { Box, Grid } from "@material-ui/core";

import Select from "app/components/Select";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import { H3 } from "app/components/Typography/Typography";
// import { Input } from "../CompanyProfileContainer/style";
import { WEIGHTDIMENSION, DIMENSION2 } from "../../../../../constants";
import { ItemDetailsBox } from "./style";
import { CustomLink } from "app/components/Typography/Links";
import { Input } from "app/components/Input";

function DetailsFormItem(props: {
    formik: FormikValues;
    index: number;
    orderIndex: number;
    hasDimensions: boolean;
}) {
    const { handleChange, values, errors, touched, handleBlur } = props.formik;
    const { index } = props;
    const formItem = `shipmentDetails.${index}`;

    const formFieldName = `orders.${props.orderIndex}`;
    const singleFormValues = values.orders[props.orderIndex];
    const singleFormErrors = errors?.orders?.[index];
    const singleFormTouched = touched?.orders?.[index];

    const errorItem = singleFormErrors?.shipmentDetails?.[index];
    const toucherItem = singleFormTouched?.shipmentDetails?.[index];

    const formItemValue = singleFormValues.shipmentDetails[index];

    const deleteItemHandler = (idx: number) => {
        const orderDetails = [...props.formik.values.orders];
        orderDetails[props.orderIndex].shipmentDetails.splice(idx, 1);
        props.formik.setFieldValue("orders", orderDetails);
    };

    return (
        <ItemDetailsBox>
            <Box display="flex" justifyContent="space-between" mt={3} mb={4}>
                <H3 text={`Item #${index + 1}`} fontFamily="bold" />
                {props?.formik?.values?.orders?.[props.orderIndex]
                    .shipmentDetails?.length > 1 && (
                    <CustomLink
                        label="Delete"
                        redlink
                        onClick={() => deleteItemHandler(index)}
                    />
                )}
            </Box>

            {props.hasDimensions && (
                <GridContainer container spacing={3}>
                    <Grid item sm={6} xs={12}>
                        <GridContainer container spacing={1}>
                            <Grid item xs={6} lg={9}>
                                <Input
                                    name={`${formFieldName}.${formItem}.weight`}
                                    id={`${formFieldName}.${formItem}.weight`}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    error={
                                        toucherItem?.weight && errorItem?.weight
                                    }
                                    label={"Item Weight"}
                                    initValue={formItemValue.weight}
                                    value={formItemValue.weight}
                                    placeholder={"eg. 100"}
                                    maxLength={8}
                                    validate
                                    required
                                />
                            </Grid>
                            <Grid item xs={6} lg={3}>
                                <Select
                                    id={`${formFieldName}.${formItem}.weightDimension`}
                                    name={`${formFieldName}.${formItem}.weightDimension`}
                                    label={"Unit"}
                                    placeholder={"Select Unit"}
                                    options={WEIGHTDIMENSION}
                                    value={Number(
                                        formItemValue.weightDimension
                                    )}
                                    onChange={handleChange}
                                    error={
                                        toucherItem?.weightDimension &&
                                        errorItem?.weightDimension
                                    }
                                    required
                                />
                            </Grid>
                        </GridContainer>
                    </Grid>

                    <Grid item lg={6} xs={12}>
                        <GridContainer container spacing={1}>
                            <Grid item xs={6} sm={3}>
                                <Input
                                    id={`${formFieldName}.${formItem}.length`}
                                    name={`${formFieldName}.${formItem}.length`}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    initValue={formItemValue.length}
                                    value={formItemValue.length}
                                    error={
                                        toucherItem?.length && errorItem?.length
                                    }
                                    label={"Length"}
                                    placeholder={"eg. 10"}
                                    maxLength={8}
                                    required
                                />
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Input
                                    id={`${formFieldName}.${formItem}.width`}
                                    name={`${formFieldName}.${formItem}.width`}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    error={
                                        toucherItem?.width && errorItem?.width
                                    }
                                    label={"Width"}
                                    initValue={formItemValue.width}
                                    value={formItemValue.width}
                                    placeholder={"eg. 10"}
                                    maxLength={8}
                                    required
                                />
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Input
                                    id={`${formFieldName}.${formItem}.height`}
                                    name={`${formFieldName}.${formItem}.height`}
                                    onBlur={handleBlur}
                                    initValue={formItemValue.height}
                                    value={formItemValue.height}
                                    onChange={handleChange}
                                    error={
                                        toucherItem?.height && errorItem?.height
                                    }
                                    label={"Height"}
                                    placeholder={"eg. 10"}
                                    maxLength={8}
                                    required
                                />
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Select
                                    id={`${formFieldName}.${formItem}.sizeDimension`}
                                    name={`${formFieldName}.${formItem}.sizeDimension`}
                                    label={"Unit"}
                                    placeholder={"Select Unit"}
                                    options={DIMENSION2}
                                    value={Number(formItemValue.sizeDimension)}
                                    onChange={handleChange}
                                    error={
                                        toucherItem?.sizeDimension &&
                                        errorItem?.sizeDimension
                                    }
                                    required
                                />
                            </Grid>
                        </GridContainer>
                    </Grid>
                </GridContainer>
            )}

            <Box>
                <GridContainer container spacing={3}>
                    <Grid item xs={6}>
                        <Input
                            id={`${formFieldName}.${formItem}.quantity`}
                            name={`${formFieldName}.${formItem}.quantity`}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={toucherItem?.quantity && errorItem?.quantity}
                            label={"Pieces"}
                            initValue={formItemValue.quantity}
                            value={formItemValue.quantity}
                            placeholder={"eg. 10"}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            id={`${formFieldName}.${formItem}.description`}
                            name={`${formFieldName}.${formItem}.description`}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={
                                toucherItem?.description &&
                                errorItem?.description
                            }
                            label={"Item Description"}
                            placeholder={"Add a description of the order"}
                            type={"textarea"}
                            value={formItemValue.description}
                            initValue={formItemValue.description}
                        />
                    </Grid>
                </GridContainer>
            </Box>
        </ItemDetailsBox>
    );
}

export default DetailsFormItem;
