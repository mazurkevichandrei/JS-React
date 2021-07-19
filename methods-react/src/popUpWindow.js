import React, {useContext, useState} from 'react';
import { Context } from './context';
import StyledPopUp from './styleditems/popUp/styledPopUp';
import StyledRestart from './styleditems/styledRestart';

const PopUpWindow = () => {
    const {top,setTop} = useContext(Context)
    
    const hidePopUp = () => {
        setTop('-150px')
    }

    return(
        <StyledPopUp top={top}>
            Please, enter your name! 
            <StyledRestart onClick={hidePopUp}>CLOSE</StyledRestart>
        </StyledPopUp>
    )
}

export default PopUpWindow