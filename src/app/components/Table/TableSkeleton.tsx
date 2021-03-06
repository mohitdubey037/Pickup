import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Skeleton,
} from "@mui/material";

import { CustomTableContainer, CustomTable, TableTop } from "./style";

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
          <TableBody>
            {Array.from(Array(5).keys()).map((idx) => (
              <TableRow key={idx}>
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
            ))}
          </TableBody>
        </CustomTable>
      </CustomTableContainer>
    </>
  );
};

export default TableSkeleton;
