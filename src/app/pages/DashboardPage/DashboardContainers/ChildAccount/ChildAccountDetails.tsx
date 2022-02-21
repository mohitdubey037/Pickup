import React, { useEffect, useState } from "react";
import { H2 } from "app/components/Typography/Typography";
import ModuleContainer from "app/components/ModuleContainer";
import ChildDetails from "./ChildDeatils";
import SuperintendentDetails from "./SuperintendentDetails";
import CardsDetails from "./CardDetails";
import { fetchChildAccountById } from "services/ChildAccount";
import CompanyDetailsSkeleton from "../CompanyProfileContainer/CompanyDetailsSkeleton";

export default function ChildAccountDetails(props: any) {
  const {id} = props;

  const [companyDetails, setCompanyDetails] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  const fetchDetailById = async() => {
    setLoading(true);
    const res = await fetchChildAccountById(id);
    setCompanyDetails(res?.response?.data?.data[0]);
    setLoading(false);
  }

  useEffect(() => {
    if (id) {
      fetchDetailById()
    }
  },[])

 
  return (
    <ModuleContainer>
      {loading ? (
        <CompanyDetailsSkeleton />
        ) : (
          <>
          <H2 title="Company Profile" />
          <ChildDetails saveAction={() => fetchDetailById()} singleCompanyDetails={companyDetails}/>
          <SuperintendentDetails singleCompanyDetails = {companyDetails} saveAction={() => fetchDetailById()} />
          <CardsDetails cardDetails = {companyDetails} />
        </>
      )}
      </ModuleContainer>
  );
}
