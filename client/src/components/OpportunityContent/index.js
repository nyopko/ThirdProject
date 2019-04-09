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
                            <p>Opportunity Pic</p>
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