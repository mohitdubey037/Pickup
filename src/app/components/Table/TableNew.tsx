import { useEffect, useState } from "react";
import {
  Skeleton,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import { noSort, sortBy } from "app/assets/Icons";
import {
  TableTop,
  CustomTableContainer,
  CustomTable,
  CustomPagination,
} from "./style";
import { TableNewProps } from "./type";
import { Checkbox } from "../Checkbox";

const TableNew = ({
  loading,
  tableTop,
  coloumns,
  data,
  showCheckbox,
  onRowSelect,
  showPagination,
  pagination,
  onPageChange,
  sorting,
  onSortChange,
}: TableNewProps) => {
  const rowsPerPage = 10;
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [page, setPage] = useState<number>(0);
  const [sortDetail, setSortDetail] = useState({
    field: sorting?.field ? sorting?.field : "",
    type: sorting?.type ? sorting?.type : "",
  });

  useEffect(() => {
    handleRowSelect(false, undefined, "header");
  }, []);

  const handleSort = (field, type) => {
    handleRowSelect(false, undefined, "header");
    onSortChange?.(field, type);
    setSortDetail({ field, type });
  };

  const handleRowSelect = (checked: boolean, rowIndex?: any, id?: "header") => {
    let tempSR: number[] = [...selectedRows];
    if (checked) {
      if (id === "header") {
        tempSR = Array.from(Array(data.length).keys());
      } else tempSR.push(rowIndex);
    } else {
      if (id === "header") tempSR = [];
      else tempSR.splice(tempSR.indexOf(rowIndex), 1);
    }
    onRowSelect?.(tempSR);
    setSelectedRows(tempSR);
  };

  const handlePageChange = (event: any, newPage: number) => {
    handleRowSelect(false, undefined, "header");
    onPageChange?.(newPage);
    setPage(newPage);
  };

  return (
    <>
      {tableTop && <TableTop>{tableTop}</TableTop>}

      <CustomTableContainer>
        <CustomTable>
          <TableHead>
            {coloumns && coloumns.length > 0 && (
              <TableRow>
                {showCheckbox && (
                  <TableCell padding="checkbox">
                    <Checkbox
                      onChange={(e) =>
                        handleRowSelect(e.target.checked, undefined, "header")
                      }
                      isChecked={selectedRows.length === data.length}
                      disabled={loading}
                    />
                  </TableCell>
                )}
                {coloumns.map((col: any) => (
                  <TableCell key={col.id}>
                    {col.label}
                    {col.isSort && (
                      <>
                        {sortDetail.field === col.id ? (
                          <img
                            src={sortBy}
                            alt=""
                            style={loading ? { cursor: "default" } : {}}
                            className={
                              sortDetail.type === "asc" ? "ascending" : ""
                            }
                            onClick={() =>
                              !loading &&
                              handleSort(
                                col.id,
                                sortDetail.type === "asc" ? "desc" : "asc"
                              )
                            }
                          />
                        ) : (
                          <img
                            src={noSort}
                            alt=""
                            style={loading ? { cursor: "default" } : {}}
                            onClick={() =>
                              !loading && handleSort(col.id, "desc")
                            }
                          />
                        )}
                      </>
                    )}
                  </TableCell>
                ))}
              </TableRow>
            )}
          </TableHead>

          <TableBody>
            {data.length > 0 &&
              data.map((row: any, index: number) => (
                <TableRow key={index}>
                  {showCheckbox && (
                    <TableCell>
                      <Checkbox
                        onChange={(e) =>
                          handleRowSelect(e.target.checked, index, undefined)
                        }
                        isChecked={selectedRows.includes(index)}
                        disabled={loading}
                      />
                    </TableCell>
                  )}
                  {loading
                    ? coloumns.map((col: any) => (
                        <TableCell key={col.id}>
                          <Skeleton width="50%" />
                        </TableCell>
                      ))
                    : Object.values(row).map((colData: any, idx: number) => (
                        <TableCell key={idx}>{colData}</TableCell>
                      ))}
                </TableRow>
              ))}
          </TableBody>
        </CustomTable>
      </CustomTableContainer>

      {showPagination && (
        <CustomPagination
          rowsPerPage={rowsPerPage}
          count={pagination.count}
          page={page}
          onPageChange={handlePageChange}
          labelDisplayedRows={({ count, page }) => (
            <span>
              <b>{page + 1}</b>&nbsp;
              {` out of ${Math.ceil(count / rowsPerPage)}`}
            </span>
          )}
          rowsPerPageOptions={[]}
          backIconButtonProps={{
            disabled: loading || page === 0,
          }}
          nextIconButtonProps={{
            disabled:
              loading || page + 1 === Math.ceil(pagination.count / rowsPerPage),
          }}
        />
      )}
    </>
  );
};

export default TableNew;
