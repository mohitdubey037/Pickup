import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Accordion } from "app/components/Accordion";
import { getOrderDetails } from "services/SingleShipmentServices";
import { Flex } from "app/components/Input/style";
import { showToast } from "utils";
import { useParams } from "@reach/router";

interface orderDetails{
    referenceNumber?: string;
    dropOption?: number;
    items?: any;
    image?: string;
    category?: string;
    fragile?: number;
    description?: string;
    picture?: string;
}

function OrderDetailsDrawer(props) {

    const [orderDetails, setOrderDetails] = useState<orderDetails>({})
    const [isFragile, setIsFragile] = useState<boolean>(false);
    const [showLoader, setShowLoader] = useState<boolean>(false)
    const { orderId } = useParams()

    useEffect(() => {
        (async() => {
            setShowLoader(true)
            const { response } = await getOrderDetails(orderId)
            console.log('response', response)
            if(response) {
                setOrderDetails(response.data.data)
                setShowLoader(false)
            }else{
                setShowLoader(false)
                showToast("Could not get the data, Please try again!", "error")
                props.setDrawerOpen(false)
            }

        })()
    }, [orderId, props])

    useEffect(() => {
            const fragile = orderDetails?.items?.filter((item) => {
                if(item.fragile === 1) return true
                return false
            })
            if(fragile?.length > 0){
                setIsFragile(true)
            }
    }, [orderDetails])

    return (
        <div >
            {
                showLoader ? 
                <CircularProgress style={{ color: "black" }} />
                :
                <Accordion title={`Order Items - ${orderDetails.referenceNumber ? orderDetails.referenceNumber : ''}`}>
                    <div>   
                        <Flex direction="row" justifyContent="space-between">
                            <Flex direction="column">
                                <p>Category</p>
                                <p>{orderDetails?.category}</p>
                            </Flex>
                            <Flex direction="column">
                                <p>Customer Ref. #</p>
                                <p>{orderDetails.referenceNumber}</p>
                            </Flex>
                        </Flex>
                        <Flex direction="row" justifyContent="space-between">
                            <Flex direction="column">
                                <p>Delivery Options</p>
                                <p>{orderDetails.dropOption === 10 ? "Door Drop" : "Safe Drop"}</p>
                            </Flex>
                            <Flex direction="column">
                                <p>Fragile</p>
                                <p>{ isFragile ? "Yes" : "No" }</p>
                            </Flex>
                        </Flex>
                        <div>
                            <h2>Order Description</h2>
                            <p>
                                {orderDetails?.description}
                            </p>
                            <img style={{ width: '120px', height: '100px' }} src={orderDetails?.picture && orderDetails?.picture} alt="orderImage" />
                        </div>
                    </div>

                    {
                        orderDetails?.items?.length > 0 && orderDetails?.items.map((item, i) => {
                            return(
                                <Accordion key={i} title={`Item #${i+1} ${item.name}`}>
                                    <Flex direction="row">
                                        {item.weight && <Flex direction="column">
                                            <h3>Weight(lbs)</h3>
                                            <p>{item.weight}</p>
                                        </Flex>}
                                        {item.length && item.width && item.height && <Flex direction="column">
                                            <h3>LBH(inches)</h3>
                                            <p>{item.length}x{item.width}x{item.height}</p>
                                        </Flex>}
                                        {item.quantity && <Flex direction="column">
                                            <h3>Pieces</h3>
                                            <p>{item.quantity}</p>
                                        </Flex>}
                                    </Flex>
                                    {item.description && <div>
                                        <h3>Shipment Description</h3>
                                        <p>{item.description}</p>
                                    </div>}
                                </Accordion>
                            )
                        })
                    }
                </Accordion>
            }
        </div>
    );
}

export default OrderDetailsDrawer;
