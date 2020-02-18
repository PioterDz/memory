import initialState from './initialState';


// actions

export const FIRST_CLICK = 'FIRST_CLICK';
export const SECOND_CLICK = 'SECOND_CLICK';
export const CHANGE_LEVEL = 'CHANGE_LEVEL';
export const NEW_GAME = 'NEW_GAME';
export const CLEAN_VALS = 'CLEAN_VALS';
export const SUCCESS = 'SUCCESS';
export const END_GAME = 'END_GAME';
export const GENERATE_VISIBILITY_ARRAY = 'GENERATE_VISIBILITY_ARRAY';

// actions creators

export const firstClick = (number, id, arr) => ({ type: 'FIRST_CLICK', number, id, arr });
export const secondClick = (number, id, arr) => ({ type: 'SECOND_CLICK', number, id, arr });
export const changeLevel = payload => ({ type: 'CHANGE_LEVEL', payload });
export const newGame = array => ({ type: 'NEW_GAME', array });
export const cleanVals = () => ({ type: 'CLEAN_VALS' });
export const success = first => ({ type: 'SUCCESS', first });
export const endGame = () => ({ type: 'END_GAME' });
export const generateVisibilityArr = payload => ({ type: 'GENERATE_VISIBILITY_ARRAY', payload });

// selectors

export const getFirstVal = state => state.firstValue;
export const getSecondVal = state => state.secondValue;
export const getFirstId = state => state.firstValueId;
export const getSecondId = state => state.secondValueId;
export const getLevel = state => state.level;
export const getCards = state => state.cards;
export const getSuccessCards = state => state.successCards;
export const getGameEndInfo = state => state.noGame;
export const getClicks = state => [state.firstCardClicked, state.secondCardClicked];
export const getVisibileCards = state => state.vCards;

// reducer

export default function reducer(state = initialState, action = {}) {
    switch(action.type) {
        case FIRST_CLICK:
            return { ...state, firstCardClicked: true, firstValue: action.number, firstValueId: action.id, vCards: action.arr };
        case SECOND_CLICK:
            return { ...state, secondCardClicked: true, secondValue: action.number, secondValueId: action.id, vCards: action.arr };
        case CHANGE_LEVEL:
            return { ...state, level: action.payload };
        case NEW_GAME:
            return { ...state, cards: action.array, successCards: [], noGame: false, gameOn: true };
        case GENERATE_VISIBILITY_ARRAY:
            return { ...state, vCards: action.payload };
        case CLEAN_VALS:
            return { ...state, firstValue: undefined, secondValue: undefined, firstValueId: undefined, secondValueId: undefined };
        case SUCCESS:
            return { ...state, successCards: [...state.successCards, action.first] };
        case END_GAME:
            return { ...state, cards: [], noGame: true, gameOn: false };
        default:
            return state;
    }
};