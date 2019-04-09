import axios from "axios";
require('dotenv').config();

/// APOD 
const APIKEY = process.env.REACT_APP_API_KEY;
const apodURL = "https://api.nasa.gov/planetary/apod?api_key=" + APIKEY;


export default {
  grab: function() {
    console.log(APIKEY);
    console.log(apodURL);
   return axios.get(apodURL)
  }
};