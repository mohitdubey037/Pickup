import { Box } from "@mui/system";
import { InsuranceIcon } from "app/assets/Icons";
import { Checkbox } from "app/components/Checkbox";
import { Flex } from "app/components/Input/style";
import { CustomLink } from "app/components/Typography/Links";
import { H3, H4 } from "app/components/Typography/Typography";

const InvoiceDetails = ({ invoiceData, insuranceHandler }) => {
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
                    <CustomLink
                        label="Check our Terms & Conditions"
                        style={{ color: "#1B8AF0" }}
                    />
                </Flex>

                <Flex justifyContent="space-between" top={40} bottom={16}>
                    <H4 text="Total" />
                    <H4 text={`$${Number(invoiceData.total).toFixed(2)}`} />
                </Flex>
                <hr />
            </Box>
        </Box>
    );
};

export default InvoiceDetails;
