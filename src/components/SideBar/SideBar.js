import React from 'react';

import { generateArr } from '../generateArr';


const SideBar = (props) => {

    const handleNewGame = () => {
        const { newGame } = props;
        
        newGame(generateArr(level));
    }

    const handleLevelChange = (e) => {
        const { changeLevel } = props;

        changeLevel(e.target.value);
    }

    const { level } = props;

    return (
        <aside className="SideBar">
            <button onClick={handleNewGame}>New Game</button>
            <h3>Choose difficulty level:</h3>

            <form>
                <label>Easy</label>
                <input type="radio" checked={level === 'easy'} value="easy" onChange={handleLevelChange} />

                <label>Medium</label>
                <input type="radio" checked={level === 'medium'} value="medium" onChange={handleLevelChange} />

                <label>Hard</label>
                <input type="radio" checked={level === 'hard'} value="hard" onChange={handleLevelChange} />
            </form>

        </aside>
    );
}

export default SideBar;