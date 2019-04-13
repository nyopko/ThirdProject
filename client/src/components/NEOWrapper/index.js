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
          console.log(res.data.near_earth_objects[dateFormatted][0].close_approach_data[0].relative_velocity);
          return (this.setState({ result: res.data.near_earth_objects[dateFormatted][0]}))})
          .catch(err => console.log(err));
      };    

  render(){
  return (
      <div className="neoWrapper">
        <NEO
        name={this.state.result.name}
        info={this.state.result.nasa_jpl_url}
        size={this.state.result.absolute_magnitude_h}
        danger={this.state.result.is_potentially_hazardous_asteroid}
        feet={this.state.result.estimated_diameter && this.state.result.estimated_diameter.feet && this.state.result.estimated_diameter.feet.estimated_diameter_max.toFixed(2)}
        speed={parseFloat(this.state.result.close_approach_data && this.state.result.close_approach_data[0] && this.state.result.close_approach_data[0].relative_velocity &&  this.state.result.close_approach_data[0].relative_velocity.miles_per_hour).toFixed(2)}
        distance={this.state.result.close_approach_data && this.state.result.close_approach_data[0] && this.state.result.close_approach_data[0].miss_distance && this.state.result.close_approach_data[0].miss_distance.miles}
        />
            </div>
            );

  }
}

export default NEOWrapper;