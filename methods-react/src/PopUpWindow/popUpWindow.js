import React, {useContext} from 'react';
import { Context } from '../context';
import StyledPopUp from '../styleditems/popUp/styledPopUp';
import PopUpButton from '../styleditems/popUp/popUpButton';
//import hidePopUp from './hidePopUp';

const PopUpWindow = () => {
    const {top,setTop, message, correcrtPopUp} = useContext(Context)
    
    const hidePopUp = () => {
        setTop('-200px')
    }

    const button = () => {
        return(
            correcrtPopUp ?
            <PopUpButton onClick={hidePopUp} correcrtPopUp={correcrtPopUp}>&#10004;</PopUpButton> : <PopUpButton onClick={hidePopUp}>&#10008;</PopUpButton>
        )
    }

    return(
        <StyledPopUp top={top}>
            {message}
            {button()}
        </StyledPopUp>
    )
}

export default PopUpWindow