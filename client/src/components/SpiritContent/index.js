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
                            <p>Spirit Pic</p>
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