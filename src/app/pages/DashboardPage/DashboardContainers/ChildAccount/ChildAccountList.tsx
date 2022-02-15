import React,{useEffect, useState} from "react";
import ModuleContainer from "app/components/ModuleContainer";
import { H2, H3 } from "app/components/Typography/Typography";
import { Flex } from "app/components/Input/style";
import { Button } from "app/components/Buttons";
import { Table } from "app/components/Table";
import { OnHoldTableTop } from "../OnHoldShipment/Style";
import { useNavigate } from "@reach/router";
import { childDataTable, invoiceTable } from "../PaymentsContainer/helper";
import { getChildAccountData, postChildAccountData } from "../../../../../services/ChildAccount/index";

import { useDispatch } from "react-redux";
import { actions } from "store/reducers/PaymentReducer";


export default function ChildAccountList({ path: string }) {

  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [totalData, setTotalData] = useState<any>(0);
  const [sortType, setSortType] = useState<string | undefined>("desc");
  const [childData, setChildData] = useState<any>([]);

  const [drawerType, setDrawerType] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();
    useEffect(() => {
          dispatch(actions.getCards());
  }, []);

  const addChild = () => {
    navigate("/dashboard/my-account/child-account");
  };

  const childDetails = () => {
    navigate("/dashboard/my-account/child-account-details");
  };

  useEffect(() => {
    getChildData()
  }, []);

  const openInvoiceDrawer = (id: any, type: any) => {
    // if (type === "invoice" || type === "orderDetails") {
    //   setSelectedInvoiceId(id);
    // }
    console.log('hii');
    setDrawerType(type);
    setDrawerOpen(true);
  };

  const getChildData = async () => {
    const res = (await getChildAccountData()) as any;
    console.log(res);
    if (!res?.error) {
      const InvoiceList = res.response.data.data.list;
      console.log(InvoiceList);
      setChildData(InvoiceList);
      setPage(res.response.data.data.pageMetaData.page - 1);
      setTotalPages(res.response.data.data.pageMetaData.totalPages);
      setTotalData(res.response.data.data.pageMetaData.total);
    } else if (res.error) {
      const InvoiceList = res;
      setChildData(InvoiceList);
    }
  }

  const getSearchPaginatedData = async (page, sortingField, sortingType) => {
    setSortType(sortingType);
    let res;
    if (page === 0) {
      res = (await getChildAccountData('',0, 10, sortingField, sortingType)) as any;
    }
    else {
      res = (await getChildAccountData('',page+1, 10, sortingField, sortingType)) as any;
    }
    if (!res?.error) {
      const InvoiceList = res.response.data.data.list;
      setPage(page);
      setChildData(InvoiceList);
    } else if (!res.error) {
      const InvoiceList = res;
      setChildData(InvoiceList);
    }
  };

  const tableTop = () => {
    return (
      <OnHoldTableTop>
        <p> Accounts</p>
      </OnHoldTableTop>
    );
  };

  return (
    <ModuleContainer>
      <Flex justifyContent="space-between" bottom={24}>
        <H2 title="Child Accounts" />
        <Button size="medium" label="child Details" onClick={childDetails} />
        <Button size="medium" label="Create New" onClick={addChild} />
      </Flex>

        <Table
        data={childDataTable(childData, openInvoiceDrawer)}
        tableTop={tableTop()}
        sortTypeProps = {sortType}
        paginationData={(page, sortingField, sortingType) => getSearchPaginatedData(page, sortingField, sortingType)}
        showCheckbox 
        showPagination
        perPageRows={10}
        page={page}
        totalData={totalData}
        totalPage={totalPages}
        filterColumns={[0, 1, 2, 3, 4, 5]}
      />
    </ModuleContainer>
  );
}
