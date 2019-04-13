import React from 'react';
import './style.css';

function OpportunityContent(props) {
    return (
        <div className="opportunityContent">
            <div className="row">
                <div className="col s12">
                    <div className="card-panel">
                        <div className="row">
                            <div className="col s4 m2">
                            <h5 className="center-align">Opportunity Rover</h5>
                            <h6 className="center-align">Date Taken: {props.dateTaken}</h6>
                            <img src={props.urlOpportunity} alt="opportunityPic" className="responsive-img" id="opportunityPic"/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default OpportunityContent;