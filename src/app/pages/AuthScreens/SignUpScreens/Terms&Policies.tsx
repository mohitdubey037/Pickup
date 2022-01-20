import React, { useEffect, useState } from 'react';
import { getTermsAndConditions } from "../../../../services/SignUpSerivces/index";

const TermsAndPolicies = () => {
    // const [termsData, setTermsData] = useState<any>();
    
    // const getTermsAndConditionsData = async (id: any) => {
    //     const res = (await getTermsAndConditions(id)) as any;
    //     if (res.success) {
    //       const orderListByID = res.response.data.data;
    //       console.log("Order by Id", orderListByID);
    //       setTermsData(orderListByID);
    //     }
    //   };
    // useEffect(() => {
    //     getTermsAndConditionsData(id);
    // }, [])
  return (
  <div>
      <p><strong>PICKUPS INC.</strong></p>
      <p><strong>&nbsp;</strong></p>
      <p><strong>TERMS OF SERVICE</strong></p>
      <p><strong>&nbsp;</strong></p>
      <p><strong>Last Updated: January 4, 2021</strong></p>
      <p><br /></p>
      <p><strong>Pickups Inc. has updated our Terms of Service in compliance with the laws of Ontario. By using the Platform, all Users such as Drivers, Senders & Customers (defined herein) hereby acknowledge and agree that they have read and understood these updated Terms of Service.</strong></p>
  </div>
  );
};

export default TermsAndPolicies;
