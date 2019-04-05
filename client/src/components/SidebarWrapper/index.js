import React, { Component } from "react";
import './style.css';
import NEO from '../NEO';
import Daily from '../Daily';
import './style.css';
import API from "../../utils/API";
require("dotenv").config();

class SidebarWrapper extends Component {

  state = {
    result: {}
  };

    componentDidMount() {
        this.dailyPull();
        document.addEventListener('DOMContentLoaded', function() {
          var elems = document.querySelectorAll('.collapsible');
          var instances = M.Collapsible.init(elems, options);
        });
      }

    dailyPull () {
        API.grab()
          .then(res => this.setState({ result: res.data }))
          .catch(err => console.log(err));
      };    

  render(){
  return (
      <div className="sidebar">
        <NEO></NEO>
        <Daily 
        title={this.state.result.title}
        url={this.state.result.url}
        explanation={this.state.result.explanation}
        />
            </div>
            );

  }
}

export default SidebarWrapper;