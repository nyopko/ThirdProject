import axios from "axios";
require('dotenv').config();

/// APOD 
const apodURL = "https://api.nasa.gov/planetary/apod?api_key=";
const APIKEY = process.env.REACT_APP_API_KEY;

/// MARS
let randomValue = Math.floor(Math.random() * 2000)
const marsURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=" + randomValue + "&page=1&api_key=" + APIKEY


export default {
  grab: function() {
    console.log(marsURL);
    console.log(APIKEY);
    console.log(apodURL);
   return axios.get(marsURL)
  //  .then(data => {
  //    console.log(data.data.photos[0].img_src)
  //   })
  }
};