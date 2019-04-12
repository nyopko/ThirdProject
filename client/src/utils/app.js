import API from "./API";
import React, { Component } from "react";

class SpaceApp extends Component {
    state = {}

    newUser = (userInfo) => {
        API.newUser(userInfo).then(res => {
            this.setState({userName: res.data.name, userEmail: res.data.email, loggedIn: true})
        })
    }
}

export default SpaceApp;