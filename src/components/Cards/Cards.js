import React from 'react';

import Card from '../Card';

import { uuid } from 'uuidv4';


const Cards = (props) => {

    
    const checkClick = (nb) => {
        const { firstVal, secondVal, firstClick, secondClick } = props;
        if(!firstVal && !secondVal) {
            console.info('first', nb);
            return firstClick(nb);
        } else if(firstVal && !secondVal) {
            console.info('second', nb);
            return secondClick(nb);
        }
    }

    const { cards } = props;

    return (
        <section className="Cards">
            {cards.map(el => <Card key={uuid()} number={el} checkClick={checkClick} />)}
        </section>
    );
}

export default Cards;