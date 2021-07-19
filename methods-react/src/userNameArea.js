import React, {useContext, useState} from 'react';
import {Context} from './context';
import { useSelector } from 'react-redux';
import store from './store/store';
import {setUserName} from './store/reducers/userName';
import StyledUserInput from './styleditems/styledUserInput';
import StyledUserButton from './styleditems/styledUserButton';

const UserNameArea = () => {
    const {setTop} = useContext(Context)
    const userData = useSelector((state) => state.userName);
    const user = userData.name
    const [nameFromInput, setNameFromInput ] = useState(user)

    const cleanField = () => {
        setNameFromInput('')
    }

    const setName = (evt) => {
        setNameFromInput(evt.target.value)
    }

    const ss = {
        display: 'flex',
        maxWidth: '500px',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const setUserAction = () =>{
        nameFromInput === '' || nameFromInput === 'User' ? setTop('0') :
        store.dispatch(setUserName({val: nameFromInput}))
        setNameFromInput('User')
    }

    return (
        <div style={ss}>
            <h5>Enter your name: </h5>
            <StyledUserInput type='text' value={nameFromInput} onChange={setName} onFocus={cleanField} ></StyledUserInput>
            <StyledUserButton onClick={setUserAction}></StyledUserButton>
            <h5>Hi, {user}</h5>
        </div>
    )
}

export default UserNameArea