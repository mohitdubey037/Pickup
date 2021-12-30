import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Accordion } from "app/components/Accordion";
import { itempicture } from "../../../../assets/Images/index"
import { getOrderDetails } from "services/SingleShipmentServices";
import { Flex } from "app/components/Input/style";
interface orderDetails{
    referenceNumber?: string;
    items?: any;
    image?: string;
}

function OrderDetailsDrawer() {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [orderDetails, setOrderDetails] = useState<orderDetails>({})

    useEffect(() => {
        (async() => {
            const { response } = await getOrderDetails(4225)
            // console.log("Response", res)
            // setOrderDetails(response.data.data)
        })()
    }, [])

    return (
        <div >
            {/* <Grid style={{ width: 540, }}> */}

                <Accordion title={orderDetails.referenceNumber || "Some text" }>

                    <div>
                        <Flex direction="row" justifyContent="space-between">
                            <Flex direction="column">
                                <p>Category</p>
                                <p>Electronics</p>
                            </Flex>
                            <Flex direction="column">
                                <p>Customer Ref. #</p>
                                <p>PO1234</p>
                            </Flex>
                        </Flex>
                        <Flex direction="row" justifyContent="space-between">
                            <Flex direction="column">
                                <p>Delivery Options</p>
                                <p>Door drop</p>
                            </Flex>
                            <Flex direction="column">
                                <p>Fragile</p>
                                <p>Yes</p>
                            </Flex>
                        </Flex>
                        <div>
                            <h2>Order Description</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                optio
                            </p>
                            <img src={orderDetails?.image ? orderDetails?.image : 'https://5.imimg.com/data5/VH/KM/ZQ/SELLER-89149368/fish-feed-packaging-box-250x250.jpg'} alt="orderImage" />
                        </div>
                    </div>

                    {
                        orderDetails?.items?.length > 0 && orderDetails?.items.map((item, i) => {
                            return(
                                <Accordion key={i} title={item.name}>

                                </Accordion>
                            )
                        })
                    }

                </Accordion>

            {/* </Grid> */}
        </div>
    );
}

export default OrderDetailsDrawer;
