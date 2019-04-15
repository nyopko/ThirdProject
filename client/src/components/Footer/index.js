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
                     <div className="col s12">  
                        <a id="nameLink" href="https://github.com/slacker2222">
                            <img className="github" alt="GitHub" src={githubLight}></img>Stacy's GitHub
                        </a>
                        <a id="nameLink" href="https://github.com/jphillips37">
                            <img className="github" alt="GitHub" src={githubLight}></img>John's GitHub
                        </a>    
                        <a id="nameLink" href="https://github.com/DanielSchauer">
                            <img className="github" alt="GitHub" src={githubLight}></img>Daniel's GitHub
                        </a>  
                        <a id="nameLink" href="https://github.com/nyopko">
                            <img className="github" alt="GitHub" src={githubLight}></img>Nick's GitHub 
                        </a>
                </div>
            </div>
        </div>
        {/* <div className="footer-copyright">
            <div className="container">
            © 2019
            </div>
        </div> */}
        </div>
    </footer>
</div>

    );
}
export default Footer;