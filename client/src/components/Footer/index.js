import React from 'react';
import './style.css';
import github from '../img/GitHub-icon.png'
import githubLight from '../img/GitHub-icon-Light.png'

function Footer() {
  return (
    <div className="footer">
    <footer className="page-footer">
        <div className="container">
            <div className="row">
                <div className="col l6 s12">
                    <p className="grey-text text-lighten-4">
                    <a href="https://github.com/DanielSchauer">
                    <img className="github" alt="GitHub" src={githubLight}></img>
                    </a>
                    Daniel's GitHub  
                    <a href="https://github.com/slacker2222">
                    <img className="github" alt="GitHub" src={githubLight}></img>
                    </a>
                    Stacy's GitHub     
                    <a href="https://github.com/nyopko">
                    <img className="github" alt="GitHub" src={githubLight}></img>
                    </a>
                    Nick's GitHub     
                    <a href="https://github.com/jphillips37">
                    <img className="github" alt="GitHub" src={githubLight}></img>
                    </a>
                    John's GitHub     
                    </p>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <div className="container">
            © 2019 Copyright Text
            </div>
        </div>
    </footer>
</div>
    );
}

export default Footer;