import { Block, Flex } from "app/components/Input/style";
import React from "react";
interface ContactDetailsSidebarProps {
  contactInfo: any;
}
function ContactDetailsSidebar(props: ContactDetailsSidebarProps) {
  console.log(props.contactInfo);
  return (
    <Flex direction={"column"} style={{ width: 500, marginLeft: 20 }}>
      <Flex>
        <Block style={{ flex: 1 }}>
          <div>Company Name</div>
          <b>Torinit</b>
        </Block>
        <Block style={{ flex: 1 }}>
          <div>First Name</div>
          <b>John</b>
        </Block>
        <Block style={{ flex: 1 }}>
          <div>Last Name</div>
          <b>Doe</b>
        </Block>
      </Flex>

      <Flex style={{ marginTop: 24 }}>
        <Block style={{ flex: 1 }}>
          <div>Address Line 1</div>
          <b>Torinit</b>
        </Block>
        <Block style={{ flex: 1 }}>
          <div>Address Line 2</div>
          <b>Torinit</b>
        </Block>
        <Block style={{ flex: 1 }}></Block>
      </Flex>

      <Flex style={{ marginTop: 24 }}>
        <Block style={{ flex: 1 }}>
          <div>Company Name</div>
          <b>Torinit</b>
        </Block>
        <Block style={{ flex: 1 }}>
          <div>First Name</div>
          <b>Torinit</b>
        </Block>
        <Block style={{ flex: 1 }}>
          <div>Last Name</div>
          <b>Torinit</b>
        </Block>
      </Flex>

      <Flex style={{ marginTop: 24 }}>
        <Block style={{ flex: 1 }}>
          <div>Company Name</div>
          <b>Torinit</b>
        </Block>
        <Block style={{ flex: 1 }}>
          <div>First Name</div>
          <b>Torinit</b>
        </Block>
        <Block style={{ flex: 1 }}>
          <div>Last Name</div>
          <b>Torinit</b>
        </Block>
      </Flex>
      <Flex style={{ marginTop: 24 }}>
        <Block style={{ flex: 1 }}>
          <div>Company Name</div>
          <b>Torinit</b>
        </Block>
        <Block style={{ flex: 1 }}>
          <div>First Name</div>
          <b>Torinit</b>
        </Block>
        <Block style={{ flex: 1 }}>
          <div>Last Name</div>
          <b>Torinit</b>
        </Block>
      </Flex>
    </Flex>
  );
}

export default ContactDetailsSidebar;
