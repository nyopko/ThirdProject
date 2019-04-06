import axios from "axios";
import moment from "moment";
require('dotenv').config();

/// Image of the day
const apodURL = "https://api.nasa.gov/planetary/apod?api_key=";
const APIKEY = process.env.REACT_APP_API_KEY;

/// Asteroids / NEO
let date = moment("1995-09-13", "YYYY-MM-DD");
let dateFormatted = date._i
const neoURL = "https://api.nasa.gov/neo/rest/v1/feed?start_date=" + dateFormatted + "&end_date="+ dateFormatted + "&api_key=" + APIKEY;


export default {
  grab: function() {
    console.log(neoURL);
    console.log(APIKEY);
    console.log(apodURL);
    return axios.get(apodURL + APIKEY);
  }
};