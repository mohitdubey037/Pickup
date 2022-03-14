import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { Token } from "types";

export const uploadFile = (
  files: Array<File>,
  { onLoad, onError, onAbort }
) => {
  files.forEach((file) => {
    const reader = new FileReader();
    reader.onabort = onAbort;
    reader.onerror = onError;
    reader.onload = onLoad;
    reader.readAsArrayBuffer(file);
  });
};

export const getParamsFromUrl = (search: string) => {
  const qs = search.substring(1);
  const params = qs.split("&").reduce((a, b) => {
    let [key, val] = b.split("=");
    a[key] = val;
    return a;
  }, {});

  return params;
};

export const buildQueryParams = (queryParams: any) => {
  const params = new URLSearchParams(queryParams);
  return `?${params.toString()}`;
};

export const formatPhoneNo = (num: string) =>
  `(${num.slice(0, 3)})-${num.slice(3, 6)}-${num.slice(6)}`;

export const getUserId = () => {
  const token = Cookies?.get("token") || "";
  const decoded: Token | null = token ? jwt_decode(token) : null;
  return decoded?.userId;
};

export const fileDownload = (fileUrl: string, fileName: string) => {
  let link: any = document.createElement("a");
  link.href = fileUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
