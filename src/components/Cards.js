import React from 'react'

import initialState from '../redux/initialState';
import Card from './Card';
import { generateArr } from './generateArr';

import { uuid } from 'uuidv4';

const Cards = () => {

    const checkClick = (nb) => {
        console.log(nb);
    }

    const cardsArr = generateArr(initialState.diff);

    return (
        <section className="Cards">
            {cardsArr.map(el => <Card key={uuid()} number={el} checkClick={checkClick} />)}
        </section>
    );
}

export default Cards;