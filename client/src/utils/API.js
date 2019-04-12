import axios from "axios";
import moment from "moment";
require('dotenv').config();

/// APOD 
const APIKEY = process.env.REACT_APP_API_KEY;
const apodURL = "https://api.nasa.gov/planetary/apod?api_key=" + APIKEY;


/// Image search API 
const imgURL = "https://images-api.nasa.gov/search?q="

/// Asteroids / NEO
let dateFormatted = moment();
dateFormatted = moment(dateFormatted).format("YYYY-MM-DD");

const neoURL = "https://api.nasa.gov/neo/rest/v1/feed?start_date=" + dateFormatted + "&end_date="+ dateFormatted + "&api_key=" + APIKEY;



export default {
  grab: function() {
    console.log(APIKEY);
    console.log(apodURL);
   return axios.get(apodURL)
  },

  imgGet: function(query) {
    console.log(imgURL);
    return axios.get(imgURL + query);
  }


  grabAPOD: function() {
    console.log(neoURL);
    return axios.get(neoURL)

}

};