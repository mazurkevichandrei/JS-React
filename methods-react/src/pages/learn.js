import React from 'react';
import LIST_TYPES from '../const/indexConst';
import List from '../List';
import style from '../style';
import MODE from '../const/mode';

const Learn = () => {

    return(
        <div style={style.container}>
            <List header = {LIST_TYPES.MUTATING} ismutable='true' mode={MODE.LEARN}/>
            <List header={LIST_TYPES.MAIN} ismain='true' mode={MODE.LEARN}/>
            <List header = {LIST_TYPES.NON_MUTATING} mode={MODE.LEARN}/>
        </div>
    )
}

export default Learn