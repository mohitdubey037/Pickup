import { useState } from "react";
import { Box } from "@mui/system";
import { InsuranceIcon } from "app/assets/Icons";
import { Checkbox } from "app/components/Checkbox";
import { H3, H4 } from "app/components/Typography/Typography";
import TermsAndPolicies from "app/pages/AuthScreens/SignUpScreens/Terms&Policies";
import { Link } from "app/components/Typography/Links";
import { Flex } from "app/components/CommonCss/CommonCss";
import { Termslink } from "app/components/Typography/style";
import AlertDialog from "app/components/Dialog";

const InvoiceDetails = ({ invoiceData, insuranceHandler }) => {
  const [showTermsPolicies, setShowTermsPolicies] = useState("");

  return (
    <Box>
      <H3 text="Payment Summary" />
      <Box mt={3}>
        <Flex justifyContent="space-between" bottom={12}>
          <H4 text="Subtotal" />
          <H4 text={`$${invoiceData.subTotalOfAllShipments.toFixed(2)}`} />
        </Flex>
        <Flex justifyContent="space-between" bottom={12}>
          <H4 text="Taxes(HST)" />
          <H4 text={`$${invoiceData.taxesOfAllShipments.toFixed(2)}`} />
        </Flex>
        <Flex justifyContent="space-between">
          <Flex>
            <Checkbox
              onChange={(e) => insuranceHandler(e)}
              label="Add Insurance"
            />
            <img src={InsuranceIcon} alt="InsuranceIcon" />
          </Flex>
          <H4 text={`$${invoiceData.insuranceAmount.toFixed(2)}`} />
        </Flex>

        <Flex top={5}>
          <Termslink ml={4} style={{ color: "#1B8AF0" }}>
            Check our {""}
            <Link to="" onClick={() => setShowTermsPolicies("terms")}>
              Terms
            </Link>
            {" & "}
            <Link to="" onClick={() => setShowTermsPolicies("policies")}>
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

      <AlertDialog
        fullWidth
        open={!!showTermsPolicies}
        handleCloseLabel="Close"
        handleClose={() => setShowTermsPolicies("")}
        content={
          <Box textAlign="left">
            <TermsAndPolicies name={showTermsPolicies} />
          </Box>
        }
      />
    </Box>
  );
};

export default InvoiceDetails;
