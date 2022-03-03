import React, { useEffect, useState } from "react";
import { getTermsAndConditions } from "../../../../services/SignUpSerivces/index";
import TermsContentSkeleton from "./TermsContentSkeleton";

const TermsAndPolicies = ({name}) => {
  const [termsData, setTermsData] = useState<any>();
  const getTermsAndConditionsData = async () => {
    const res = await (getTermsAndConditions(name) as any);
    if (res) {
      const terms = res?.data?.data;
      setTermsData(terms);
    }
  };
  useEffect(() => {
    getTermsAndConditionsData();
  }, []);
  return termsData ? <div dangerouslySetInnerHTML={{ __html: termsData.pageContent }}></div> : <TermsContentSkeleton />;
};

export default TermsAndPolicies;
