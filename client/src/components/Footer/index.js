import React from 'react';
import './style.css';

function Footer() {
  return (
    <div className="footer">
    <footer className="page-footer">
        <div className="container">
            <div className="row">
                <div className="col l6 s12">
                    <p className="grey-text text-lighten-4">footer content</p>
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