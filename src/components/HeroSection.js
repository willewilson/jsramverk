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
                        Mitt namn är William, jag är 29 år gammal och bor i Stockholm.
                        Den här sidan är har jag byggt till kursen jsramverk och den är byggd
                        med ramverket React.
                        <br/><br/>
                        Mitt intresse för programmering uppstod för cirka två år sedan då jag
                        ville göra något nytt i mitt liv. Eftersom jag sedan länge har varit
                        intresserad av datorer, mest till att göra musik med, så ville jag
                        hitta något nytt och började därav studera programmering på BTH. Här
                        har jag hittat helt rätt och är tycker det är både roligt och utmanade vilket
                        gör detta till något jag verkligen vill jobba med.
                        <br/><br/>
                        Tidigare har jag bland annat jobbat i ett gym, i en skola, som DJ och drivit ett
                        eget Eventbolag. Det sistnämnda startade jag efter att ha jobbat som DJ i ett antal
                        år då jag kände att kunde göra något mer än bara spela musik. Det lockade mig att
                        jobba med allt det kreativa bakom en bra tillställning så som bra ljud och ljus men
                        även andra saker som kan få till exempel ett bröllop att bli oförglömligt.
                        <br/><br/>
                        I övrigt är jag intresserad av sport och framförallt fotboll. Jag både tittar och spelar
                        fotboll, om än i korpen, så mycket jag hinner. Utöver fotboll går jag gärna en golfrunda
                        eller spelar padel.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
