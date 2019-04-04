import axios from "axios";
const apodURL = "https://api.nasa.gov/planetary/apod?api_key=";
const APIKEY = process.env.APIKEY;
require("dotenv").config();

export default {
  grab: function() {
    return axios.get(apodURL + APIKEY);
  }
};