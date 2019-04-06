import axios from "axios";
import moment from "moment";
require('dotenv').config();

/// Image of the day
const APIKEY = process.env.REACT_APP_API_KEY;
const apodURL = "https://api.nasa.gov/planetary/apod?api_key=" + APIKEY;


/// Asteroids / NEO
let dateFormatted = moment();
dateFormatted = moment(dateFormatted).format("YYYY-MM-DD");

const neoURL = "https://api.nasa.gov/neo/rest/v1/feed?start_date=" + dateFormatted + "&end_date="+ dateFormatted + "&api_key=" + APIKEY;


export default {
  grabAPOD: function() {
    console.log(neoURL);
    axios.get(neoURL);
      return neoURL;
    // console.log(neoURL);
    // console.log(APIKEY);
    // console.log(apodURL);
    // return axios.get(apodURL);
  },

  grabAsteroids: function(){
    // console.log(neoURL);
    // axios.get(neoURL).then(data => {
    //   let newObj = neoURL.keys(dateFormatted);
    //   console.log(newObj);
    // })
  }
};