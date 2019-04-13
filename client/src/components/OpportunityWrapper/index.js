import React, { Component } from "react";
import './style.css';
import axios from "axios"
import OpportunityContent from "../OpportunityContent"
require("dotenv").config();

class OpportunityWrapper extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstPhoto: null
    };
  }



  componentDidMount() {

    /// Opportunity API Call 

    const APIKEY = process.env.REACT_APP_API_KEY;
    let randomValue = Math.floor(Math.random() * 1000)
    const marsURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=" + randomValue + "&page=1&api_key=" + APIKEY

    axios.get(marsURL)
      .then((res) => {
        if (res.data.Error) { // error message
          this.setState({
            error: res.errors
          });
        } else { // success
          let photoValue = "";
          let dateValue ="";

          // look for photos
          if (!!res.data.photos[0]) {
            photoValue = res.data.photos[0].img_src;
            dateValue = res.data.photos[0].earth_date;
          } else {
            photoValue = null;
          }

          this.setState({
            firstPhoto: photoValue,
            date: dateValue,
          });
        }
      });

  }

  render() {
    return (
      <div className="class">
        <OpportunityContent
          urlOpportunity={this.state.firstPhoto}
          dateTaken={this.state.date}
        />
      </div>
    );

  }
}

export default OpportunityWrapper;