import Services from "../";

export const getDashboardDetails = async () => {
  try {
    const response = (await Services.get(
      `order/business/dashboard`, "order")) as any;
    return { response: response, success: true };
  } catch (err) {
    return { response: err, success: false };
  }
};
