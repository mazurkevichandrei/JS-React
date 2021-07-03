import React  from 'react';
// import LIST_TYPES from '../const/indexConst';
// import {Context} from '../context';
// import style from '../style';
import StyledMethodContainer from '../styleditems/styledMethodContainer'

import store from '../store/store';

const MethodDesc = ({method}) => {
    return(
        <StyledMethodContainer>
            <button onClick={()=>console.log(store.getState())}>TEST_REDUX</button>
            <span>
            {`Read more about ${method.toUpperCase()} method on `}
            <a href={`https://www.w3schools.com/jsref/jsref_${method}.asp`} target="_blank" rel='noreferrer'>{'www.w3schools.com'}</a>
            </span>
        </StyledMethodContainer>
    )
}

export default MethodDesc