import { useEffect, useState } from "react";
import { FormikValues } from "formik";
import { Box, Grid } from "@material-ui/core";

import RadioGroup from "app/components/RadioGroup";
import SelectNew from "app/components/Select/SelectNew";
import AddImage from "app/components/AddImage";
import { GridContainer } from "app/components/GridSpacing/GridSpacing";
import { showToast } from "utils";
import {
    getCategoryList,
    imageUploadService,
} from "services/SingleShipmentServices";
import DetailsFormItem from "./DetailsFormItem";
import { DROP_OPTION, FRAGILE_OPTION } from "../../../../../constants";
import { CustomInput } from "../CompanyProfileContainer/style";
import { OrderImage, OrderImageWrapper, Remove } from "./style";
import { remove } from "../../../../assets/Icons";

interface SelectBoardType {
    categoryId: number;
    createdAt: string;
    createdBy: number;
    description: string;
    icon: string;
    name: string;
    selectedIcon: string;
    setDimension: boolean;
    status: number;
    typeId: number;
    updatedAt: string;
    updatedBy: number;
}

function DetailsForm(props: {
    formik: FormikValues;
    noOfItem: number;
    index: number;
    disabled?: boolean;
}) {
    const {
        formik: { values, handleBlur, setFieldValue, errors, touched },
        disabled,
    } = props;

    const formFieldName = `orders.${props.index}`;
    const singleFormValues = values.orders[props.index];
    const singleFormErrors = errors?.orders?.[props.index];
    const singleFormTouched = touched?.orders?.[props.index];

    const [categoryList, setCategoryList] = useState<SelectBoardType[]>([]);
    // const [selectedImage, setSelectedImage] = useState<null | string>(null)

    useEffect(() => {
        (async () => {
            const response = await getCategoryList();
            if (response.success && response.response) {
                const data = response.response as { data: any };
                setCategoryList(data.data.data);
            }
        })();
    }, []);

    const hasDimensions = () => {
        const selectedCategory = categoryList.find(
            (category) =>
                category.categoryId ===
                Number(singleFormValues.categoryId.categoryId)
        );
        return selectedCategory?.setDimension || false;
    };

    const changeHandler = async (e) => {
        const formData = new FormData();
        const image = e.target.files[0];
        formData.append("document", image, image.name);
        const res: { response: any; error: any } = await imageUploadService(
            formData
        );
        if (res.error) {
            showToast(res.error.message, "error");
        } else {
            setFieldValue(
                `${formFieldName}.picture`,
                res?.response?.data?.data || ""
            );
            // setSelectedImage(res?.response?.data?.data)
        }
    };

    const imageHandler = (value) => {
        setFieldValue(`${formFieldName}.picture`, value || "");
    };

    const updateCategoryHandler = (name: string, value: number) => {
        const newValue = categoryList.find((item) => item.categoryId === value);
        if (newValue) {
            // updateAllFieldsHandler(name, newValue);
            if (
                !newValue.setDimension &&
                singleFormValues.shipmentDetails.length > 0
            ) {
                let tempItems = singleFormValues.shipmentDetails.map((item) => {
                    return {
                        ...item,
                        height: "",
                        length: "",
                        width: "",
                        weight: "",
                        sizeDimension: "",
                        weightDimension: "",
                    };
                });
                setFieldValue(`${formFieldName}.shipmentDetails`, tempItems);
            }
            setFieldValue(`${formFieldName}.${name}`, newValue);
        }
    };

    // const updateAllFieldsHandler = (
    //     name: string,
    //     value: string | number | SelectBoardType
    // ) => {
    //     values.orders.forEach((item, idx) => {
    //         setFieldValue(`orders.${idx}.${name}`, value);
    //     });
    // };

    return (
        <Box mt={4}>
            <GridContainer container spacing={3}>
                <Grid item sm={6} xs={12}>
                    <SelectNew
                        id={`${formFieldName}.categoryId`}
                        name={`${formFieldName}.categoryId`}
                        label={"Category"}
                        placeholder={"Select Category"}
                        options={
                            categoryList
                                ? categoryList.map((option) => ({
                                      value: option.categoryId,
                                      label: option.name,
                                  }))
                                : []
                        }
                        value={Number(singleFormValues?.categoryId?.categoryId)}
                        onChange={(e) =>
                            updateCategoryHandler("categoryId", e.target.value)
                        }
                        error={
                            singleFormTouched?.categoryId &&
                            singleFormErrors?.categoryId
                        }
                        disabled={disabled}
                        required
                    />
                </Grid>
                <Grid item sm={6} xs={12}>
                    <CustomInput
                        name={`${formFieldName}.customerRefNo`}
                        id={`${formFieldName}.customerRefNo`}
                        onBlur={handleBlur}
                        onChange={(e) =>
                            setFieldValue(
                                `${formFieldName}.customerRefNo`,
                                e.target.value
                            )
                        }
                        value={singleFormValues?.customerRefNo}
                        disabled={disabled}
                        initValue={singleFormValues?.customerRefNo}
                        label={"Customer Reference Number"}
                        placeholder={""}
                        error={
                            singleFormTouched?.customerRefNo &&
                            singleFormErrors?.customerRefNo
                        }
                        validate
                        required
                    />
                </Grid>
                <Grid item sm={6} xs={12}>
                    <SelectNew
                        id={`${formFieldName}.dropOption`}
                        name={`${formFieldName}.dropOption`}
                        label={"Delivery Options"}
                        placeholder={"Select Delivery Option"}
                        options={DROP_OPTION}
                        value={Number(singleFormValues.dropOption)}
                        onChange={(e) =>
                            setFieldValue(
                                `${formFieldName}.dropOption`,
                                e.target.value
                            )
                        }
                        error={
                            singleFormTouched?.dropOption &&
                            singleFormErrors?.dropOption
                        }
                        disabled={disabled}
                        required
                    />
                </Grid>
                <Grid item sm={6} xs={12}>
                    <RadioGroup
                        id={`${formFieldName}.fragile`}
                        name={`${formFieldName}.fragile`}
                        label={"Fragile Order"}
                        defaultValue={
                            singleFormValues?.fragile
                                ? singleFormValues.fragile
                                : 1
                        }
                        value={singleFormValues.fragile}
                        options={
                            !disabled
                                ? FRAGILE_OPTION
                                : FRAGILE_OPTION.map((item) => ({
                                      ...item,
                                      disabled: true,
                                  }))
                        }
                        onChange={(e) =>
                            setFieldValue(
                                `${formFieldName}.fragile`,
                                Number(e.target.value)
                            )
                        }
                    />
                </Grid>
            </GridContainer>

            <Box mt={5}>
                {singleFormValues.picture && (
                    <OrderImageWrapper className="orderImageWrapper">
                        <Remove
                            onClick={() => imageHandler(null)}
                            src={remove}
                            alt="remove"
                        />
                        <OrderImage
                            src={String(singleFormValues.picture)}
                            alt="selectedImage"
                        />
                    </OrderImageWrapper>
                )}
                {singleFormValues?.categoryId && !singleFormValues.picture && (
                    <AddImage
                        changeHandler={(e) => changeHandler(e)}
                        text={"Add Shipment Picture"}
                    />
                )}
                {singleFormValues?.categoryId && singleFormValues.picture && (
                    <AddImage
                        changeHandler={(e) => changeHandler(e)}
                        text={"Replace Shipment Picture"}
                    />
                )}
            </Box>

            {singleFormValues?.categoryId &&
                new Array(props.noOfItem)
                    .fill("")
                    .map((_, itemIndex) => (
                        <DetailsFormItem
                            key={itemIndex}
                            index={itemIndex}
                            orderIndex={props.index}
                            hasDimensions={hasDimensions()}
                            formik={props.formik}
                        />
                    ))}
        </Box>
    );
}

export default DetailsForm;
