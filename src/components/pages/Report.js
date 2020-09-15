import React from 'react';
import {Link} from 'react-router-dom';
import WeekOne from './week/Week';
import '../../App.css';
import Footer from '../Footer';

export default function Report () {
    return (
        <>
            <h1 className='report'>REDOVISNING</h1>
            <div className='report-container'></div>
                <div className='report-toggle'></div>
                    <div className='report-btns'></div>
                        <ul className='report-btn'>
                            KMOM01
                            <Link to='/week/1' className></Link>
                        </ul>
                        <ul className='report-btn'>
                            KMOM02
                            <Link to='/week/2' className></Link>
                        </ul>
                        <ul className='report-btn'>
                            KMOM03
                            <Link to='/week/3' className></Link>
                        </ul>
                        <ul className='report-btn'>
                            KMOM04
                            <Link to='/week/4' className></Link>
                        </ul>
                        <ul className='report-btn'>
                            KMOM05
                            <Link to='/week/5' className></Link>
                        </ul>
                        <ul className='report-btn'>
                            KMOM06
                            <Link to='/week/6' className></Link>
                        </ul>
            <Footer />
        </>
    );
}
