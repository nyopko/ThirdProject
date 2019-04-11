import React from 'react';
import './style.css';

function MediaContent(props) {
    return (
        <div className="mediaContent">
            <div className="row">
                <div className="col s12">
                    <div className="card-panel">
                        <div className="row">
                            <div className="col s4 m2">
                            <p>{props.title}</p>
                            <p> {props.imgURL}</p>
                    
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default MediaContent;