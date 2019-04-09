import React, { Component } from "react";
import './style.css';
import './style.css';
import axios from "axios"
import SpiritContent from "../SpiritContent"
require("dotenv").config();

class SpiritWrapper extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstPhoto: null,
    };
  }



  componentDidMount() {

    /// Spirit API Call 

    const APIKEY = process.env.REACT_APP_API_KEY;
    let randomValue = Math.floor(Math.random() * 1000)
    const marsURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=" + randomValue + "&page=1&api_key=" + APIKEY

    axios.get(marsURL)
      .then((res) => {
        if (res.data.Error) { // error message
          this.setState({
            error: res.errors
          });
        } else { 
          let photoValue = "";

          // look for photos
          if (!!res.data.photos[0]) {
            photoValue = res.data.photos[0].img_src;
          } else {
            photoValue = null;
          }

          this.setState({
            firstPhoto: photoValue
          });
        }
      });

  }

  render() {
    return (
      <div className="class">
        <SpiritContent
          urlSpirit={this.state.firstPhoto}
        />
      </div>
    );

  }
}

export default SpiritWrapper;