import React from 'react';
import LIST_TYPES from '../const/indexConst';
import List from '../List';
import style from '../style';

const Methods = () => {
    return(
        <div style={style.container}>
            <List header={LIST_TYPES.MAIN} ismain='true'/>
        </div>
    )
}

export default Methods