import React from "react";
import { CustomTableContainer, CustomTable, TableTop } from "./style";
import { TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { Checkbox } from "../Checkbox";
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
        <Skeleton width="15%" height={36} style={{minWidth: '120px'}} />
        <Skeleton width="7%" height={56} style={{minWidth: '80px'}} />
      </TableTop>
      <CustomTableContainer>
        <CustomTable>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox label={null} />
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

              <TableCell>
                <Skeleton width="50%" height={28} className="value" />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <>
                <TableCell>
                  <Checkbox label={""} />
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
                <TableCell>
                  <Skeleton width="50%" height={28} className="value" />
                </TableCell>
              </>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <>
                <TableCell>
                  <Checkbox label={""} />
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
                <TableCell>
                  <Skeleton width="50%" height={28} className="value" />
                </TableCell>
              </>
            </TableRow>
          </TableBody>
        </CustomTable>
      </CustomTableContainer>
    </>
  );
};

export default TableSkeleton;
