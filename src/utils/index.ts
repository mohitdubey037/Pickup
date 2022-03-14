import { confirmAlert } from "react-confirm-alert";
import { toast, TypeOptions } from "react-toastify";

export const showToast = (msg: string, type: TypeOptions) => {
  toast(msg, {
    position: "top-right",
    theme: "colored",
    type: type,
  });
};

export const showConfirmAlert = (options: any) => {
  confirmAlert({
    ...options,
    buttons: [
      ...options.buttons,
      {
        label: "No",
      },
    ],
    closeOnEscape: false,
    closeOnClickOutside: false,
  });
};
