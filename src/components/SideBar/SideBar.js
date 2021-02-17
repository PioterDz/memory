import React from 'react';

import { generateArr } from '../generateArr';


const SideBar = (props) => {

    const handleEndGame = () => {
        const { endGame } = props;

        endGame();
    }

    const handleNewGame = () => {
        const { newGame, generateVisibilityArr } = props;
        
        const generateVisArr = Array(level).fill(1);
        console.log(generateVisArr);
        newGame(generateArr(level));
        generateVisibilityArr(generateVisArr);
    }

    const handleLevelChange = (e) => {
        const { changeLevel } = props;
        
        const levels = {
            easy: 10,
            medium: 20,
            high: 30
        }
        changeLevel(levels[e.target.value]);
    }

    const { level, noGame } = props;

    if(noGame) return (
        <aside className="SideBar">
            <button onClick={handleNewGame}>New Game</button>
            <button onClick={handleEndGame}>End Game</button>
            <h3>Choose difficulty level:</h3>

            <form>
                <label>Easy</label>
                <input type="radio" checked={level === 10} value="easy" onChange={handleLevelChange} />

                <label>Medium</label>
                <input type="radio" checked={level === 20} value="medium" onChange={handleLevelChange} />

                <label>Hard</label>
                <input type="radio" checked={level === 30} value="hard" onChange={handleLevelChange} />
            </form>

        </aside>
    );
    if(!noGame) return (
        <aside className="SideBar">
            <button onClick={handleNewGame}>New Game</button>
            <button onClick={handleEndGame}>End Game</button>
        </aside>
    );
}

export default SideBar;