/* eslint-disable no-debugger */
import { useState, useEffect } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import { Input } from "app/components/Input";
import {
  fetchSuggestions,
  fetchLatLong,
} from "../../../../../services/HereMapsService";
import { Suggestions } from "./styles";

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
  // const didMountRef = useRef(false);
  const [delayDebounceFn, setDelayDebounceFn] = useState<any>(null);

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

  // useEffect(() => {
  //   if (didMountRef.current) {
  //     // onSelect && onSelect(null);
  //     const delayDebounceFn = setTimeout(() => {
  //       if (value && value !== addressData?.location?.address?.label) {
  //         searchService(value);
  //       }
  //     }, 500);
  //     return () => clearTimeout(delayDebounceFn);
  //   } else {
  //     didMountRef.current = true;
  //   }
  // }, [value]);

  const getLatLn = async (value) => {
    let res = await fetchLatLong(value);
    onSelect && onSelect(res?.response?.view?.[0]?.result?.[0] || null);
    setAddressData(res?.response?.view?.[0]?.result?.[0] || null);
  };

  const searchService = async (value) => {
    setAddressData(null);
    let res = await fetchSuggestions(value);
    setSuggestionsList(res?.suggestions || []);
    setOpen(true);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setOpen(false);
      setActiveSuggestionIndex(0);
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

  const handleChange = (e) => {
    onChange(e);
    delayDebounceFn && clearTimeout(delayDebounceFn);
    setDelayDebounceFn(() =>
      setTimeout(() => {
        if (
          e.target.value &&
          e.target.value !== addressData?.location?.address?.label
        ) {
          searchService(e.target.value);
        }
      }, 500)
    );
  };

  const renderSuggestions = () => {
    return (
      suggestionsList?.length > 0 && (
        <Suggestions ref={ref} tabIndex={activeSuggestionIndex}>
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
        </Suggestions>
      )
    );
  };

  return (
    <div style={{ position: "relative" }}>
      <Input
        onChange={handleChange}
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
