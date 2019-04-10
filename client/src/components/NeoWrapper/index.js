import React, { Component } from "react";
import './style.css';
import NEO from '../NEO';
import './style.css';
import API from "../../utils/API";
import M from 'materialize-css';
import moment from "moment"
require("dotenv").config();


var dateFormatted = moment();
dateFormatted = moment(dateFormatted).format("YYYY-MM-DD");

class NEOWrapper extends Component {

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
      console.log(API);
        API.grabAPOD()
          .then(res => {
          console.log(dateFormatted);
          return (this.setState({ result: res.data.near_earth_objects[dateFormatted][0] }))})
          .catch(err => console.log(err));
      };    

  render(){
  return (
      <div className="neoWrapper">
        <NEO
        // title={this.state.result.title}
        name={this.state.result.name}
        // explanation={this.state.result.explanation}
        />
            </div>
            );

  }
}

export default NEOWrapper;