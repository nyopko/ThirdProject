import React, { Component } from "react";
import './style.css';
import MediaContent from '../MediaContent';
import API from "../../utils/API";

class MediaWrapper extends Component {

    state = {
      results: []
    };
  
      componentDidMount() {
          this.imgPull();
        //   document.addEventListener('DOMContentLoaded', function() {
        //     var elems = document.querySelectorAll('.collapsible');
        //     var options = {}
        //     var instances = M.Collapsible.init(elems, options);
        //   });
        }
  
      imgPull () {
        console.log(API);
          API.imgGet()
            .then(res => {
              console.log(res.data.collection.href)
             this.setState({ results: res.data.collection.items.slice(0,25) })})
            .catch(err => console.log(err));           
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