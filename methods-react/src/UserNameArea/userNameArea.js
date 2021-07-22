import React, {useContext, useState} from 'react';
import {Context} from '../context';
import { useSelector } from 'react-redux';
import store from '../store/store';
import {setUserName} from '../store/reducers/userName';
import StyledUserInput from '../styleditems/styledUserInput';
import StyledUserButton from '../styleditems/styledUserButton';
import StyledUserButtonReset from '../styleditems/styledUserButtonReset';
import ERROR from '../const/errorMessage';
// import userAreaStyles from './userAreaStyle';
import StyledUserInputContainer from '../styleditems/styledUserInputContainer';
import UserArea from '../styleditems/userArea';

const UserNameArea = () => {
    const {setTop, setMessage, setCorrecrtPopUp} = useContext(Context)
    const userData = useSelector((state) => state.userName);
    const user = userData.name
    const [nameFromInput, setNameFromInput ] = useState(user)

    const cleanField = () => {
        setNameFromInput('')
    }

    const setName = (evt) => {
        setNameFromInput(evt.target.value)
    }

    const check = () => {
        setMessage(ERROR)
        setCorrecrtPopUp(false)
        setTop('0') 
    }
    const saveName = () => {
        store.dispatch(setUserName({val: nameFromInput}))
        setMessage(`Name '${nameFromInput}' saved!`)
        setCorrecrtPopUp(true)
        setTop('0')
        setNameFromInput('User')
    }
  
    const setUserAction = () =>{
        nameFromInput === '' || nameFromInput === 'User' ? check() : 
        saveName()
    }
    const resetUserAction = () => {
        store.dispatch(setUserName({val: 'User'}))
        setNameFromInput('User')
    }

    return (
        <UserArea>
            <StyledUserInputContainer>
                <StyledUserInput type='text' value={nameFromInput} onChange={setName} onFocus={cleanField} placeholder={'User'}></StyledUserInput>
                <StyledUserButton onClick={setUserAction} title='Confirm NAME'></StyledUserButton>
                <StyledUserButtonReset onClick={resetUserAction} title='Reset NAME'></StyledUserButtonReset>
            </StyledUserInputContainer>
            <h5>Hi,{user}</h5>
        </UserArea>
    )
}

export default UserNameArea