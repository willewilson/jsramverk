import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return(
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Länkar</h2>
                        <a href='//www.github.com'>GitHub</a>
                        <a href='//www.soundcloud.com'>Soundcloud</a>
                        <a href='//www.nophevents.com'>NOPH Events</a>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Kontakt</h2>
                        <a href ="mailto: william.nordenstad@gmail.com">Mail</a>
                        <a href='//www.linkedin.com'>LinkedIn</a>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            WLSN <i className='far fa-smile-wink' />
                        </Link>
                    </div>
                    <small className='website-rights'>WLSN © 2020</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook'
                        to="/"
                        targets="_blank"
                        aria-label="Facebook"
                        >
                            <i className='fab fa-facebook'></i>
                        </Link>
                        <Link className='social-icon-link linkedin'
                        to="/"
                        targets="_blank"
                        aria-label="LinkedIn"
                        >
                            <i className='fab fa-linkedin'></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
