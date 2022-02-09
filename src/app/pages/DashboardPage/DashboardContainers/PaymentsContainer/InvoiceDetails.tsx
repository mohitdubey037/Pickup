import { useState } from "react";
import Modal from "react-modal";
import { Box } from "@mui/system";

import { InsuranceIcon } from "app/assets/Icons";
import { Checkbox } from "app/components/Checkbox";
import { Flex } from "app/components/Input/style";
import { Link } from "app/components/Link";
import { H3, H4 } from "app/components/Typography/Typography";
import TermsAndPolicies from "app/pages/AuthScreens/SignUpScreens/Terms&Policies";
import { Termslink } from "app/pages/AuthScreens/style";

const InvoiceDetails = ({ invoiceData, insuranceHandler }) => {
    const [showTermsPolicies, setShowTermsPolicies] = useState("");

    return (
        <Box>
            <H3 text="Shipment Summary" />
            <Box mt={3}>
                <Flex justifyContent="space-between" bottom={12}>
                    <H4 text="Subtotal" />
                    <H4 text={`$${invoiceData.subTotalOfAllShipments}`} />
                </Flex>
                <Flex justifyContent="space-between" bottom={12}>
                    <H4 text="Taxes(HST)" />
                    <H4 text={`$${invoiceData.taxesOfAllShipments}`} />
                </Flex>
                <Flex justifyContent="space-between">
                    <Flex>
                        <Checkbox
                            onChange={(e) => insuranceHandler(e)}
                            label="Add Insurance"
                        />
                        <img src={InsuranceIcon} alt="InsuranceIcon" />
                    </Flex>
                    <H4 text={`$${invoiceData.insuranceAmount}`} />
                </Flex>

                <Flex top={5}>
                    {/* <CustomLink
                        label="Check our Terms & Conditions"
                        style={{ color: "#1B8AF0" }}
                    /> */}
                    <Termslink ml={4} style={{ color: "#1B8AF0" }}>
                        Check our{" "}
                        <Link
                            to=""
                            onClick={() => setShowTermsPolicies("terms")}
                        >
                            Terms
                        </Link>{" "}
                        &{" "}
                        <Link
                            to=""
                            onClick={() => setShowTermsPolicies("policies")}
                        >
                            Conditions
                        </Link>
                    </Termslink>
                </Flex>

                <Flex justifyContent="space-between" top={40} bottom={16}>
                    <H4 text="Total" fontFamily="bold" />
                    <H4
                        text={`$${Number(invoiceData.total).toFixed(2)}`}
                        fontFamily="bold"
                    />
                </Flex>
                <hr />
            </Box>

            <Modal
                isOpen={!!showTermsPolicies}
                onRequestClose={() => setShowTermsPolicies("")}
            >
                <TermsAndPolicies name={showTermsPolicies} />
            </Modal>
        </Box>
    );
};

export default InvoiceDetails;
