import React from 'react';
import './style.css';

function CuriosityContent(props) {
    return (
        <div className="curiosityContent">
            <div className="row">
                <div className="col s12">
                    <div className="card-panel">
                        <div className="row">
                            <div className="col s4 m2">
                            <h5 className="center-align">Curiosity Rover</h5>
                            <h6 className="center-align">Date Taken: {props.dateTaken}</h6>
                            <img src={props.urlCuriosity} alt="curiosityPic" className="responsive-img" id="curiosityPic"/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default CuriosityContent;