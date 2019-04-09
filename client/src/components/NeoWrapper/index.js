import React, { Component } from "react";
import './style.css';
import NEO from '../NEO';
import './style.css';
import API from "../../utils/API";
import M from 'materialize-css';
import moment from "moment";
require("dotenv").config();

let dateFormatted = moment();
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
        API.grabAsteroids()
          .then(res => this.setState({ result: res.data }))
          .catch(err => console.log(err));
      };    

  render(){
  return (
      <div className="dailyWrapper">
        <NEO 
        name={this.state.result.near_earth_objects}
        
        />
            </div>
            );

  }
}

export default NEOWrapper;