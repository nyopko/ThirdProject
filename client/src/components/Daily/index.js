import React, { Component } from "react";
import Modal from 'react-modal';
import './style.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '700px',
        height: '550px'
    }
  };

class Daily extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false,
            // planet: 
        };

        this.openModal = this.openModal.bind(this)
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }
    
    afterOpenModal() {
      }
    
    openModal () {
        
        this.setState({ modalIsOpen: true });
    
    }
    
    modalClick=event=>{
        event.preventDefault()
        this.openModal()
    }
    
    
    render(){    
  return (
      <div className="daily">
      <div id="modal">
       <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Login Modal"
        >
        <div className="apodModalContent">
            <div className="row">
                <div className="col s12">
                <h5 className="center-align">{this.props.title}</h5>
                <p className="center-align"><span>{this.props.explanation}</span></p>
                            <img src={this.props.url} alt="apodPic" className="apodModalPic" id="apodModalPic"/>
                            <br />
                            <button onClick={this.closeModal}>close</button>
                        </div>
                    </div>
                </div>
        </Modal>
        </div>

    <div id="dailyCard" className="row">
    <div className="col">
        <div className="card-panel">
            <div className="row">
                <div className="col">
                    <img src={this.props.url} alt="APOD" className="responsive-img" id="dailyPic"/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <h5 className="center-align">{this.props.title}</h5>
                <ul className="collapsible">
                    <li>
                        <div onClick={this.modalClick} className="collapsible-header">Click here to learn more!</div>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    );
}
}

export default Daily;