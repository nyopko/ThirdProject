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
                            <img src={props.imgURL} alt="previewPic" className="previewPic" />
                    
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default MediaContent;