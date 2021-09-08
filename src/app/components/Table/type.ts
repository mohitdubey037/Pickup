import { ReactNode } from "react";

export interface TableProps{
    tableTop?:ReactNode;
    data:Array<unknown>;
    showCheckbox?:boolean;
    showPagination?:boolean;
    filterColumns?:Array<number>;
    perPageRows?:number;
    selectedItems?:Array<unknown>;
    getSelectedItems?:(rows:Array<unknown>)=>void;
}
