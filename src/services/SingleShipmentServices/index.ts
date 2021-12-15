import services from "../";


export const registerUserService = async (email: string) => {
  const res = await services.post("sign_up", { emailId: email });
  return res;
};
export const addShipmentDetail = async (values: any) => {
  try {
    const param = { "companyName": values.companyName }
  const response= await services.post("order/business/create/single",param)

  } catch (err) {
    console.log(err, "serviceerr");
    return { response: err, sucess: false };
  }
};
