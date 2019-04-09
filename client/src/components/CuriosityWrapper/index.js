import React, { Component } from "react";
import './style.css';
import NEO from '../NEO';
import Daily from '../Daily';
import './style.css';
import API from "../../utils/API";
import M from 'materialize-css';
import axios from "axios"
import RoverContent from "../CuriosityContent";
import CuriosityContent from "../CuriosityContent"
require("dotenv").config();

class CuriosityWrapper extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstPhoto: null,
    };
  }



  componentDidMount() {

    /// Curiosity API Call 

    const APIKEY = process.env.REACT_APP_API_KEY;
    let randomValue = Math.floor(Math.random() * 1000)
    const marsURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=" + randomValue + "&page=1&api_key=" + APIKEY

    axios.get(marsURL)
      .then((res) => {
        console.log(marsURL);
        if (res.data.Error) { // error message
          this.setState({
            error: res.errors
          });
        } else { // success
          let photoValue = "";

          // check for photos
          if (!!res.data.photos[0]) {
            photoValue = res.data.photos[0].img_src;
          } else {
            photoValue = null;
          }

          // regardless of if photos come back:
          this.setState({
            firstPhoto: photoValue
          });
        }
      });

  }

  render() {
    return (
      <div className="class">
        <CuriosityContent
          // title={this.state.result.title}
          urlCuriosity={this.state.firstPhoto}
        // explanation={this.state.result.explanation}
        />
      </div>
    );

  }
}

export default CuriosityWrapper;