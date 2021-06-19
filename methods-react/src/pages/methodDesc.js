import React, {useContext} from 'react';
import LIST_TYPES from '../const/indexConst';
import {Context} from '../context';
import style from '../style';
import StyledMethodContainer from '../styleditems/styledMethodContainer'

const MethodDesc = ({method}) => {
    let {allMethods} = useContext(Context)
    const data = (allMethods.filter(item => item.name === method))[0]
    console.log(data)
    return(
        <StyledMethodContainer>
            <span>
            {`Read more about ${method.toUpperCase()} method on `}
            <a href={`https://www.w3schools.com/jsref/jsref_${method}.asp`} target="_blank">{'https://www.w3schools.com/'}</a>
            </span>
        </StyledMethodContainer>
    )
}

export default MethodDesc