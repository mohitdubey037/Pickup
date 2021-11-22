import { Button } from "app/components/Buttons";
import { Input } from "app/components/Input";
import ModuleContainer from "app/components/ModuleContainer";
import { Table } from "app/components/Table";
import { ContainerTitle } from "app/components/Typography/Typography";
import { searchTable } from "./helper";
import { SearchFieldsWrapper, SearchTableTop } from "./style";
import { dots3, sliders } from "app/assets/Icons";
import Select from "app/components/Select";
const SearchContainer = ({ path: string }) => {
  const tableTop = () => {
    return (
      <SearchTableTop>
        <p>{searchTable.length} Shipments</p>
        <div>
         
          <Button label="Print" onClick={() => {}} />
          <img src={dots3} alt="" />
        </div>
      </SearchTableTop>
    );
  };

  return (
    <ModuleContainer>
      <ContainerTitle>Search</ContainerTitle>
      <SearchFieldsWrapper >
          <Input label="Invoice Number" placeholder="eg. 123,321" />
          <Input label="Shipping Id" placeholder="eg. 123,321" />
          <Input label="From Shipping Date" placeholder="Select" />
          <Input label="To Shipping Date" placeholder="Select" />
          <Select label="Status" style={{width:90}}/>
          <Button size={"large"} label="Search" onClick={() => {}} />
        <img style={{ marginRight:1,marginTop:50}} src={sliders} alt="" />
      </SearchFieldsWrapper>
      <Table
        data={searchTable}
        tableTop={tableTop()}
        showCheckbox
        showPagination
        perPageRows={10}
        filterColumns={[0, 1, 2, 3, 4, 5]}
      />
    </ModuleContainer>
  );
};

export default SearchContainer;
