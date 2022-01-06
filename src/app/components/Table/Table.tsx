import React, { useEffect } from "react";
import {
    TableTop,
    CustomTableContainer,
    CustomTable,
    CustomPagination,
} from "./style";
import { TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { TableProps } from "./type";
import { sortBy } from "app/assets/Icons";
import { Checkbox } from "../Checkbox";
import { Input } from "../Input";

const Table = ({
    tableTop,
    data,
    showCheckbox,
    showPagination,
    filterColumns,
    perPageRows,
    selectedItems,
    getSelectedItems,
    onRowSelect
}: TableProps) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(0);
    const [selectedRows, setSelected] = React.useState<Array<unknown>>([]);

    useEffect(() => {
        perPageRows ? setRowsPerPage(perPageRows) : setRowsPerPage(5);
    }, [perPageRows]);

    useEffect(() => {
        selectedItems ? setSelected(selectedItems) : setSelected([]);
    }, [selectedItems]);

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value));
        setPage(0);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleCheckboxClick = (
        event: React.ChangeEvent<HTMLInputElement>,
        selected?: unknown,
        id?: "header"
    ) => {
        let localSelected: Array<unknown> = [...selectedRows];
        if (event.target.checked) {
            if (id === "header") {
                localSelected = [];
                localSelected = data;
            } else localSelected.push(selected);
        } else {
            if (id === "header") localSelected = [];
            else localSelected.splice(localSelected.indexOf(selected), 1);
        }
        setSelected(localSelected);
        getSelectedItems && getSelectedItems(localSelected);
    };

    return (
        <>
            {tableTop && <TableTop>{tableTop}</TableTop>}
            <CustomTableContainer>
                <CustomTable>
                    <TableHead>
                        <TableRow>
                            {showCheckbox && (
                                <Checkbox
                                    label={""}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                        handleCheckboxClick(e, undefined, "header")
                                    }
                                />
                            )}
                            {!!data?.length &&
                                Object.keys(data[0] as object).map((title, idx: number) => (
                                    <TableCell>
                                        {title}
                                        {filterColumns?.includes(idx) && (
                                            <img src={sortBy} alt="" />
                                        )}
                                    </TableCell>
                                ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row: any) => (
                                <TableRow style={{ cursor: 'pointer' }} onClick={() => onRowSelect && onRowSelect(row)}>
                                    {Object.values(row).map((cellData: any, idx: number) => (
                                        <>
                                            {/* {console.log('cellData', row["Order Id"])} */}
                                            {showCheckbox && idx === 0 && (
                                                <Checkbox
                                                    label={""}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                                        handleCheckboxClick(e, row["Order Id"], undefined)
                                                    }
                                                    isChecked={selectedRows.includes(row["Order Id"])}
                                                />
                                            )}
                                            <TableCell>{cellData}</TableCell>
                                        </>
                                    ))}
                                </TableRow>
                            ))}
                    </TableBody>
                </CustomTable>
            </CustomTableContainer>
            {showPagination && (
                <CustomPagination
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    labelRowsPerPage={
                        <Input
                            placeholder={"e.g 5"}
                            onChange={(val) =>
                                val !== 0 ? setRowsPerPage(val) : setRowsPerPage(5)
                            }
                            initValue={rowsPerPage}
                        />
                    }
                />
            )}
        </>
    );
};

export default Table;
