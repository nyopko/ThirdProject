import axios from "axios";
require('dotenv').config();

/// APOD 
const APIKEY = process.env.REACT_APP_API_KEY;
const apodURL = "https://api.nasa.gov/planetary/apod?api_key=" + APIKEY;

/// Image search API 
const imgURL = "https://images-api.nasa.gov/search?q=moon"


export default {
  grab: function() {
    console.log(APIKEY);
    console.log(apodURL);
   return axios.get(apodURL)
  },

  imgGet: function() {
    console.log(imgURL);
    return axios.get(imgURL);
  }


};