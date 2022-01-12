import { useEffect, useState } from "react";

import { FormikValues } from "formik";

import { Flex } from "app/components/Input/style";
import RadioGroup from "app/components/RadioGroup";
import Select from "app/components/Select";
import { getCategoryList } from "services/SingleShipmentServices";
import DetailsFormItem from "./DetailsFormItem";
import AddItemLabel from "app/components/AddItemLabel";

import { DROP_OPTION, FRAGILE_OPTION } from "../../../../../constants";

import { CustomInput } from "../CompanyProfileContainer/style";

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

function DetailsForm(props: { formik: FormikValues; noOfItem: number , index: number, disabled ?: boolean}) {
    const { formik: {handleChange, values, handleBlur, setFieldValue, errors, touched}, disabled } = props;

    const formFieldName = `orders.${props.index}`;
    const singleFormValues = values.orders[props.index];
    const singleFormErrors = errors?.orders?.[props.index];
    const singleFormTouched = touched?.orders?.[props.index];

    const [categoryList, setCategoryList] = useState<SelectBoardType[]>([]);

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
        const selectedCategory = categoryList.find(category => category.categoryId === Number(singleFormValues.categoryId));
        return (selectedCategory?.setDimension || false)
    }

    return (
        <>
            <Flex direction={"column"}>
                <Flex top={20}>
                    <Flex flex={1} direction="column" style={{ alignItems: "start"}}>
                        <Select
                            id={`${formFieldName}.categoryId`}
                            name={`${formFieldName}.categoryId`}
                            label={"Category"}
                            value={Number(singleFormValues?.categoryId)}
                            onSelect={handleChange}
                            disabled={disabled}
                            options={
                                categoryList
                                    ? categoryList.map((option) => ({
                                        value: option.categoryId,
                                        label: option.name,
                                    }))
                                    : []
                            }
                        />
                        {singleFormErrors?.categoryId && singleFormTouched?.categoryId && (
                            <p style={{ margin: 0, color: "red" }}>{singleFormErrors?.categoryId}</p>
                        )}
                    </Flex>
                    <Flex flex={1} left={30}>
                        <CustomInput
                            name={`${formFieldName}.customerRefNo`}
                            id={`${formFieldName}.customerRefNo`}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={singleFormValues?.customerRefNo}
                            disabled={disabled}
                            initValue={singleFormValues?.customerRefNo}
                            label={"Customer Reference Number"}
                            placeholder={"Start typing"}
                            error={singleFormTouched?.customerRefNo && singleFormErrors?.customerRefNo}
                            validate
                        />
                    </Flex>
                </Flex>
                <Flex top={20}>
                    <Flex flex={1} direction="column" style={{ alignItems: "start"}}>
                        <Select
                            id={`${formFieldName}.dropOption`}
                            name={`${formFieldName}.dropOption`}
                            label={"Delivery options"}
                            value={Number(singleFormValues.dropOption)}
                            onSelect={handleChange}
                            disabled={disabled}
                            options={DROP_OPTION}
                        />
                        {singleFormErrors?.dropOption && singleFormTouched?.dropOption && (
                            <p style={{ margin: 0, color: "red" }}>{singleFormErrors?.dropOption}</p>
                        )}
                    </Flex>
                    <Flex flex={1} left={30}>
                        <RadioGroup
                            id={`${formFieldName}.fragile`}
                            name={`${formFieldName}.fragile`}
                            label={"Fragile Shipment"}
                            defaultValue={singleFormValues?.fragile ? singleFormValues.fragile : 1}
                            value={singleFormValues.fragile}
                            options={!disabled ? FRAGILE_OPTION : FRAGILE_OPTION.map(item => ({...item, disabled: true}))}
                            onChange={(e) => setFieldValue(`${formFieldName}.fragile`, Number(e.target.value))}
                        />
                    </Flex>
                </Flex>
                {singleFormValues?.categoryId && new Array(props.noOfItem).fill("").map((_, itemIndex) => (
                    <DetailsFormItem
                        key={itemIndex}
                        index={itemIndex}
                        orderIndex={props.index}
                        hasDimensions={hasDimensions()}
                        formik={props.formik}
                    />
                ))}
                {singleFormValues?.categoryId && (
                    <Flex top={20}>
                        <AddItemLabel text={"Add order Picture"} />
                    </Flex>
                )}
            </Flex>
        </>
    );
}

export default DetailsForm;
