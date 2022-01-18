import { Avatar } from "@material-ui/core";
import { FormContainerTitle } from "app/components/Typography/Typography";
import EditIcon from "app/components/EditIcon";
import { Typography } from "@material-ui/core";
import { Button } from "../../../../components/Buttons";
import { Block, Flex, FullCard } from "app/components/Input/style";
interface CardInterface {
    user: any;
    setPasswordDrawerOpen: (value: boolean) => void;
    setEditDetailsDrawerOpen: (value: boolean) => void;
}

export default function PersonalProfile(props: CardInterface) {
    const { setPasswordDrawerOpen, setEditDetailsDrawerOpen } = props;
    const { user } = props
    return (
        <FullCard style={{ marginLeft: 0 }}>
            <Flex direction={"column"} style={{ paddingRight: 20 }}>
                <Flex>
                    <FormContainerTitle style={{ flex: 1, textAlign: "left" }}>
                        Personal Details
                    </FormContainerTitle>
                    <EditIcon onClick={setEditDetailsDrawerOpen} />
                </Flex>

                <Flex style={{ marginTop: 15 }}>
                    <Avatar style={{ width: 86, height: 86 }} src={user?.profileImage}/>
                        {/* <img src={user?.profileImage} alt="profileImage" width={86} /> */}
                    {/* </Avatar> */}
                    <Flex direction={"column"} style={{ marginLeft: 20 }}>
                        <Flex>
                            <Block style={{ flex: 1, textAlign: "left" }}>
                                <span> First Name</span>
                                <Typography className="typography" variant="h1" component="h3">
                                    {user?.firstName}
                                </Typography>
                            </Block>
                            <Block style={{ flex: 1, textAlign: "left" }}>
                                <span> Last Name</span>
                                <Typography className="typography" variant="h1" component="h3">
                                    {user?.lastName}
                                </Typography>
                            </Block>
                            <Block style={{ flex: 1, textAlign: "left" }}>
                                <span> Phone Number</span>
                                <Typography className="typography" variant="h1" component="h3">
                                    {user?.userDetails?.phoneNo}
                                </Typography>
                            </Block>
                            <Block style={{ flex: 1, textAlign: "left" }}>
                                <span>Role/Designation</span>
                                <Typography className="typography" variant="h1" component="h3">
                                    {user?.roleDesignation}
                                </Typography>
                            </Block>
                            <Block style={{ flex: 1, textAlign: "left" }}>
                                <span> Email Id</span>
                                <Typography className="typography" variant="h1" component="h3">
                                    {user?.emailId}
                                </Typography>
                            </Block>
                            <Block style={{ flex: 1, textAlign: "left" }}>
                                <Button
                                    label="Change Password"
                                    size="small"
                                    onClick={() => {
                                        setPasswordDrawerOpen(true);
                                    }}
                                />
                            </Block>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </FullCard>
    );
}
