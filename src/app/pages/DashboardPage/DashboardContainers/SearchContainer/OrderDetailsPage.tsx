import { Button } from "app/components/Buttons";
import { AddressDetails } from "./AddressDetails";

function OrderDetailPage(props: any) {
  const { singleOrderData = {}, downloadOrderDetails } = props;
  const { pickupLocation = {}, dropLocation = {} } = singleOrderData;

  return (
    <>
      <AddressDetails data={pickupLocation} title="Origin Details" />
      <AddressDetails data={dropLocation} title="Destination Details" />
      <Button
        size="medium"
        label="Download Proof of Delivery"
        onClick={downloadOrderDetails}
      />
    </>
  );
}
export default OrderDetailPage;
