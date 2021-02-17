import React from 'react';

import Card from '../Card';

import { uuid } from 'uuidv4';

class Cards extends React.Component {


    checkClick = (nb, id) => {
        const { firstVal, secondVal, vCards, firstClick, secondClick } = this.props;
        const { checkIfSuccess } = this;
        vCards[id] = 0;
        console.log(vCards);
        if(!firstVal && !secondVal) {
            firstClick(nb, id, vCards);
        } else if(firstVal && !secondVal) {
            checkIfSuccess(firstVal, secondVal);
            secondClick(nb, id, vCards);
        } 
    }

    checkIfSuccess = (first, second) => {
        const { success, cleanVals } = this.props;

        if(first === second) {
            success(first); 
            cleanVals();
        }
        else {
            cleanVals();
        }
    }

    render() {
        const { cards, firstVal, secondVal, successCards, endGame, gameEnded, vCards, clicks } = this.props;
        console.log(vCards);
    
        // if(firstVal && secondVal) {
        //     this.checkIfSuccess(firstVal, secondVal);
        // }

        const checkedCards = cards.filter(el => successCards.indexOf(el) < 0);

        if(cards.length > 0 && checkedCards.length === 0) {
            endGame();
            if(gameEnded) {
                return (
                    <section className="EndGame">
                        <h3>End of the game!</h3>
                    </section>
                );
            } else {
                return (
                    <section className="BeginGame">
                        <h3>Press New Game to begin</h3>
                    </section>
                );
            }

        } else 
            return (
                <section className="Cards">
                    {cards.map((el, idx) => <Card 
                        key={uuid()} 
                        idx={idx} 
                        ifThisIsActive={vCards[idx] ? 'hide' : clicks !== [true, true] ? 'active' : 'hide'}
                        number={el} 
                        checkClick={this.checkClick} />)}
                </section>
        );
    }

}

export default Cards;