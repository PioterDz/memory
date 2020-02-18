import { connect } from 'react-redux';
import { firstClick, secondClick, cleanVals, success, endGame,
    getFirstVal, getSecondVal, getLevel, getCards, getFirstId, getSecondId, getSuccessCards, getGameEndInfo, getClicks, getVisibileCards } from '../../redux/reducer';

import Cards from './Cards';

const mapStateToProps = state => ({
    firstVal: getFirstVal(state),
    secondVal: getSecondVal(state),
    level: getLevel(state),
    cards: getCards(state),
    firstId: getFirstId(state),
    secondId: getSecondId(state),
    successCards: getSuccessCards(state),
    gameEnded: getGameEndInfo(state),
    clicks: getClicks(state),
    vCards: getVisibileCards(state),
});

const mapDispatchToProps = dispatch => ({
    firstClick: (number, id, arr) => dispatch(firstClick(number, id, arr)),
    secondClick: (number, id, arr) => dispatch(secondClick(number, id, arr)),
    cleanVals: () => dispatch(cleanVals()),
    success: first => dispatch(success(first)),
    endGame: () => dispatch(endGame()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cards);