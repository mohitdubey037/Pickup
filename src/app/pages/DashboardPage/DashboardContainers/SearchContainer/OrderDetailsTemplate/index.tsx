import { logo } from "app/assets/Icons";
import {
  DIMENSION2,
  LOCATION_TYPES,
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
          <td>{locationType(data)}</td>
          <td>{data.companyName ? data.companyName : "NA"}</td>
          <td>{data.locationFirstName ? data.locationFirstName : "NA"}</td>
          <td>{data.locationLastName ? data.locationLastName : "NA"}</td>
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
          <td colSpan={2}>
            {data.locationAddressLine1 ? data.locationAddressLine1 : "NA"}
          </td>
          <td colSpan={2}>
            {data.locationAddressLine2 ? data.locationAddressLine2 : "NA"}
          </td>
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
          <td>{data.locationCity ? data.locationCity : "NA"}</td>
          <td>{data.locationPinCode ? data.locationPinCode : "NA"}</td>
          <td>{data.locationProvinceCode ? data.locationProvinceCode : "NA"}</td>
          <td>{data.locationCountry ? data.locationCountry : "NA"}</td>
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
          <td>{data.locationPhone ? data.locationPhone : "NA"}</td>
          <td>
            {data.locationAlternatePhone ? data.locationAlternatePhone : "NA"}
          </td>
          <td>{data.locationEmail ? data.locationEmail : "NA"}</td>
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
          <td colSpan={4}>{data.details ? data.details : "NA"}</td>
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
      return "(lbs)";
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
            <td>{orderData.category ? orderData.category : "NA"}</td>
            <td>{item.weight ? item.weight : "NA"}</td>
            <td>
              {item.length} x {item.width} x {item.height}
            </td>
            <td>{item.quantity ? item.quantity : "NA"}</td>
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
              {orderData.shipmentCost ? "$" + orderData.shipmentCost : "NA"}
            </td>
            <td>{item.fragile === 1 ? "Yes" : "No"}</td>
            <td>
              {orderData.dropOption === 10
                ? "Door Drop"
                : orderData.dropOption === 11
                ? "Safe Drop"
                : "NA"}
            </td>
            <td>
              {orderData.customerReferenceNumber
                ? orderData.customerReferenceNumber
                : "NA"}
            </td>
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
            <td colSpan={4}>{item.description ? item.description : "NA"}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default OrderDetailsTemplate;
