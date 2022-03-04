import React from "react";
import { CustomTableContainer, CustomTable, TableTop } from "./style";
import { TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { Skeleton } from "@mui/material";

const TableSkeleton = () => {
  return (
    <>
      <TableTop
        style={{
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Skeleton width="15%" height={36} style={{ minWidth: "120px" }} />
        <Skeleton width="7%" height={56} style={{ minWidth: "80px" }} />
      </TableTop>
      <CustomTableContainer>
        <CustomTable>
          <TableHead>
            <TableRow>
              <TableCell>
                <Skeleton width="50%" height={28} className="value" />
              </TableCell>

              <TableCell>
                <Skeleton width="50%" height={28} className="value" />
              </TableCell>

              <TableCell>
                <Skeleton width="50%" height={28} className="value" />
              </TableCell>

              <TableCell>
                <Skeleton width="50%" height={28} className="value" />
              </TableCell>
            </TableRow>
          </TableHead>
          {Array.from(Array(5).keys()).map(() => (
            <TableBody>
              <TableRow>
                <>
                  <TableCell>
                    <Skeleton width="50%" height={28} className="value" />
                  </TableCell>
                  <TableCell>
                    <Skeleton width="50%" height={28} className="value" />
                  </TableCell>
                  <TableCell>
                    <Skeleton width="50%" height={28} className="value" />
                  </TableCell>
                  <TableCell>
                    <Skeleton width="50%" height={28} className="value" />
                  </TableCell>
                </>
              </TableRow>
            </TableBody>
          ))}
        </CustomTable>
      </CustomTableContainer>
    </>
  );
};

export default TableSkeleton;
