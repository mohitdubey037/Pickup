import { toast, TypeOptions } from "react-toastify";

export const showToast = (msg: string, type: TypeOptions) => {
  toast(msg, {
    position: "top-right",
    theme: "colored",
    type: type,
  });
};
