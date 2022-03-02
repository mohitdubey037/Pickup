import React, { useEffect, useState } from "react";
import { H2 } from "app/components/Typography/Typography";
import ModuleContainer from "app/components/ModuleContainer";
import ChildDetails from "./ChildDeatils";
import SuperintendentDetails from "./SuperintendentDetails";
import CardsDetails from "./CardDetails";
import { fetchChildAccountById } from "services/ChildAccount";
import CompanyDetailsSkeleton from "../CompanyProfileContainer/CompanyDetailsSkeleton";
import AdminDetailsSkeleton from "../CompanyProfileContainer/AdminDetailsSkeleton";
import PaymentCardSkeleton from "app/components/PaymentCard/PaymentCardSkeleton";
import { CustomLink } from "app/components/Typography/Links";
import { navigate } from "@reach/router";
import { Flex } from "app/components/CommonCss/CommonCss";
import { useSelector } from "react-redux";

export default function ChildAccountDetails(props: any) {
  const {id} = props;

  const authUser = useSelector((state: any) => {
    return state.auth?.user;
  });

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


  if ([4].indexOf(authUser?.roleId) || authUser?.childAccount === 1) {
    navigate("/non-authorized-page");
  }
 
  return (
    <ModuleContainer> 
      <Flex justifyContent="space-between" alignItems="center">
      <H2 title="Child Account" />
      <CustomLink label="Back" onClick={() => navigate?.("/dashboard/my-account/child-account-list")} redlink  />
      </Flex>
      {loading ? (
        <>
        <CompanyDetailsSkeleton />
        <AdminDetailsSkeleton />
        <PaymentCardSkeleton />
        </>
        ) : (
          <>
          <ChildDetails saveAction={() => fetchDetailById()} singleCompanyDetails={companyDetails}/>
          <SuperintendentDetails saveAction={() => fetchDetailById()} singleCompanyDetails = {companyDetails} />
          <CardsDetails saveAction={() => fetchDetailById()} cardDetails = {companyDetails}  />
        </>
      )}
      </ModuleContainer>
  );
}
