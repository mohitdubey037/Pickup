import services from "services"

export const addNewCardHelper = async (body: any) => {
    try {
        const res = await services.post("/paymentprofile/adprofilecard", body, "payment")
        console.log("SavedCardres", res);
        return {response: res, error: null};

    }catch(error){
        console.log("SavedCarderr", error);
        return {response: null, error: error};
    }
}