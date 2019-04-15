import React, { Component } from "react";
import './style.css';
import './style.css';
import axios from "axios";
import CuriosityContent from "../CuriosityContent";
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
          let dateValue ="";

          // check for photos
          if (!!res.data.photos[0]) {
            photoValue = res.data.photos[0].img_src;
            dateValue = res.data.photos[0].earth_date;
          } else {
            photoValue = null;
          }

          // regardless of if photos come back:
          this.setState({
            firstPhoto: photoValue,
            date: dateValue,
          });
        }
      });

  }

  render() {
    return (
      <div className="curiosityWrapper">
        <CuriosityContent
          urlCuriosity={this.state.firstPhoto}
          dateTaken={this.state.date}
        />
      </div>
    );

  }
}

export default CuriosityWrapper;