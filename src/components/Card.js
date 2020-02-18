import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fontArr } from './fontArr';

// const Card = (props) => {

//     const { number, checkClick, idx, firstId, secondId } = props;

//     const handleClick = () => {
//         checkClick(number, idx);
//     }

//     return (
//         <div className="Card" onClick={handleClick}>
//             <FontAwesomeIcon className={idx === (firstId || secondId) ? 'active' : 'hide'} icon={fontArr[number]} />
//         </div>
//     );
// }

class Card extends React.Component {

    handleClick = (e) => {
        const { checkClick, number, idx } = this.props;

        checkClick(number, idx);
    }

    render() {
        const { number, ifThisIsActive } = this.props;

        return (
            <div className='Card' onClick={this.handleClick}>
                <div className={`card--icon ${ifThisIsActive}`}>
                    <FontAwesomeIcon icon={fontArr[number]} />
                </div> 
            </div>
        );
    }
}

export default Card;