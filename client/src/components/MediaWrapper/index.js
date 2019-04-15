import React, { Component } from "react";
import './style.css';
import MediaContent from '../MediaContent';
import SearchForm from '../SearchForm';
import API from "../../utils/API";
import app from "../../utils/app";

class MediaWrapper extends Component {

  state = {
    results: [],
    search: ""
  };

  componentDidMount() {
    // this.imgPull(this.state.search);
  }

  imgPull = query => {
    console.log(query);
    API.imgGet(query)
      .then(res => {
        console.log(res.data.collection.href)
        this.setState({ results: res.data.collection.items.slice(0, 25) })
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    console.log(name);
    console.log(value);
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.imgPull(this.state.search);

  };

  render() {
    return (
      <div className="mediaWrapper">
        <SearchForm
          // value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        {
          this.state.results.map(result => {
            return <MediaContent
              title={result.data[0].title}
              imgURL={result.links[0].href}
              info={result.data[0].description}
              link={result.href}
            />

          })
        }
      </div>
    );
  }
}


export default MediaWrapper;