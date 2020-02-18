import { connect } from 'react-redux';
import { newGame, getLevel, changeLevel, generateVisibilityArr, endGame, getGameEndInfo } from '../../redux/reducer';

import SideBar from './SideBar';

const mapStateToProps = state => ({
    level: getLevel(state),
    noGame: getGameEndInfo(state)
});

const mapDispatchToProps = dispatch => ({
    newGame: (array, visArray) => dispatch(newGame(array, visArray)),
    endGame: () => dispatch(endGame()),
    changeLevel: level => dispatch(changeLevel(level)),
    generateVisibilityArr: arr => dispatch(generateVisibilityArr(arr)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);