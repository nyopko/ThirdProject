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
                            <h5>{props.title}</h5>
                            <p>{props.info}</p>
                            <a href={props.link}>Download Pictures/Videos</a>
                            <br />
                            {/* <button id="favButton">Test button here.</button> */}
                            <br />
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