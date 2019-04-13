import React from 'react';
import './style.css';

function SpiritContent(props) {
    return (
        <div className="spiritContent">
            <div className="row">
                <div className="col s12">
                    <div className="card-panel">
                        <div className="row">
                            <div className="col s4 m2">
                            <h5 className="center-align">Spirit Rover</h5>
                            <h6 className="center-align">Date Taken: {props.dateTaken}</h6>
                            <img src={props.urlSpirit} alt="spiritPic" className="responsive-img" id="spiritPic"/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default SpiritContent;