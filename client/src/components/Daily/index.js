import React from 'react';
import './style.css';

function Daily(props) {
  return (
    <div className="row">
    <div className="col">
        <div className="card-panel">
            <div className="row">
                <div className="col">
                    <img src="./NEO-image.jpg" alt="neo" className="responsive-img"/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h5 className="center-align">{props.title}</h5>
                </div>
            </div>
        </div>
    </div>
</div>
    );
}

export default Daily;