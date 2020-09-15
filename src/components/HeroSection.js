import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/Love-coding.mp4' autoPlay loop muted />
            <h1>Om mig</h1>
            <div className='main-container'>
                <div className='text-container'>
                    <p className='me-text'>
                        hejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhejhej
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
