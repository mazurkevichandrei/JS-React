import React from 'react';
import LIST_TYPES from '../const/indexConst';
import List from '../List';
import style from '../style';

const Methods = () => {
    return(
        <div style={style.container}>
            <List header = {LIST_TYPES.MUTATING} ismutable='true'/>
            <List header={LIST_TYPES.MAIN} ismain='true'/>
            <List header = {LIST_TYPES.NON_MUTATING}/>
        </div>
    )
}

export default Methods