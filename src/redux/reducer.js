import initialState from './initialState';


// actions

export const FIRST_CLICK = 'FIRST_CLICK';
export const SECOND_CLICK = 'SECOND_CLICK';
export const CHANGE_LEVEL = 'CHANGE_LEVEL';
export const NEW_GAME = 'NEW_GAME';

// actions creators

export const firstClick = payload => ({ type: 'FIRST_CLICK', payload });
export const secondClick = payload => ({ type: 'SECOND_CLICK', payload });
export const changeLevel = payload => ({ type: 'CHANGE_LEVEL', payload });
export const newGame = payload => ({ type: 'NEW_GAME', payload });

// selectors

export const getFirstVal = state => state.firstValue;
export const getSecondVal = state => state.secondValue;
export const getLevel = state => state.level;
export const getCards = state => state.cards;

// reducer

export default function reducer(state = initialState, action = {}) {
    switch(action.type) {
        case FIRST_CLICK:
            return { ...state, firstCardClicked: true, firstValue: action.payload };
        case SECOND_CLICK:
            return { ...state, secondCardClicked: true, secondValue: action.payload };
        case CHANGE_LEVEL:
            return { ...state, level: action.payload };
        case NEW_GAME:
            return {...state, cards: action.payload};
        default:
            return state;
    }
};