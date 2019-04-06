import React, { Component } from "react";
import './style.css';
import Daily from '../Daily';
import './style.css';
import API from "../../utils/API";
import M from 'materialize-css';
import moment from "moment"
require("dotenv").config();


var dateFormatted = moment();
dateFormatted = moment(dateFormatted).format("YYYY-MM-DD");

class DailyWrapper extends Component {

  state = {
    result: {}
  };

    componentDidMount() {
        this.dailyPull();
        document.addEventListener('DOMContentLoaded', function() {
          var elems = document.querySelectorAll('.collapsible');
          var options = {}
          var instances = M.Collapsible.init(elems, options);
        });
      }

    dailyPull () {
        API.grabAPOD()
          .then(res => this.setState({ result: res.data.data.near_earth_objects[dateFormatted][0] }))
          .catch(err => console.log(err));
      };    

  render(){
  return (
      <div className="dailyWrapper">
        <Daily 
        // title={this.state.result.title}
        // url={this.state.result.url}
        // explanation={this.state.result.explanation}
        />
            </div>
            );

  }
}

export default DailyWrapper;