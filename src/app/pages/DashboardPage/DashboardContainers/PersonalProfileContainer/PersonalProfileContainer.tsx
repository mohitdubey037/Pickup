import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Drawer } from "app/components/Drawer";
import ModuleContainer from "app/components/ModuleContainer";
import { ContainerTitle } from "app/components/Typography/Typography";
import PersonalProfile from "./PersonalProfile";
import { AuthUser } from "types";
import ChangePasswordForm from "./ChangePasswordForm";
import EditPersonalDetailsForm from "./EditPersonalDetailsForm";
import {
    editPersonalProfileDetails,
    changeProfilePassword,
    getPersonalProfileDetails,
} from "services/PersonalProfileServices";


export default function PersonalProfileContainer({ path: string }) {

    const [passwordDrawerOpen, setPasswordDrawerOpen] = useState(false);
    const [editDetailsDrawerOpen, setEditDetailsDrawerOpen] = useState(false);

    const dispatch = useDispatch();

    const auth = useSelector((state: { auth: { user: AuthUser } }) => {
        return state.auth;
    });

    const { user } = auth;

    const editDetails = async (values) => {
        console.log("values", values);
        await editPersonalProfileDetails(values).then(async () => {
            const response: any = await getPersonalProfileDetails(user?.userId);
            if (response?.success) {
                dispatch({
                    type: "UPDATE_USER",
                    user: response?.response?.data,
                });
            }
        });
        setEditDetailsDrawerOpen(false);
    };

    const changePassword = async (values) => {
        const res = (await changeProfilePassword(values)) as any;
        console.log(res);
        setPasswordDrawerOpen(false);
    };

    return (
        <ModuleContainer>
            <ContainerTitle>Personal Profile</ContainerTitle>
            <PersonalProfile
                user={user}
                setPasswordDrawerOpen={setPasswordDrawerOpen}
                setEditDetailsDrawerOpen={setEditDetailsDrawerOpen}
            />
            <Drawer
                open={passwordDrawerOpen}
                title="Change Password"
                setDrawerOpen={(flag) => setPasswordDrawerOpen(flag)}
                closeIcon={true}
                actionButtons={true}
            >
                <ChangePasswordForm
                    setPasswordDrawerOpen={setPasswordDrawerOpen}
                    saveAction={changePassword}
                />
            </Drawer>
            <Drawer
                open={editDetailsDrawerOpen}
                title="Edit Personal Details"
                setDrawerOpen={(flag) => setEditDetailsDrawerOpen(flag)}
                closeIcon={true}
                actionButtons={true}
            >
                <EditPersonalDetailsForm
                    setEditDetailsDrawerOpen={setEditDetailsDrawerOpen}
                    saveAction={editDetails}
                />
            </Drawer>
        </ModuleContainer>
    );
}
