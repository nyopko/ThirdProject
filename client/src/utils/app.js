import API from "./API";

let spaceApp = {
    newUser: userInfo => {
        API.newUser(userInfo).then(res => {

        })
    },

    newUrl: urlInfo => {
        API.addFavorite(urlInfo).then(res => {

        })
    },

    getUserFavorites: user => {
        API.getUserFavorites(user).then(res => {

        })
    },

    getUser: login => {
        API.getUserInfo(login).then(res => {

        })
    }
}

export default spaceApp;