/* eslint-disable no-debugger */
import { useState, useEffect } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import { Input } from "app/components/Input";
import {
  fetchSuggestions,
  fetchLatLong,
} from "../../../../../services/HereMapsService";

// function sleep(delay = 0) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, delay);
//   });
// }

// interface Suggestion {
//   address: string;
//   countryCode: string;
//   label: string;
//   language: string;
//   locationId: string;
//   matchLevel: string;
// }

const AutoComplete = ({
  id,
  name,
  label,
  initValue,
  value,
  error,
  placeholder,
  onSelect,
  setFieldValue,
  handleBlur,
  disabled,
  onChange,
}) => {
  const [suggestionsList, setSuggestionsList] = useState<any>([]);
  const [addressData, setAddressData] = useState<any>(null);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);

  const [open, setOpen] = useState<boolean>(false);
  // const loading = open && suggestionsList?.length === 0;

  const ref = useOnclickOutside(() => {
    setOpen(false);
  });

  useEffect(() => {
    if (!open) {
      setSuggestionsList([]);
    }
  }, [open]);
  useEffect(() => {
    onSelect && onSelect(null);
    const delayDebounceFn = setTimeout(() => {
      if (value && value !== addressData?.location?.address?.label) {
        searchService(value);
      }
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [value]);

  const getLatLn = async (value) => {
    let res = await fetchLatLong(value);
    console.log(res);
    onSelect && onSelect(res?.response?.view?.[0]?.result?.[0] || null);
    setAddressData(res?.response?.view?.[0]?.result?.[0] || null);
  };

  const searchService = async (value) => {
    setAddressData(null);
    let res = await fetchSuggestions(value);
    console.log(res);
    setSuggestionsList(res?.suggestions || []);
    setOpen(true);
  };

  // const getLocationId = (value) => {
  //   if (value !== "" || value !== null) {
  //     setvalue(value);
  //     const suggestion = suggestionsList.filter((item) => item?.label === value);
  //     console.log(suggestion);
  //     getLatLn(suggestion[0]?.locationId);
  //     setSuggestionsList([]);
  //   }
  // };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setOpen(false);
      setActiveSuggestionIndex(0);
      console.log("tab label", suggestionsList?.[activeSuggestionIndex]?.label);
      getLatLn(suggestionsList?.[activeSuggestionIndex]?.locationId);
      setFieldValue(name, suggestionsList?.[activeSuggestionIndex]?.label);
    } else if (e.keyCode === 38) {
      if (activeSuggestionIndex === 0) {
        return;
      }
      setActiveSuggestionIndex(activeSuggestionIndex - 1);
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestionIndex - 1 === suggestionsList.length) {
        return;
      }
      setActiveSuggestionIndex(activeSuggestionIndex + 1);
    }
  };

  const renderSuggestions = () => {
    if (suggestionsList?.length > 0) {
    }
    return (
      suggestionsList?.length > 0 && (
        <ul className="suggestions" ref={ref} tabIndex={activeSuggestionIndex}>
          {suggestionsList?.map((suggestion, index) => {
            let className;
            // Flag the active suggestion with a class
            if (index === activeSuggestionIndex) {
              className = "suggestion-active";
            }
            return (
              <li
                className={className}
                key={suggestion?.locationId}
                onKeyDown={onKeyDown}
                onClick={(e: any) => {
                  getLatLn(suggestion);
                  setOpen(false);
                  setFieldValue(name, e?.target?.innerHTML || "");
                }} // getLocationId(e?.target?.innerHTML)
                tabIndex={activeSuggestionIndex}
              >
                {suggestion?.label}
              </li>
            );
          })}
        </ul>
      )
    );
  };

  return (
    <div style={{ position: "relative" }}>
      <Input
        onChange={onChange}
        id={id}
        name={name}
        label={label}
        initValue={initValue}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onBlur={handleBlur}
        error={error}
        validate
        required={true}
      />
      {open && renderSuggestions()}
    </div>
  );
};
export default AutoComplete;
