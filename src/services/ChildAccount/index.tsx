import services from '../';
import { showToast } from "utils";

export const getChildAccountData = async (urlParams?: string, page?: number, chunk?: number, sortingField?: string, sortingType?: string)=>{
  // console.log(sortingType);
  try {
    let api = `business/FetchchildAccount`
    if (page) {
      api += `?page=${page}&chunk=${chunk}`
    }
    const res = await services.get(api,"user_cr");
    // console.log(res);
    return{response: res, error:null};
  }catch(error){
  return {response: null, error: error};
  }
}

export const postChildAccountData = async (body?: any) => {
    try {
        const response = await services.post('business/createChildAccount',body,'user_cr');
        console.log(response);
        return {response: response, success: true };
    }
    catch (err) {
        showToast(err.message, "error");
        return { response: err, sucess: false };
      }
}