/* eslint-disable no-debugger */
import { useState, useEffect, Fragment } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import useOnclickOutside from "react-cool-onclickoutside";
import { HERE_MAPS_AKI_KEY } from "../../../../../constants";
import { Input } from "app/components/Input";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

interface Suggestion {
  address: string;
  countryCode: string;
  label: string;
  language: string;
  locationId: string;
  matchLevel: string;
}

const AutoComplete = ({
  onSelect,
  setFieldValue,
  formFieldName,
  title,
  singleFormValues,
  handleBlur,
  singleFormTouched,
  singleFormErrors,
  disabled,
  handleChange,
}) => {
  const [suggestionsList, setSuggestionsList] = useState<any>([]);
  const [addressData, setAddressData] = useState<any>(null);
  // console.log(addressData);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");

  const [open, setOpen] = useState<boolean>(false);
  const loading = open && suggestionsList?.length === 0;

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
      if (
        singleFormValues[`${title}AddressLine1`] &&
        singleFormValues[`${title}AddressLine1`] !==
          addressData?.location?.address?.label
      ) {
        console.log(singleFormValues[`${title}AddressLine1`]);
        // write your logic here
        searchService(singleFormValues[`${title}AddressLine1`]);
      }
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [singleFormValues[`${title}AddressLine1`]]);

  const getLatLn = async (value) => {
    console.log(value)
    // setSuggestionsList([]);
    //   if (value?.label !== "" || value?.label !== null) {
    //       console.log(value?.label)
    //       setsingleFormValues[`${title}AddressLine1`](value?.label);
    // }
    try {
      await fetch(
        `https://geocoder.ls.hereapi.com/6.2/geocode.json?locationid=${value?.locationId}&jsonattributes=1&apiKey=${HERE_MAPS_AKI_KEY}`,
        {
          method: "get",
        }
      )
        .then((res) => res.json())
        // .then((res) => console.log(res?.suggestions))
        //@ts-ignore
        .then((res) => {
          // setSuggestionsList(res?.suggestions);
          console.log(res);
          onSelect && onSelect(res?.response?.view?.[0]?.result?.[0] || null);
          // setsingleFormValues[`${title}AddressLine1`](value?.label);
          setAddressData(res?.response?.view?.[0]?.result?.[0] || null);
          // onSelect && onSelect(addressData);
          // console.log(onSelect(addressData))
        });
      // .then(() => console.log(suggestionsList));
    } catch (err) {
      console.log(err);
    }
  };

  const searchService = async (value) => {
    setAddressData(null);
    // onSelect && onSelect(null)
    try {
      await fetch(
        `https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?apiKey=${HERE_MAPS_AKI_KEY}&query=${value}`,
        {
          method: "get",
        }
      )
        .then((res) => res.json())
        // .then((res) => console.log(res?.suggestions))
        //@ts-ignore
        .then((res) => {
          setSuggestionsList(res?.suggestions || []);
          setOpen(true);
          console.log(res);
        });
    } catch (err) {
      console.log(err);
    }
  };

  // const getLocationId = (value) => {
  //   if (value !== "" || value !== null) {
  //     setsingleFormValues[`${title}AddressLine1`](value);
  //     const suggestion = suggestionsList.filter((item) => item?.label === value);
  //     console.log(suggestion);
  //     getLatLn(suggestion[0]?.locationId);
  //     setSuggestionsList([]);
  //   }

  // };

  const onKeyDown = e => {
    // const { activeSuggestion, filteredSuggestions } = this.state;
  
    if (e.keyCode === 13) {
      setOpen(false);
      setActiveSuggestionIndex(0);
      console.log("tab label",suggestionsList?.[activeSuggestionIndex]?.label)
      getLatLn(suggestionsList?.[activeSuggestionIndex]?.locationId);
      setFieldValue(
        `${formFieldName}.${title}AddressLine1`, suggestionsList?.[activeSuggestionIndex]?.label);
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
            console.log(suggestion);
            // Flag the active suggestion with a class
            if (index === activeSuggestionIndex) {
              className = "suggestion-active";
            }
            return (
              <li
                className={className}
                key={suggestion}
                onKeyDown={onKeyDown}
                onClick={(e: any) => {
                  getLatLn(suggestion);
                  setOpen(false);
                  setFieldValue(
                    `${formFieldName}.${title}AddressLine1`,
                    e?.target?.innerHTML || ""
                  );
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
  console.log(singleFormTouched)
  return (
    <div style={{ position: "relative" }}>
      <Input
        onChange={handleChange}
        id={`${formFieldName}.${title}AddressLine1`}
        name={`${formFieldName}.${title}AddressLine1`}
        label={"Address Line 1"}
        initValue={singleFormValues[`${title}AddressLine1`]}
        value={singleFormValues[`${title}AddressLine1`]}
        disabled={disabled}
        placeholder={"Start typing"}
        // onChange={handleChange}
        onBlur={handleBlur}
        error={
          singleFormTouched?.[`${title}Longitude`] &&
          singleFormErrors?.[`${title}Longitude`]
        }
        validate
      />
      {open && renderSuggestions()}
    </div>
  );
};
export default AutoComplete;
