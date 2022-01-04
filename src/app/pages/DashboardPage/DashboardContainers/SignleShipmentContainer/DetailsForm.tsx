import { useEffect, useState } from "react";

import { FormikValues } from "formik";

import { Flex } from "app/components/Input/style";
import RadioGroup from "app/components/RadioGroup";
import Select from "app/components/Select";
import { getCategoryList } from "services/SingleShipmentServices";
import DetailsFormItem from "./DetailsFormItem";

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

function DetailsForm(props: { formik: FormikValues; noOfItem: number }) {
    const { handleChange, values, handleBlur, setFieldValue } = props.formik;

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
        const selectedCategory = categoryList.find(category => category.categoryId === values.categoryId);
        return (selectedCategory?.setDimension || false)
    }

    return (
        <>
            <Flex direction={"column"}>
                <Flex top={20}>
                    <Flex flex={1}>
                        <Select
                            id="categoryId"
                            name="categoryId"
                            label={"Category"}
                            value={values?.categoryId}
                            onSelect={handleChange}
                            options={
                                categoryList
                                    ? categoryList.map((option) => ({
                                        value: option.categoryId,
                                        label: option.name,
                                    }))
                                    : []
                            }
                        />
                    </Flex>
                    <Flex flex={1} left={30}>
                        <CustomInput
                            name="customerRefNo"
                            id="customerRefNo"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            label={"Customer Reference Number"}
                            placeholder={"Start typing"}
                        />
                    </Flex>
                </Flex>
                <Flex top={20}>
                    <Flex flex={1}>
                        <Select
                            id="dropOption"
                            name="dropOption"
                            label={"Delivery options"}
                            value={values.dropOption}
                            onSelect={handleChange}
                            options={DROP_OPTION}
                        />
                    </Flex>
                    <Flex flex={1} left={30}>
                        <RadioGroup
                            id="fragile"
                            name="fragile"
                            label={"Fragile Shipment"}
                            value={values.fragile}
                            options={FRAGILE_OPTION}
                            onChange={(e) => setFieldValue("fragile", Number(e.target.value))}
                        />
                    </Flex>
                </Flex>
                {values?.categoryId && new Array(props.noOfItem).fill("").map((_, index) => (
                    <DetailsFormItem
                        key={index}
                        index={index}
                        hasDimensions={hasDimensions()}
                        formik={props.formik}
                    />
                ))}
            </Flex>
        </>
    );
}

export default DetailsForm;
