import React from 'react';
import './style.css';
import {Carousel} from 'react-materialize';

function NEO(props) {
  return (
    <div className="row">
    <div className="col">
        <div className="card-panel">
            <div className="row">
            <Carousel className="white-text center" id="carousel">
<div className="red">
<h2>
First Panel
</h2>
<p>
This is your first panel
</p>
</div>
<div className="amber">
<h2>
Second Panel
</h2>
<p>
This is your second panel
</p>
</div>
<div className="green">
<h2>
Third Panel
</h2>
<p>
This is your third panel
</p>
</div>
<div className="blue">
<h2>
Fourth Panel
</h2>
<p>
This is your fourth panel
</p>
</div>
</Carousel>
            </div>
        </div>
    </div>
</div>

    );
}

export default NEO;