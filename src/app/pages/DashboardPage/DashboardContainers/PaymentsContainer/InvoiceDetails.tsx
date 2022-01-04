import { Typography } from "@material-ui/core"
import { InsuranceIcon } from "app/assets/Icons"
import { Checkbox } from "app/components/Checkbox"
import { Flex } from "app/components/Input/style"
import { Link } from "app/components/Link"

const InvoiceDetails = ({ invoiceData, insuranceHandler }) => {
    return (
        <div style={{ width: '100%' }}>
            <Typography
                component="h2"
                style={{ fontWeight: 500, fontSize: 18, paddingBottom: 25, textAlign: 'left' }}
            >
                Shipment Summary
            </Typography>
            <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <div style={{ display: "flex" }}>
                    <span
                        style={{
                            fontSize: 14,
                            fontWeight: 400,
                            flex: 1,
                            textAlign: "left",
                            paddingBottom: 12,
                        }}
                    >
                        Subtotal
                    </span>
                    <span>${invoiceData.subTotalOfAllShipments}</span>
                </div>
                <div style={{ display: "flex" }}>
                    <span
                        style={{
                            flex: 1,
                            fontSize: 14,
                            fontWeight: 400,
                            textAlign: "left",
                            paddingBottom: 15,
                        }}
                    >
                        Taxes(HST)
                    </span>
                    <span>${invoiceData.taxesOfAllShipments}</span>
                </div>
                <Flex>
                    <Flex>
                        <span style={{ padding: "0px 10px 0px 0px" }}>
                            <Checkbox onChange={(e) => insuranceHandler(e)} label="Add Insurance" />
                        </span>
                        <span style={{ display: "flex" }}>
                            <img src={InsuranceIcon} alt="InsuranceIcon" />
                        </span>
                    </Flex>
                        ${invoiceData.insuranceAmount}
                </Flex>
                <div
                    style={{
                        textDecoration: "underline",
                        display: "flex",
                        paddingBottom: 28,
                    }}
                >
                    <Link to="" style={{ color: "#1B8AF0", paddingLeft: 28 }}>
                        Check our Terms & Conditions
                    </Link>
                </div>
                <div style={{ display: "flex" }}>
                    <span
                        style={{
                            flex: 1,
                            fontWeight: 700,
                            fontSize: 14,
                            textAlign: "left",
                        }}
                    >
                        Total
                    </span>
                    <span style={{ fontWeight: 700, fontSize: 14 }}>${invoiceData.total}</span>
                </div>
                <div>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default InvoiceDetails
