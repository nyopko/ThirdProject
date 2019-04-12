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
                                        <area id="sun" data-id="9" alt="sun" onClick={this.modalClick} title="sun" href="#" shape="poly" coords="2,0,32,16,56,41,78,70,94,99,106,124,118,157,124,185,129,235,120,290,108,323,96,340,1,340" className='' />
                                        {/* <div className="modal" id="Mercury"> 
   <h2>Planet Mercury</h2>
   </div> */}
                                        <area id="Mercury" data-id="0" alt="Mercury" onClick={this.modalClick} title="Mercury" href="#" shape="poly" coords="148,254,161,262,162,272,156,281,145,282,137,279,137,262" className='' />
                                        <area id="Venus" data-id="1" alt="Venus" onClick={this.modalClick} title="Venus" href="#" shape="poly" coords="209,221,226,226,228,236,226,257,210,263,196,257,187,245,192,229" className='' />
                                        <area id="Earth" data-id="2" alt="Earth" onClick={this.modalClick} title="Earth" href="#" shape="poly" coords="268,172,274,179,268,186,261,179" className='' />
                                        <area id="Mars" data-id="3" alt="Mars" onClick={this.modalClick} title="" href="#" shape="poly" coords="271,226,290,219,292,207,291,196,281,189,266,190,255,194,252,207,255,220" className='' />
                                        <area id="Jupiter" data-id="4" alt="Jupiter" onClick={this.modalClick} title="" href="#" shape="poly" coords="312,148,321,153,330,165,329,175,321,180,310,182,301,179,297,169,297,155" className='' />
                                        <area id="Saturn" data-id="5" alt="Saturn" onClick={this.modalClick} title="" href="#" shape="poly" coords="422,134,443,138,457,145,467,156,474,181,470,196,455,222,441,225,425,230,406,224,389,212,380,197,379,179,379,154,399,135" className='' />
                                        <area id="Uranus" data-id="6" alt="Uranus" onClick={this.modalClick} title="" href="#" shape="poly" coords="448,95,471,90,499,90,524,87,545,88,561,104,579,117,598,131,611,151,612,165,591,168,564,168,540,169,520,167,498,152" className='' />
                                        <area id="Neptune" data-id="7" alt="Neptune" onClick={this.modalClick} title="" href="#" shape="poly" coords="599,45,621,50,635,60,640,77,639,101,617,108,600,108,590,96,587,75,587,58" className='' />
                                        <area id="Pluto" data-id="8" alt="Pluto" onClick={this.modalClick} title="" href="#" shape="poly" coords="676,13,696,13,702,23,708,48,701,60,679,65,664,56,656,39,661,21" className='' />
                                      




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




// import PlanetContent from '..PlanetContent';

// function PlanetContent() {
//     return (
//         <div className="PlanetContent">
//             <div className="row">
//                 <div className="col s12">
//                     <div className="card-panel">
//                         <div className="row">
//                             <div className="col s4 m2">
//                                 <img src={solarsystem} alt="planets" className="planetPic" usemap="Map"/>
// <map name="Map" id="Map">
//    <area id="sun" onClick="myFunction(this.id)" alt="sun" title="sun"  href="https://www.google.com" shape="poly" coords="2,0,32,16,56,41,78,70,94,99,106,124,118,157,124,185,129,235,120,290,108,323,96,340,1,340" class= 'modal-trigger'/>
//    <div className="modal" id="Mercury"> 
//    <h2>Planet Mercury</h2>
//    </div>
//     <area alt="" title="" href="#" shape="poly" coords="148,254,161,262,162,272,156,281,145,282,137,279,137,262" />
//     <area alt="" title="" href="#" shape="poly" coords="209,221,226,226,228,236,226,257,210,263,196,257,187,245,192,229" />
//     <area alt="" title="" href="#" shape="poly" coords="268,172,274,179,268,186,261,179" />
//     <area alt="" title="" href="#" shape="poly" coords="271,226,290,219,292,207,291,196,281,189,266,190,255,194,252,207,255,220" />
//     <area alt="" title="" href="#" shape="poly" coords="312,148,321,153,330,165,329,175,321,180,310,182,301,179,297,169,297,155" />
//     <area alt="" title="" href="#" shape="poly" coords="422,134,443,138,457,145,467,156,474,181,470,196,455,222,441,225,425,230,406,224,389,212,380,197,379,179,379,154,399,135" />
//     <area alt="" title="" href="#" shape="poly" coords="448,95,471,90,499,90,524,87,545,88,561,104,579,117,598,131,611,151,612,165,591,168,564,168,540,169,520,167,498,152" />
//     <area alt="" title="" href="#" shape="poly" coords="599,45,621,50,635,60,640,77,639,101,617,108,600,108,590,96,587,75,587,58" />
//     <area alt="" title="" href="#" shape="poly" coords="676,13,696,13,702,23,708,48,701,60,679,65,664,56,656,39,661,21" />
//     <area alt="" title="" href="#" shape="poly" coords="721,1,726,12,740,18,744,5,741,1" /> 





// </map>





//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


export default PlanetContent;