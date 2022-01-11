import Services from "../";

export const getLocationList = async ()=>{
    try {
        const res = await Services.get("location/business/location/getsavedLocation","location")
        console.log("resdata",res)
        return{response: res, error:null};
    }catch(error){
    return {response: null, error: error};
    }
}