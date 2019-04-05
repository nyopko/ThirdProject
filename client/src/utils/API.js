import axios from "axios";
require('dotenv').config();
const apodURL = "https://api.nasa.gov/planetary/apod?api_key=";
const APIKEY = process.env.REACT_APP_API_KEY;


export default {
  grab: function() {
    console.log(process.env.REACT_APP_API_KEY);
    console.log(APIKEY);
    console.log(apodURL);
    return axios.get(apodURL + APIKEY);
  }
};