import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
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
import FullCardSkeleton from "./PersonalProfileSkeleton";
import PersonalProfileSkeleton from "./PersonalProfileSkeleton";

interface Token {
  company: number;
  exp: number;
  iat: number;
  role: number;
  type: string;
  userId: number;
}

export default function PersonalProfileContainer({ path: string }) {
  const [passwordDrawerOpen, setPasswordDrawerOpen] = useState(false);
  const [editDetailsDrawerOpen, setEditDetailsDrawerOpen] = useState(false);
	const [loading, setLoading] = useState<boolean>(false);
  const [personalProfileDetails, setPersonalProfileDetails] =
    useState<any>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const token = Cookies?.get("token") || "";
      const decoded: Token | null = token ? jwt_decode(token) : null;
      const res: any = await getPersonalProfileDetails(decoded?.userId);
      setPersonalProfileDetails(res?.response?.data?.data);
      setLoading(false);
    })();
  }, []);

  const editDetails = async (values) => {
    console.log("values", values);

    await editPersonalProfileDetails(values).then(async () => {
      // const response: any = await getPersonalProfileDetails(decoded?.userId);
      // if (response?.success) {
      //   setPersonalProfileDetails(response?.response?.data?.data);
      // }
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
      <ContainerTitle title="Personal Profile" />
      {loading ?  (
				<PersonalProfileSkeleton />
			) : (
      <PersonalProfile
        personalProfileDetails={personalProfileDetails}
        setPasswordDrawerOpen={setPasswordDrawerOpen}
        setEditDetailsDrawerOpen={setEditDetailsDrawerOpen}
      />
      )}
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
          personalProfileDetails={personalProfileDetails}
          setEditDetailsDrawerOpen={setEditDetailsDrawerOpen}
          saveAction={editDetails}
        />
      </Drawer>
    </ModuleContainer>
  );
}
