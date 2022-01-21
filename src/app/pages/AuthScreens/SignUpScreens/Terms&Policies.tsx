import React, { useEffect, useState } from "react";
import { getTermsAndConditions } from "../../../../services/SignUpSerivces/index";

const TermsAndPolicies = ({name}) => {
  const [termsData, setTermsData] = useState<any>();
  console.log("Name:", name);
  const getTermsAndConditionsData = async () => {
    const res = await (getTermsAndConditions(name) as any);
    console.log("In", res);
    if (res) {
      const terms = res?.data?.data;
      console.log("Terms", terms);
      setTermsData(terms);
    }
  };
  useEffect(() => {
    getTermsAndConditionsData();
  }, []);
  return termsData ? <div dangerouslySetInnerHTML={{ __html: termsData.pageContent }}></div> : null;
};

export default TermsAndPolicies;
