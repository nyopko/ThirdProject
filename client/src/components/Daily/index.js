import React from 'react';
import './style.css';

function Daily(props) {
  return (
    <div className="row">
    <div className="col">
        <div className="card-panel">
            <div className="row">
                <div className="col">
                    <img src={props.url} alt="APOD" className="responsive-img" id="dailyPic"/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <h5 className="center-align">{props.title}</h5>
                <ul className="collapsible">
                    <li>
                        <div className="collapsible-header">Click to learn more!</div>
                            <div className="collapsible-body"><span>{props.explanation}</span></div>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </div>
</div>
    );
}

export default Daily;