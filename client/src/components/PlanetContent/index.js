import React, { Component } from "react";
import './style.css';
import solarsystem from '../img/solarsystem.jpg';

import planets from '../../planets.json';
import Modal from 'react-modal';

// import {  } from '../img';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};


class PlanetContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false,
            planet: planets[0]
        };

        this.openModal = this.openModal.bind(this)
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
      }

    openModal () {
        
        this.setState({ modalIsOpen: true });

    }

    modalClick=event=>{
        event.preventDefault()
        const id = event.target.getAttribute("data-id")
        console.log(id)
        this.setState({ planet: planets[id] });
        this.openModal()
    }

    render() {
        return (
            <div className="PlanetContent">
                <div className="row">
                    <div className="col s12">
                        <div className="card-panel">
                            <div className="row">
                                <div className="col s4 m2">
                                    <img src={solarsystem} alt="planets" className="planetPic" useMap="#Map" />
                                    <map name="Map" id="Map">
                                        <area id="sun" data-id="9" alt="sun" onClick={this.modalClick} title="sun" href="#" shape="poly" coords="10,3,72,39,112,110,160,167,186,236,206,298,200,355,192,395,179,436,161,480,155,500,155,504,8,500" className='' />
                                        
                                        <area id="Mercury" data-id="0" alt="Mercury" onClick={this.modalClick} title="Mercury" href="#" shape="poly" coords="211,430,227,453,249,462,271,453,273,432,271,407,273,387,265,371,245,361,224,347,209,354" className='' />
                                        <area id="Venus" data-id="1" alt="Venus" onClick={this.modalClick} title="Venus" href="#" shape="poly" coords="264,331,278,364,288,389,302,417,325,433,364,439,394,421,405,400,405,376,385,351,362,331,332,308,304,305,284,305" className='' />
                                        <area id="Earth" data-id="2" alt="Earth" onClick={this.modalClick} title="Earth" href="#" shape="poly" coords="374,297,382,321,393,344,413,360,429,366,454,360,473,353,491,332,484,310,474,293,462,280,446,271" className='' />
                                        <area id="Mars" data-id="3" alt="Mars" onClick={this.modalClick} title="" href="#" shape="poly" coords="441,212,445,233,456,249,474,273,492,299,510,300,527,290,538,283,551,267,551,252,548,235,548,210,542,200,515,180,487,182,463,187" className='' />
                                        <area id="Jupiter" data-id="4" alt="Jupiter" onClick={this.modalClick} title="" href="#" shape="poly" coords="563,194,567,247,581,288,603,322,633,358,668,378,701,383,738,368,771,344,766,317,757,270,731,225,694,181,660,155,606,135,572,143" className='' />
                                        <area id="Saturn" data-id="5" alt="Saturn" onClick={this.modalClick} title="" href="#" shape="poly" coords="880,62,890,98,909,136,928,165,950,178,978,189,1027,194,1040,174,1053,152,1047,124,1021,97,993,59,982,19,952,16,906,17" className='' />
                                        <area id="Uranus" data-id="6" alt="Uranus" onClick={this.modalClick} title="" href="#" shape="poly" coords="957,56,946,77,931,82,924,93,921,111,919,129,927,147,937,155,937,164,939,176,956,181,967,174,984,162,999,134,1006,122,1010,103,997,82,990,60,979,49" className='' />
                                        <area id="Neptune" data-id="7" alt="Neptune" onClick={this.modalClick} title="" href="#" shape="poly" coords="1110,29,1125,60,1129,87,1126,103,1118,117,1103,121,1085,121,1065,120,1040,105,1027,92,1007,57,998,27,997,5,1020,3,1082,3,1101,5" className='' />
                                        <area id="Pluto" data-id="8" alt="Pluto" onClick={this.modalClick} title="" href="#" shape="poly" coords="1110,6,1111,28,1135,42,1148,42,1164,42,1175,41,1175,21,1175,4" className='' />
                                        <area id="Moon" data-id="10" alt="Moon" onClick={this.modalClick} title="" href="#" shape="poly" coords="380,249,383,266,389,276,400,277,418,275,433,274,442,270,450,266,452,258,452,244,448,229,436,219,423,213,402,219,386,227408,256,410,274,422,273,427,272,435,270,434,257" className='' />

                                    </map>





                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Details Modal"
                >

                    <h2 ref={subtitle => this.subtitle = subtitle}>{this.state.planet.name}</h2>
                    <div><img src={this.state.planet.image} alt=""></img></div>
                    <div>Moons: {this.state.planet.moons}</div>
                     <div>Revolution: {this.state.planet.revolution}</div>
                    <div>Rotation: {this.state.planet.rotation}</div>
                    <div>Diameter: {this.state.planet.diameter}</div>
                    <div>Average temperature: {this.state.planet.average_temperature}</div>
                    <div>Cool Facts: {this.state.planet.cool_facts}</div>
                    <br/>
                    <br/>
                    <button onClick={this.closeModal}>close</button>
                    
                    <div></div>
                </Modal>
               

            </div>
        );

    }
}







export default PlanetContent;