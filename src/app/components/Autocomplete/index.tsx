import { ReactNode, useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";

import { Input } from "app/components/Input";
import { fetchSuggestions, fetchLatLong } from "services/HereMapsService";
import { Suggestions } from "./styles";

interface AutocompleteProps {
  name: string;
  label?: string | ReactNode;
  initValue: any;
  placeholder?: string;
  onChange: (value: any) => void;
  onBlur?: (value: any) => void;
  onSelect: (value: any) => void;
  error?: any;
  disabled?: boolean;
}

const Autocomplete = ({
  name,
  label,
  initValue,
  placeholder,
  onChange,
  onBlur,
  onSelect,
  error,
  disabled,
}: AutocompleteProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [delayDebounceFn, setDelayDebounceFn] = useState<any>(null);
  const [suggestionsList, setSuggestionsList] = useState<any>([]);

  const ref = useOnclickOutside(() => {
    setOpen(false);
    setSuggestionsList([]);
  });

  const getAddressSuggestions = async (value) => {
    let res = await fetchSuggestions(value);
    setSuggestionsList(res?.suggestions || []);
    setOpen(true);
  };

  const handleChange = (e) => {
    onChange(e);
    delayDebounceFn && clearTimeout(delayDebounceFn);
    setDelayDebounceFn(() =>
      setTimeout(
        () => e.target.value && getAddressSuggestions(e.target.value),
        500
      )
    );
  };

  const parseAddressDetails = (value) => {
    let temp = {
      latitude: "",
      longitude: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      postalCode: "",
      state: "",
      country: "",
    };
    if (
      value?.displayPosition?.latitude &&
      value?.displayPosition?.longitude &&
      value?.address
    ) {
      const {
        displayPosition: { latitude, longitude },
        address,
      }: any = value;
      let tempAddress1: any = [],
        tempState = "",
        tempCountry = "";

      ["housenumber", "street", "subdistrict"].forEach((key) => {
        address?.[key] && tempAddress1.push(address?.[key]);
      });
      tempAddress1 = tempAddress1.join(", ");

      address?.additionalData.forEach((ele) => {
        if (ele.key === "CountryName" && !tempCountry) {
          tempCountry = ele.value;
        }
        if (
          (ele.key === "StateName" || ele.key === "CountyName") &&
          !tempState
        ) {
          tempState = ele.value;
        }
      });

      temp["latitude"] = latitude || "";
      temp["longitude"] = longitude || "";
      temp["addressLine1"] = tempAddress1 || "";
      temp["addressLine2"] = address?.district || "";
      temp["city"] = address?.city || "";
      temp["postalCode"] = address?.postalCode || "";
      temp["state"] = tempState || address?.state || address?.county || "";
      temp["country"] = tempCountry || address?.country || "";
    }

    return temp;
  };

  const onAddressSelect = async (value) => {
    let res = await fetchLatLong(value);
    const data = parseAddressDetails(
      res?.response?.view?.[0]?.result?.[0]?.location || null
    );
    onSelect?.(data);
    setOpen(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <Input
        name={name}
        label={label}
        placeholder={placeholder}
        initValue={initValue}
        onChange={handleChange}
        onBlur={onBlur}
        error={error}
        required
        disabled={disabled}
      />

      {open && suggestionsList?.length > 0 && (
        <Suggestions ref={ref}>
          {suggestionsList?.map((suggestion) => (
            <li
              key={suggestion?.locationId}
              onClick={() => onAddressSelect(suggestion)}
            >
              {suggestion?.label}
            </li>
          ))}
        </Suggestions>
      )}
    </div>
  );
};
export default Autocomplete;
