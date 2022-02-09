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
    return { response: response, success: true };
  } catch (err) {
    return { response: err, sucess: false };
  }
};

export const getSearchOrderList = async (urlParams?: string) => {
  try {
    const response = await Service.get(`order/business/shipments${urlParams}`, "order");
    // const response = await Service.get(`order/business/shipments?page=1&chunk=10`, "order");
    return { response: response, success: true };
  } catch (err) {
    return { response: err, sucess: false };
  }
}

export const getPaginatedData = async (page?: number, chunk?: number) => {
  try {
    // const response = await Service.get(`order/business/shipments${urlParams}`, "order");
    const response = await Service.get(`order/business/shipments?page=${page}&chunk=${chunk}`, "order");
    return { response: response, success: true };
  } catch (err) {
    return { response: err, sucess: false };
  }
}

export const getSearchOrderListById = async (orderId: number) => {
  try {
    const response = await Service.get(`order/business/shipment/${orderId}`, "order");
    return { response: response, success: true };
  } catch (err) {
    return { response: err, sucess: false };
  }
};