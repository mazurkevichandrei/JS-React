import React, {useContext} from 'react';
import { Context } from './context';
import StyledPopUp from './styleditems/popUp/styledPopUp';
import PopUpButton from './styleditems/popUp/popUpButton';

const PopUpWindow = () => {
    const {top,setTop, message} = useContext(Context)
    
    const hidePopUp = () => {
        setTop('-200px')
    }

    return(
        <StyledPopUp top={top}>
            {message}
            <PopUpButton onClick={hidePopUp} top={top}>&#10008;</PopUpButton>
        </StyledPopUp>
    )
}

export default PopUpWindow