import React from 'react';
import './style.css';

function NEO(props) {
  return (
    <div className="row">
    <div className="col">
        <div className="card-panel">
            <div className="row">
            </div>
            <div className="row">
                <div className="col">
                    <h5>Here's what's passing by Earth today!</h5>
                    <p className="center-align">Name of Object: <b>{props.name}</b></p>
                    <p className="center-align">Magnitude: <b>{props.size} h</b></p>
                    <p className="center-align"><a href={props.info}>More Info</a></p>
                </div>
            </div>
        </div>
    </div>
</div>
    );
}

export default NEO;