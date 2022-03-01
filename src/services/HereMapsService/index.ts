import axios from "axios";
import { showToast } from "utils";
import { HERE_MAPS_API_KEY } from "../../constants";

export const fetchSuggestions = async (value) => {
  try {
    const res = await axios.get(
      `https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?apiKey=${HERE_MAPS_API_KEY}&query=${value}`)
    return res?.data;
  } catch (err) {
    showToast("Error in fetching suggestions", "error")
  }
};

export const fetchLatLong = async (value) => {
  try {
    const res = await axios.get(
      `https://geocoder.ls.hereapi.com/6.2/geocode.json?locationid=${value?.locationId}&jsonattributes=1&apiKey=${HERE_MAPS_API_KEY}`)
    return res?.data;
  } catch (err) {
    showToast("Error in fetching co-ordinates", "error")
  }
};