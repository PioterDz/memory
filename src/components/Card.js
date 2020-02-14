import React from 'react'

const Card = (props) => {

    const { number, checkClick } = props;

    const handleClick = () => {
        checkClick(number);
    }

    return (
        <div className="Card" onClick={handleClick}>
            <p>{ number }</p>
        </div>
    );
}

export default Card;