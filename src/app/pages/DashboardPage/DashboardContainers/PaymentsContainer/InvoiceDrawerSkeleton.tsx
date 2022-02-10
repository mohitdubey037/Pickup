import { Divider, Skeleton } from "@mui/material";
import { Button } from "app/components/Buttons";
import { DrawerHeading, Para } from "app/components/Typography/Typography";
import { Flex } from "app/components/Input/style";
import { LineDivider } from "app/components/CommonCss/CommonCss";
import { Illustration } from "../../../../assets/Images/index";
import { DrawerHeaderBox, InvoiceDetailsBox } from "./style";



function InvoiceDrawerSkeleton() {

  return (
    <>
      <DrawerHeaderBox>
        <img className="imageStyle" src={Illustration} alt="" />
        <Skeleton width="100%" height={40}  className="value" />

        <Divider className="divider" />
      </DrawerHeaderBox>

      <Button
        label="Download Invoice Details"
        secondary
        style={{ marginBottom: "16px" }}
      />
     
      <Button label="Download Shipping Label" secondary />

      <InvoiceDetailsBox>
        <Flex justifyContent="space-between" bottom={16} top={32}>
          <Flex>
            <Para text="Bill to" className="label" />
            <Skeleton width="25%" height={28}  className="value" />
          </Flex>
          <Flex justifyContent="flex-end">
            <Para text="Invoice Date" className="label" />
            <Skeleton width="30%" height={28}  className="value" />
          </Flex>
        </Flex>
        <Flex justifyContent="space-between">
          <Para text="Invoice Number" className="label" />
          <Skeleton width="30%" height={28}  className="value" />
        </Flex>

        <LineDivider />

        <Flex justifyContent="space-between" bottom={16}>
          <Para text="Order Count" className="label" />
          <Skeleton width="20%" height={28}  className="value" />
        </Flex>
        <Flex justifyContent="space-between" bottom={16}>
          <Para text="Category" className="label" />
          <Skeleton width="25%" height={28}  className="value" />
        </Flex>
        <Flex justifyContent="space-between" bottom={16}>
          <Para text="Destination Count" className="label" />
          <Skeleton width="20%" height={28}  className="value" />
        </Flex>
        <Flex justifyContent="space-between" bottom={16}>
          <Para text="Invoice Amount" className="label" />
          <Skeleton width="30%" height={28}  className="value" />
        </Flex>

        <LineDivider />

        <Flex justifyContent="space-between" bottom={40}>
          <Para text="Payment Detail" className="label" />
          <Skeleton width="30%" height={28}  className="value" />
        </Flex>
      </InvoiceDetailsBox>
    </>
  );
}

export default InvoiceDrawerSkeleton;