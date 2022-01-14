import Service from "../";

export const getTrackStatus = async (orderId: number) => {
  try {
    const response = await Service.get(`order/business/shipment/${orderId}/track`, "order")
    // const response = await
    // fetch(
    //   `https://staging-api.pickups.mobi/order/api/order/business/shipment/${orderId}/track`,
    //   {
    //     headers: {
    //       Authorization:
    //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMTgxLCJ0eXBlIjoibG9naW4iLCJyb2xlIjoxNywiaWF0IjoxNjI4NTA3ODUzfQ.nmXM8_mkHwehZIFi7XX6_g8tR2o4l3EPsUufRIXQpLM"
    //     },
    //   }
    // ).then(res => res.json());
    return { response: response, success: true };
  } catch (err) {
    return { response: err, sucess: false };
  }
};

export const getLocation = async (orderId: number) => {
  try {
    const response = await Service.get(`order/business/shipment/${orderId}/liveLocation`, "order");
    // order/business/shipment/:shipmentId/liveLocation
    return { response: response, success: true };
  } catch (err) {
    return { response: err, sucess: false };
  }
};