import services from "../";

export const getPersonalProfileDetails = async (userId: number) => {
  try {
    const response = await services.get(
      `business/user/${userId}/profile`,
      "user"
    );
    return { response: response, success: true };
  } catch (err) {
    return { response: err, sucess: false };
  }
};
