import React, { Component } from 'react';
import "./style.css";
import Modal from 'react-modal';


function Nav() {
    return <div className="nav">
        <nav>
            <div className="nav-wrapper">
                <a href="google.com" className="brand-logo">Space!</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/home">Home</a></li>
        <li><a href="/hubble">Hubble</a></li>
        <li><a href="/media">Media</a></li>
        <li><a href="/planets">Planets</a></li>
        <li><a href="/rover">Rover</a></li>
        <li><a href="/resources">Resources</a></li>
        <li><a href="#login" class="btn btn-small teal modal-trigger">Login</a></li>
      </ul>
      
            </div>
        </nav>

                    <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    // style={customStyles}
                    contentLabel="Login Modal"
                >
                     <div className="container">
                    <div className="input-field">
                        {/* <i class="material-icons prefix">person</i> */}
                        <input type="text" id="username"/>
                        <label for="username">Username</label>
                    </div><br/>
                    <div className="input-field">
                        {/* <i class="material-icons prefix">lock</i> */}
                        <input type="password" id="pass"/>
                        <label for="pass">Password</label>
                    </div><br/>
                    <div className="form-field">
                        <button className="btn-large waves-effect waves-dark">Login</button>
                    </div>
                </div>
                    <br/>
                    <br/>
                    <button className="btn-small waves-effect waves-dark" onClick={this.closeModal}>close</button>
                    
                </Modal>

    </div>
}

export default Nav;
