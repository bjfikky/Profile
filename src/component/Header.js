import React from 'react';
import './Header.css'
import resume from '../../src/assets/resume.pdf'

function Header(props) {
    return (


        <div>
            <ul className="navigation">
                <span className="name"><a href="#">Oluwole Olowolafe</a></span>
                <span><a href="#">Home</a></span>
                <span><a href="#">Contact</a></span>
                <span>
                <a
                    rel="noreferrer"
                    target="_blank"
                    className="cta-btn cta-btn--resume"
                    href={resume}
                >
                  View Resume
                </a>
              </span>
            </ul>
        </div>

    );
}

export default Header;