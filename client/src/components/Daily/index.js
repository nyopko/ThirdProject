import React, { Component } from "react";
import './style.css';
import API from "../utils/API";
require("dotenv").config();

class Daily extends Component {

    componentDidMount() {
        this.dailyPull();
      }

    dailyPull () {
        API.grab()
          .then(res => this.setState({ result: res.data }))
          .catch(err => console.log(err));
      };    

  render(){  
  return (
    <div className="row">
    <div className="col">
        <div className="card-panel">
            <div className="row">
                <div className="col">
                    <img src="./NEO-image.jpg" alt="neo" className="responsive-img"/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h5 className="center-align">Daily Image</h5>
                </div>
            </div>
        </div>
    </div>
</div>
    );
}
}
export default Daily;