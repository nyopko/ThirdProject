import React from 'react';
import './style.css';

function RoverContent(props) {
    return (
        <div className="roverContent">
            <div className="row">
                <div className="col s12">
                    <div className="card-panel">
                        <div className="row">
                            <div className="col s4 m2">
                            <img src={props.url} alt="rover1" className="responsive-img" id="roverPic"/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default RoverContent;