import React, { Component } from "react";
import './style.css';
import MediaContent from '../MediaContent';
import API from "../../utils/API";

class MediaWrapper extends Component {

    state = {
      result: {}
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
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
            
        };    
  
    render(){
        return (
            <div className="mediaWrapper">
                 <MediaContent
                //  title={this.state.result.title}
                 url={this.state.toString()}
                //  explanation={this.state.result.explanation}
                 />
                  </div>
                  );
  
    }
  }


export default MediaWrapper;