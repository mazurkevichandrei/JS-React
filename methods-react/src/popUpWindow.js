import React, {useContext} from 'react';
import { Context } from './context';
import StyledPopUp from './styleditems/popUp/styledPopUp';
import StyledRestart from './styleditems/styledRestart';
import PopUpButton from './styleditems/popUp/popUpButton';

const PopUpWindow = () => {
    const {top,setTop} = useContext(Context)
    
    const hidePopUp = () => {
        setTop('-200px')
    }

    return(
        <StyledPopUp top={top}>
            Please, enter your name! 
            <PopUpButton onClick={hidePopUp} top={top}>&#10008;</PopUpButton>
        </StyledPopUp>
    )
}

export default PopUpWindow