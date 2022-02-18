import React, { useEffect, useState } from "react";
import { H2 } from "app/components/Typography/Typography";
import ModuleContainer from "app/components/ModuleContainer";
import ChildDetails from "./ChildDeatils";
import SuperintendentDetails from "./SuperintendentDetails";
import CardsDetails from "./CardDetails";
import { useDispatch } from "react-redux";
import { fetchChildAccountById } from "services/ChildAccount";



export default function ChildAccountDetails(props: any) {
  const {id} = props;

  const [companyDetails, setCompanyDetails] = useState([])

  const fetchDetailById = async(id) => {

    const res = await fetchChildAccountById(id);
    console.log(res?.response?.data?.data[0]);
    setCompanyDetails(res?.response?.data?.data[0]);
  }

  useEffect(() => {
    if (id) {
      fetchDetailById(id)
    }
    console.log(companyDetails);
  },[])

 
  return (
    <ModuleContainer>
      <H2 title="Company Profile" />
          <ChildDetails singleCompanyDetails = {companyDetails}/>
          <SuperintendentDetails singleCompanyDetails = {companyDetails} />
          <CardsDetails />
    </ModuleContainer>
  );
}
