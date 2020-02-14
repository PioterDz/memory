import { connect } from 'react-redux';
import { newGame, getLevel, changeLevel } from '../../redux/reducer';

import SideBar from './SideBar';

const mapStateToProps = state => ({
    level: getLevel(state)
});

const mapDispatchToProps = dispatch => ({
    newGame: array => dispatch(newGame(array)),
    changeLevel: level => dispatch(changeLevel(level))
})

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);