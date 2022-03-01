import { useState } from "react";
import { Badge, Avatar, CircularProgress } from "@mui/material";

import { editavatar } from "app/assets/Icons";
import { imageUploadService } from "services/SingleShipmentServices";
import { showToast } from "utils";
import { IMAGE_FILE_TYPES } from "../../../constants";

const styles = {
  EditIcon: {
    width: 22,
    height: 22,
    background: "#fece3e",
    padding: 7,
    cursor: "pointer",
  },
  ProfileImg: { height: 86, width: 86, border: "1px solid #ddd" },
  Loader: { height: 25, width: 25, color: "#fece3e" },
};

interface EditAvatarInterface {
  src?: string;
  onChange: (val: string) => void;
  setLoading?: (val: boolean) => void;
}

const EditAvatarNew = (props: EditAvatarInterface) => {
  const { src, onChange, setLoading } = props;

  const [uploading, setUploading] = useState<boolean>(false);

  const setLoader = (val) => {
    setUploading(val);
    setLoading?.(val);
  };

  const handleImageUpload = () => {
    let element = document.createElement("input");
    element.setAttribute("type", "file");
    element.setAttribute("accept", IMAGE_FILE_TYPES.toString());
    element.click();
    element.addEventListener("change", async (e: any) => {
      setLoader(true);
      const formData = new FormData();
      const image = e?.target?.files[0];
      if (!IMAGE_FILE_TYPES.includes(image.type) || image.size > 5242880) {
        showToast(
          "You can only upload JPG, JPEG, PNG image (size less than 5MB)",
          "error"
        );
        setLoader(false);
        return;
      }
      formData.append("document", image, image?.name);
      const res: any = await imageUploadService(formData);
      if (res.error) {
        showToast(res.error.message, "error");
      } else {
        onChange(res?.response?.data?.data || "");
      }
      setLoader(false);
    });
  };

  return (
    <Badge
      overlap="circular"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      badgeContent={
        uploading ? (
          <CircularProgress style={styles.Loader} thickness={6} />
        ) : (
          <Avatar
            src={editavatar}
            style={styles.EditIcon}
            onClick={handleImageUpload}
          />
        )
      }
    >
      <Avatar src={src} style={styles.ProfileImg} />
    </Badge>
  );
};

export default EditAvatarNew;
