import { toast } from "react-toastify";

export const showToast = (msg: string, type) => {
  toast(msg, {
    position: "top-right",
    theme: "colored",
    type: type,
  });
};
