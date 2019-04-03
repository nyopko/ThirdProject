import React from 'react';
import './style.css';
import solarsystem from '../img/solarsystem.jpg';

function PlanetContent() {
    return (
        <div className="PlanetContent">
            <div className="row">
                <div className="col s12">
                    <div className="card-panel">
                        <div className="row">
                            <div className="col s4 m2">
                                <img src={solarsystem} alt="planets" className="planetPic" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlanetContent;