import { connect } from 'react-redux';
import { firstClick, secondClick, getFirstVal, getSecondVal, getLevel, getCards } from '../../redux/reducer';

import Cards from './Cards';

const mapStateToProps = state => ({
    firstVal: getFirstVal(state),
    secondVal: getSecondVal(state),
    level: getLevel(state),
    cards: getCards(state)
});

const mapDispatchToProps = dispatch => ({
    firstClick: number => dispatch(firstClick(number)),
    secondClick: number => dispatch(secondClick(number))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cards);