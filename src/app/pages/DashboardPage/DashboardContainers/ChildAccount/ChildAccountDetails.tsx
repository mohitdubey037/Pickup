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

  const [companyDetails, setCompanyDetails] = useState<any>({})

  const fetchDetailById = async() => {
    const res = await fetchChildAccountById(id);
    setCompanyDetails(res?.response?.data?.data[0]);
  }

  useEffect(() => {
    console.log('hyyyyyyyyyyyyy');
    if (id) {
      fetchDetailById()
    }
  },[])

 
  return (
    <ModuleContainer>
      <H2 title="Company Profile" />
          <ChildDetails saveAction={() => fetchDetailById()} singleCompanyDetails={companyDetails}/>
          <SuperintendentDetails singleCompanyDetails = {companyDetails} />
          <CardsDetails />
    </ModuleContainer>
  );
}
