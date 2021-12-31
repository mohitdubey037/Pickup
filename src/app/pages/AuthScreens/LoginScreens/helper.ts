
import Services from "services";

export const verifyToken = async (value: string) => {
    try {
        const params = { token: value }
        const response = await Services.post("business/verifyResetToken", params, "user");
        return { response: response, success: true };
    } catch (err) {
        // const response = (err instanceof Error)
        if (err.isAxiosError && err.response) {
            const errResponse = err.response;
            const errorMessage = errResponse?.data?.message?.message
            ? errResponse?.data?.message.message
            : errResponse?.data?.message
            
            return { response: errResponse, message: errorMessage, success: false };
            // Handle your error type safe here
        } else {
              return { response: err.response, success: false };
        }
    }
};
