import { Button } from "app/components/Buttons";
import { LOCATION_TYPES } from "../../../../../constants";
import { AddressDetails } from "./AddressDetails";

function OrderDetailPage(props: any) {
  const { singleOrderData = {}, downloadOrderDetails } = props;
  const { pickupLocation = {}, dropLocation = {} } = singleOrderData;

  function locationType(location): string {
    const search = (obj) => obj.value === location.addressType;
    const arrayResult = LOCATION_TYPES.filter(search);
    let labelValue: string = "";
    arrayResult.forEach(function (next) {
      labelValue = next.label;
    });
    return labelValue;
  }

  return (
    <>
      <AddressDetails
        addressDetails={pickupLocation}
        title={"Origin Details"}
        label={locationType(pickupLocation)}
      />
      <AddressDetails
        addressDetails={dropLocation}
        title={"Destination Details"}
        label={locationType(dropLocation)}
      />
      <Button
        size="medium"
        label="Download Proof of Delivery"
        onClick={downloadOrderDetails}
      />
    </>
  );
}
export default OrderDetailPage;
