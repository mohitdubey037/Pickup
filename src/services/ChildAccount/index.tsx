import services from '../';
import { showToast } from "utils";
import { transformPayloadToBackend } from 'app/pages/DashboardPage/DashboardContainers/ChildAccount/helper';


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

export const addChildAccountData = async (body: any) => {
  try {
    const response = await services.post('business/createChildAccount',body,'user_cr');
      return { response: response, success: true }
  } catch (err) {
      console.log(err)
      showToast(err.message,"error")
      return { response: err, sucess: false };
  }
};

export const postChildAccountData = async (body?: any) => {
    try {
        const response = await addChildAccountData(transformPayloadToBackend(body))
        return {response: response, success: true };
    }
    catch (err) {
        showToast(err.message, "error");
        return { response: err, sucess: false };
      }
}