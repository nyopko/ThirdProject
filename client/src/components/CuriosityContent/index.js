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
                            <p>Curiosity Pic</p>
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