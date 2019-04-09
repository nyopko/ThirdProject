import React, { Component } from "react";
import './style.css';
import NEO from '../NEO';
import Daily from '../Daily';
import './style.css';
import API from "../../utils/API";
import M from 'materialize-css';
import axios from "axios"
import OpportunityContent from "../OpportunityContent"
require("dotenv").config();

class OpportunityWrapper extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstResponsePhoto: null,
      error: "",
      loading: "",
      initialRequestMade: false
    };
  }



  componentDidMount() {

    /// Opportunity API Call 

    const APIKEY = process.env.REACT_APP_API_KEY;
    let randomValue = Math.floor(Math.random() * 1000)
    const marsURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=" + randomValue + "&page=1&api_key=" + APIKEY

    axios.get(marsURL)
      .then((res) => {
        if (res.data.Error) { // if error
          this.setState({
            error: res.errors
          });
        } else { // if success
          let photoVal = "";

          // check if any photos come back
          if (!!res.data.photos[0]) {
            photoVal = res.data.photos[0].img_src;
          } else {
            photoVal = null;
          }

          // regardless of if photos come back:
          this.setState({
            firstResponsePhoto: photoVal,
            loading: "",
            initialRequestMade: true
          });
        }
      });

  }

  render() {
    return (
      <div className="class">
        <OpportunityContent
          // title={this.state.result.title}
          urlOpportunity={this.state.firstResponsePhoto}
        // explanation={this.state.result.explanation}
        />
      </div>
    );

  }
}

export default OpportunityWrapper;