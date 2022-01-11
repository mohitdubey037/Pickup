import { sizing } from "@mui/system";
import { Block, Flex } from "app/components/Input/style";
import React from "react";
interface ContactDetailsSidebarProps {
    contactInfo: any;
}
function ContactDetailsSidebar(props: ContactDetailsSidebarProps) {

    let { contactInfo } = props;

    return (
        <Flex direction={"column"} style={{ width: '100%', padding: "16px 11px", boxSizing: "border-box" }}>
            <Flex>
                <Block style={{ flex: 1 }}>
                    <div>Company Name</div>
                    <b>{contactInfo?.companyName || '-'}</b>
                </Block>
                <Block style={{ flex: 1 }}>
                    <div>First Name</div>
                    <b>{contactInfo?.locationFirstName || '-'}</b>
                </Block>
                <Block style={{ flex: 1 }}>
                    <div>Last Name</div>
                    <b>{contactInfo?.locationLastName || '-'}</b>
                </Block>
            </Flex>

            <Flex style={{ marginTop: 24 }}>
                <Block style={{ flex: 1 }}>
                    <div>Address Line 1</div>
                    <b>{contactInfo?.locationAddressLine1 || '-'}</b>
                </Block>
                <Block style={{ flex: 1 }}>
                    <div>Address Line 2</div>
                    <b>{contactInfo?.locationAddressLine2 || '-'}</b>
                </Block>
                <Block style={{ flex: 1 }}></Block>
            </Flex>

            <Flex style={{ marginTop: 24 }}>
                <Block style={{ flex: 1 }}>
                    <div>City</div>
                    <b>{contactInfo?.locationCity || "-"}</b>
                </Block>
                <Block style={{ flex: 1 }}>
                    <div>Postal Code</div>
                    <b>{contactInfo?.locationPinCode || "-"}</b>
                </Block>
                <Block style={{ flex: 1 }}>
                    <div>Province/State</div>
                    <b>{contactInfo?.locationProvinceCode || "-"}</b>
                </Block>
            </Flex>

            <Flex style={{ marginTop: 24 }}>
                <Block style={{ flex: 1 }}>
                    <div>Country</div>
                    <b>{contactInfo?.locationCountry || "-"}</b>
                </Block>
                <Block style={{ flex: 1 }}>
                    <div>Contact Number</div>
                    <b>{contactInfo?.locationPhone || "- "}</b>
                </Block>
                <Block style={{ flex: 1 }}>
                    <div>Alternate Number</div>
                    <b>{contactInfo?.locationAlternatePhone || '-'}</b>
                </Block>
            </Flex>
            <Flex style={{ marginTop: 24 }}>
                <Block style={{ flex: 1 }}>
                    <div>Email Address</div>
                    <b>{contactInfo?.locationEmail || "-"}</b>
                </Block>
            </Flex>
        </Flex>
    );
}

export default ContactDetailsSidebar;
