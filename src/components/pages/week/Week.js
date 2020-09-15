import React from 'react';
import {Link} from 'react-router-dom';
import '../../../App.css';

function WeekOne () {
    return (
        <>
        <h1 className='report'>KMOM01</h1>
        <div className='report-container'></div>
            <div className='report-text-container'>
                <div className='report-text'>
                    <p>Här står det om readme snart</p>
                </div>
            </div>
            <div className='report-toggle'></div>
                <div className='report-btns'></div>
                    <ul className='report-btn'>
                        Tillbaka till Redovisningar
                        <Link to='/reports' className></Link>
                    </ul>

        </>
    );
}

function WeekTwo () {
    return (
        <>

        <h1>HEJ2</h1>

        </>
    );
}

function WeekThree () {
    return (
        <h1>HEJ3</h1>
    );
}

function WeekFour () {
    return (
        <h1>HEJ4</h1>
    );
}

function WeekFive () {
    return (
        <h1>HEJ5</h1>
    );
}

function WeekSix () {
    return (
        <h1>HEJ6</h1>
    );
}

export {WeekOne, WeekTwo, WeekThree, WeekFour, WeekFive, WeekSix};
