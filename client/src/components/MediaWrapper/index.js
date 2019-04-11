import React, { Component } from "react";
import './style.css';
import MediaContent from '../MediaContent';
import API from "../../utils/API";

class MediaWrapper extends Component {

    state = {
      results: [],
      search: "mars"
    };
  
      componentDidMount() {
        this.imgPull(this.state.search);
        }
  
      imgPull = query => {
        console.log(API);
          API.imgGet(query)
            .then(res => {
              console.log(res.data.collection.href)
             this.setState({ results: res.data.collection.items.slice(0,25) })})
            .catch(err => console.log(err));           
        };
        
        handleInputChange = event => {
          const value = event.target.value;
          const name = event.target.name;
          this.setState({
            [name]: value
          });
        };

        handleFormSubmit = event => {
          event.preventDefault();
          this.imgPull(this.state.search);
          
        };
  
    render(){
        return (
            <div className="mediaWrapper">
            {
              this.state.results.map(result => {
                return <MediaContent
                title={result.data[0].title}
                imgURL={result.links[0].href}
                 />
              })
            }
                  </div>
                  );
  
    }
  }


export default MediaWrapper;