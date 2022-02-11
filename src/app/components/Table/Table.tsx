import React, { useEffect } from "react";
import { TableTop, CustomTableContainer, CustomTable, CustomPagination } from "./style";
import { TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { TableProps } from "./type";
import { sortBy } from "app/assets/Icons";
import { Checkbox } from "../Checkbox";

const Table = ({
    tableTop,
    data,
    showCheckbox,
    showPagination,
    filterColumns,
    // perPageRows,
    selectedItems,
    getSelectedItems,
    onRowSelect,
    dataChecked,
    totalPage,
    totalData,
    page,
    columnPagination,
    paginationData,
}: TableProps) => {
    // const [page, setPage] = React.useState(0);
    const [sortType, setSortType] = React.useState<boolean>(true);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [selectedRows, setSelected] = React.useState<Array<unknown>>([]);

    // const pagePerRows = 10;

    // useEffect(() => {
    //     perPageRows ? setRowsPerPage(perPageRows) : setRowsPerPage(5);
    // }, [perPageRows]);

    const sort = (title) => {
        let tempTitle;
        console.log(title);
        if (title === "Invoice Date") {
            tempTitle = 'invoiceCreatedAt';
        }
        else if (title === 'Invoice Number'){
            tempTitle = 'invoiceNumber';
        }
        else if (title === 'Invoice Amount') {
            tempTitle = "total";
        }
        if (tempTitle) {
            setSortType(!sortType)
            if (sortType === true) {
                columnPagination?.(tempTitle, 'asc')
            }
            else {
                columnPagination?.(tempTitle, 'desc')
            }
        }
    }


    useEffect(() => {
        selectedItems ? setSelected(selectedItems) : setSelected([]);
    }, [selectedItems]);

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value));
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        paginationData?.(newPage);
        handleCheckboxClick(false, undefined, "header");
    };

    const handleCheckboxClick = (checked: boolean, selected?: unknown, id?: "header") => {
        let localSelected: Array<unknown> = [...selectedRows];
        if (checked) {
            if (id === "header") {
                localSelected = [];
                localSelected = Array.from(Array(data.length).keys());
            } else localSelected.push(selected);
        } else {
            if (id === "header") localSelected = [];
            else localSelected.splice(localSelected.indexOf(selected), 1);
        }
        setSelected(localSelected);
        getSelectedItems && getSelectedItems(localSelected);
        dataChecked?.(localSelected);
    };

    return (
        <>
            {tableTop && <TableTop>{tableTop}</TableTop>}
            <CustomTableContainer>
                <CustomTable>
                    <TableHead>
                        <TableRow>
                            {!!data?.length && showCheckbox && (
                                <TableCell padding="checkbox">
                                    <Checkbox label="" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCheckboxClick(e.target.checked, undefined, "header")} isChecked={selectedRows.length === data.length} />
                                </TableCell>
                            )}
                            {!!data?.length &&
                                Object.keys(data[0] as object).map((title, idx: number) => (
                                    <TableCell>
                                        {title}
                                        {filterColumns?.includes(idx) && <img src={sortBy} alt="" 
                                        onClick={() => sort(title)}/>}
                                    </TableCell>
                                ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data
                            // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row: any, index: number) => (
                                <TableRow onClick={() => onRowSelect && onRowSelect(row, index)}>
                                    {Object.values(row).map((cellData: any, idx: number) => (
                                        <>
                                            {showCheckbox && idx === 0 && (
                                                <TableCell>
                                                    <Checkbox label="" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCheckboxClick(e.target.checked, index, undefined)} isChecked={selectedRows.includes(index)} />
                                                </TableCell>
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
                    count={totalData}
                    rowsPerPage={rowsPerPage}
                    page={page ? page : 0}
                    onPageChange={handleChangePage}
                    labelRowsPerPage=""
                    rowsPerPageOptions={[]}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    // labelRowsPerPage={
                    //     <Input
                    //         placeholder={"e.g 5"}
                    //         onChange={(val) =>
                    //             val !== 0 ? setRowsPerPage(val) : setRowsPerPage(5)
                    //         }
                    //         initValue={rowsPerPage}
                    //     />
                    // }
                />
            )}
        </>
    );
};

export default Table;
