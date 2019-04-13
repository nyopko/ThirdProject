import React, { Component } from "react";
import './style.css';

class Daily extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false,
            // planet: 
        };

    //     this.openModal = this.openModal.bind(this)
    //     this.afterOpenModal = this.afterOpenModal.bind(this);
    //     this.closeModal = this.closeModal.bind(this);
    }
    
    
    render(){    
  return (
    <div className="row">
    <div className="col">
        <div className="card-panel">
            <div className="row">
                <div className="col">
                    <img src={this.props.url} alt="APOD" className="responsive-img" id="dailyPic"/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <h5 className="center-align">{this.props.title}</h5>
                <ul className="collapsible">
                    <li>
                        <div className="collapsible-header">Click to learn more!</div>
                            <div className="collapsible-body"><span>{this.props.explanation}</span></div>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </div>
</div>
    );
}
}

export default Daily;