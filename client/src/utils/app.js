import API from "./API";

let spaceApp = {
    newUser: userInfo => {
        API.newUser(userInfo).then(res => {
            console.log(res);
            return res
        });
        },
    

    newUrl: urlInfo => {
        API.addFavorite(urlInfo).then(res => {
            console.log(res);
            return res
        });
        },
    
    
    getUserFavorites: user => {
        API.getUserFavorites(user).then(res => {
            console.log(res);
            return res
        });
        },
    

    getUser: login => {
        API.getUserInfo(login).then(res => {
            console.log(res);
        return res
         })
    }

}
export default spaceApp;