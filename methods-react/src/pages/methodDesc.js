import React  from 'react';
// import LIST_TYPES from '../const/indexConst';
// import {Context} from '../context';
// import style from '../style';
import StyledMethodContainer from '../styleditems/styledMethodContainer'

const MethodDesc = ({method}) => {
    return(
        <StyledMethodContainer>
            <span>
            {`Read more about ${method.toUpperCase()} method on `}
            <a href={`https://www.w3schools.com/jsref/jsref_${method}.asp`} target="_blank" rel='noreferrer'>{'www.w3schools.com'}</a>
            </span>
        </StyledMethodContainer>
    )
}

export default MethodDesc