import React from "react";
import { Box } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

export default function TermsContentSkeleton() {
  return (
    <>
    {Array.from(Array(3).keys()).map(() => (
        <Box mt={4}>
        <Skeleton width="50%" height={36} className="value" />
        <Skeleton width="100%" height={28} className="value" />
        <Skeleton width="80%" height={28} className="value" />
      </Box>
    ))}
      
    </>
  );
}
