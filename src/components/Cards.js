import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return(
        <div className='cards'>
            <h1>Andra saker jag gillar och gör!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <a href='//www.github.com/willewilson'>
                            <CardItem
                            src="images/github.gif"
                            text="Här hittar du min kod från tidigare projekt"
                            label="Github"
                            />
                        </a>
                        <a href='//www.nophevents.com'>
                            <CardItem
                            src="images/noph-logga.svart.png"
                            text="Kolla gärna in mitt eventbolag NOPH Events"
                            label="NOPH Events"
                            />
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
