import { FormikValues } from "formik";
import { Box, Grid } from "@material-ui/core";

import Select from "app/components/Select";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import { H4 } from "app/components/Typography/Typography";
import { CustomInput } from "../CompanyProfileContainer/style";
import { WEIGHTDIMENSION, DIMENSION2 } from "../../../../../constants";
import { ItemDetailsBox } from "./style";

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
            <Box mb={3} mt={3}>
                <Box display="flex" justifyContent="space-between">
                    <H4 text={`Item #${index + 1}`} className="heading" />
                    {props?.formik?.values?.orders?.[props.orderIndex]
                        .shipmentDetails?.length > 1 && (
                        <Box
                            role="button"
                            tabIndex={0}
                            onKeyPress={(e) =>
                                e.key === "Enter" && deleteItemHandler(index)
                            }
                            onClick={() => deleteItemHandler(index)}
                        >
                            {/* <img src={remove} alt="delete" /> */}
                            <H4 text="Delete" className="delete" />
                        </Box>
                    )}
                </Box>
            </Box>

            {props.hasDimensions && (
                <Box mb={3} mt={5}>
                    <GridContainer container spacing={6}>
                        <Grid item sm={6} xs={12}>
                            <GridContainer container spacing={2}>
                                <Grid item xs={6} lg={8}>
                                    <CustomInput
                                        name={`${formFieldName}.${formItem}.weight`}
                                        id={`${formFieldName}.${formItem}.weight`}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        error={
                                            toucherItem?.weight &&
                                            errorItem?.weight
                                        }
                                        label={"Order Weight"}
                                        initValue={formItemValue.weight}
                                        value={formItemValue.weight}
                                        placeholder={"eg. 100"}
                                        validate
                                        required
                                    />
                                </Grid>
                                <Grid item xs={6} lg={4}>
                                    <Select
                                        id={`${formFieldName}.${formItem}.weightDimension`}
                                        name={`${formFieldName}.${formItem}.weightDimension`}
                                        label={"Unit"}
                                        value={Number(
                                            formItemValue.weightDimension
                                        )}
                                        onSelect={handleChange}
                                        options={WEIGHTDIMENSION}
                                        required
                                    />
                                    {errorItem?.weightDimension &&
                                        toucherItem?.weightDimension && (
                                            <p
                                                style={{
                                                    margin: 0,
                                                    color: "#c94c43",
                                                }}
                                            >
                                                {errorItem?.weightDimension}
                                            </p>
                                        )}
                                </Grid>
                            </GridContainer>
                        </Grid>

                        <Grid item lg={6} xs={12}>
                            <GridContainer container spacing={2}>
                                <Grid item xs={6} sm={3}>
                                    <CustomInput
                                        id={`${formFieldName}.${formItem}.length`}
                                        name={`${formFieldName}.${formItem}.length`}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        initValue={formItemValue.length}
                                        value={formItemValue.length}
                                        error={
                                            toucherItem?.length &&
                                            errorItem?.length
                                        }
                                        label={"Length"}
                                        placeholder={"eg. 10"}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <CustomInput
                                        id={`${formFieldName}.${formItem}.width`}
                                        name={`${formFieldName}.${formItem}.width`}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        error={
                                            toucherItem?.width &&
                                            errorItem?.width
                                        }
                                        label={"Width"}
                                        initValue={formItemValue.width}
                                        value={formItemValue.width}
                                        placeholder={"eg. 10"}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <CustomInput
                                        id={`${formFieldName}.${formItem}.height`}
                                        name={`${formFieldName}.${formItem}.height`}
                                        onBlur={handleBlur}
                                        initValue={formItemValue.height}
                                        value={formItemValue.height}
                                        onChange={handleChange}
                                        error={
                                            toucherItem?.height &&
                                            errorItem?.height
                                        }
                                        label={"Height"}
                                        placeholder={"eg. 10"}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <Select
                                        id={`${formFieldName}.${formItem}.sizeDimension`}
                                        name={`${formFieldName}.${formItem}.sizeDimension`}
                                        label={"Unit"}
                                        value={Number(
                                            formItemValue.sizeDimension
                                        )}
                                        onSelect={handleChange}
                                        options={DIMENSION2}
                                        required
                                    />
                                </Grid>
                            </GridContainer>
                        </Grid>
                    </GridContainer>
                </Box>
            )}

            <Box>
                <GridContainer container spacing={2}>
                    <Grid item xs={6}>
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
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomInput
                            id={`${formFieldName}.${formItem}.description`}
                            name={`${formFieldName}.${formItem}.description`}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={
                                toucherItem?.description &&
                                errorItem?.description
                            }
                            label={"Order Description"}
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
