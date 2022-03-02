import { logo } from "app/assets/Icons";
import { formatPhoneNo } from "utils/commonUtils";
import {
  DIMENSION2,
  LOCATION_TYPE_BY_ID,
  WEIGHTDIMENSION,
} from "../../../../../../constants";
import "./styles.css";

const OrderDetailsTemplate = ({ orderData, orderId }: any) => {
  const { pickupLocation = {}, dropLocation = {}, items = [] } = orderData;

  return (
    <div className="oid-temp">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <h2 className="addressdetails">Order Details ({orderId})</h2>

      <h3>Origin Details</h3>
      <AddressDetails data={pickupLocation} />

      <h3>Destination Details</h3>
      <AddressDetails data={dropLocation} />

      <h2 className="itemdetails">Item Details</h2>
      {items &&
        items.length > 0 &&
        items.map((item: object, index: number) => (
          <ItemDetails orderData={orderData} item={item} key={index} />
        ))}

      <div className="invoicefooter">
        <p>
          For any assistence required, please contact us at: Phone number:
          416-123-4567 Email:
          <a href="mailto:pickups@pickups.com">pickups@pickups.com</a>
        </p>
      </div>
    </div>
  );
};

const AddressDetails = ({ data }: any) => {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Location Type</th>
          <th scope="col">Company Name</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{LOCATION_TYPE_BY_ID?.[data?.addressType] || "N/A"}</td>
          <td>{data?.companyName || "N/A"}</td>
          <td>{data?.locationFirstName || "N/A"}</td>
          <td>{data?.locationLastName || "N/A"}</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th scope="col" colSpan={2}>
            Address Line 1
          </th>
          <th scope="col" colSpan={2}>
            Address Line 2
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={2}>{data?.locationAddressLine1 || "N/A"}</td>
          <td colSpan={2}>{data?.locationAddressLine2 || "N/A"}</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th scope="col">City</th>
          <th scope="col">Postal Code</th>
          <th scope="col">Province/State</th>
          <th scope="col">Country</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data?.locationCity || "N/A"}</td>
          <td>{data?.locationPinCode || "N/A"}</td>
          <td>{data?.locationProvinceCode || "N/A"}</td>
          <td>{data?.locationCountry || "N/A"}</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th scope="col">Contact Number</th>
          <th scope="col">Alternate Number</th>
          <th scope="col">Email Address</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {data.locationPhone ? formatPhoneNo(data.locationPhone) : "N/A"}
          </td>
          <td>
            {data.locationAlternatePhone
              ? formatPhoneNo(data.locationAlternatePhone)
              : "N/A"}
          </td>
          <td>{data.locationEmail || "N/A"}</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th scope="col" colSpan={4}>
            Additional Notes
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={4}>{data?.details || "N/A"}</td>
        </tr>
      </tbody>
    </table>
  );
};

const ItemDetails = ({ orderData, item }: any) => {
  const getLabelFromID = (id: number, list: any[]) => {
    const foundLabel = list.find((item) => item.value === id);
    if (foundLabel) {
      return `(${foundLabel.label.toLowerCase()})`;
    } else {
      return "";
    }
  };

  return (
    <>
      <h3>{item.name}</h3>
      <table>
        <thead>
          <tr>
            <th scope="col">Category</th>
            <th scope="col">{`Item Weight ${getLabelFromID(
              item.weightDimension,
              WEIGHTDIMENSION
            )}`}</th>
            <th scope="col">{`LBH ${getLabelFromID(
              item.sizeDimension,
              DIMENSION2
            )}`}</th>
            <th scope="col">Pieces</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{orderData?.category || "N/A"}</td>
            <td>{item.weight ? item.weight : "N/A"}</td>
            <td>
              {item.length && item.width && item.height ? (
                <span>
                  {item.length} x {item.width} x {item.height}
                </span>
              ) : (
                "N/A"
              )}
            </td>
            <td>{item?.quantity || "N/A"}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th scope="col">Order Cost</th>
            <th scope="col">Fragile Order</th>
            <th scope="col">Delivery Options</th>
            <th scope="col">Customer Reference #</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {orderData.total ? `$${orderData.total.toFixed(2)}` : "N/A"}
            </td>
            <td>{item.fragile === 1 ? "Yes" : "No"}</td>
            <td>
              {orderData.dropOption === 10
                ? "Door Drop"
                : orderData.dropOption === 11
                ? "Safe Drop"
                : "N/A"}
            </td>
            <td>{orderData?.customerReferenceNumber || "N/A"}</td>
          </tr>
        </tbody>

        <thead>
          <tr>
            <th scope="col" colSpan={4}>
              Item Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={4}>{item?.description || "N/A"}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default OrderDetailsTemplate;
