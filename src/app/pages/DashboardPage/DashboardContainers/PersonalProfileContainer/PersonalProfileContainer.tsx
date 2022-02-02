import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { Drawer } from "app/components/Drawer";
import ModuleContainer from "app/components/ModuleContainer";
import { H2 } from "app/components/Typography/Typography";
import PersonalProfile from "./PersonalProfile";
import ChangePasswordForm from "./ChangePasswordForm";
import EditPersonalDetailsForm from "./EditPersonalDetailsForm";
import {
  editPersonalProfileDetails,
  changeProfilePassword,
  getPersonalProfileDetails,
} from "services/PersonalProfileServices";
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

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const token = Cookies?.get("token") || "";
      const decoded: Token | null = token ? jwt_decode(token) : null;
      const res: any = await getPersonalProfileDetails(decoded?.userId);
      if (res?.success) {
        setPersonalProfileDetails(res?.response?.data?.data);
        dispatch({
          type: "UPDATE_USER",
          user: res?.response?.data?.data,
        });
      }
      setLoading(false);
    })();
  }, []);

  const editDetails = async (values) => {
    const token = Cookies?.get("token") || "";
    const decoded: Token | null = token ? jwt_decode(token) : null;
    await editPersonalProfileDetails(values).then(async () => {
      const response: any = await getPersonalProfileDetails(decoded?.userId);
      if (response?.success) {
        setPersonalProfileDetails(response?.response?.data?.data);
        dispatch({
          type: "UPDATE_USER",
          user: response?.response?.data?.data,
        });
      }
    });
    setEditDetailsDrawerOpen(false);
  };

  const changePassword = async (values) => {
    const res = (await changeProfilePassword(values)) as any;
    if (res?.success) {
      setPasswordDrawerOpen(false);
    }
  };

  return (
    <ModuleContainer>
      <H2 title="Personal Profile" />
      {loading ? (
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
