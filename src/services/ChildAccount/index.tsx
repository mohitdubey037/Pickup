import services from '../';
import { showToast } from "utils";
import { transformPayloadToBackend } from 'app/pages/DashboardPage/DashboardContainers/ChildAccount/helper';


export const getChildAccountData = async (urlParams?: string)=>{
  try {
    let api = `business/FetchchildAccount?${urlParams}`
    const res = await services.get(api,"user_cr");
    return{response: res, error:null};
  }catch(error){
  return {response: null, error: error};
  }
}

export const fetchChildAccountById = async (companyId?: any) => {
  try {
    const response = await services.get(`business/FetchchildAccountDetails/${companyId}`,'user_cr');
      return { response: response, success: true }
  } catch (err) {
      showToast(err.message,"error")
      return { response: err, sucess: false };
  }
}

export const addChildAccountData = async (body: any) => {
  try {
    const response = await services.post('business/createChildAccount',body,'user_cr');
      return { response: response, success: true }
  } catch (err) {
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

export const editChildAccountData = async (body?: any, childId?: number) => {
  
  try {
      const response = await services.put(`business/updateChildAccountDetails/${childId}`,body,'user_cr');
      return {response: response, success: true };
  }
  catch (err) {
      showToast(err.message, "error");
      return { response: err, sucess: false };
    }
}

export const editSuperIndendentAccountData = async (body?: any, userId?: number) => {
  try {
      const response = await services.put(`business/updateChildAccountUserDetails/${userId}`,transformPayloadToBackend(body),'user_cr');
      return {response: response, success: true };
  }
  catch (err) {
      showToast(err.message, "error");
      return { response: err, sucess: false };
    }
}