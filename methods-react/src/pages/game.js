import React from 'react';
import LIST_TYPES from '../const/indexConst';
import List from '../List';
import style from '../style';
import MODE from '../const/mode';

const Game = () => {

    return(
        <div style={style.container}>
            <List header = {LIST_TYPES.MUTATING} ismutable='true' mode={MODE.GAME}/>
            <List header={LIST_TYPES.MAIN} ismain='true' mode={MODE.GAME}/>
            <List header = {LIST_TYPES.NON_MUTATING} mode={MODE.GAME}/>
        </div>
    )
}

export default Game