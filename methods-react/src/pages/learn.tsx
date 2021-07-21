import React, {useContext} from 'react';
import {Context} from '../context';
import { useSelector } from 'react-redux';
import LIST_TYPES from '../const/indexConst';
import List from '../List';
import style from '../style';
import MODE from '../const/mode';
import store from '../store/store';
import { resetCounter} from '../store/reducers/test'
import { resetTypes } from '../store/methods';
import StyledRestart from '../styleditems/styledRestart';
// import ResutlList from '../ResultList';
import SaveLearnToStorage from '../SaveToStorage';
import ERROR from '../const/errorMessage';
import StyledCounterSection from '../styleditems/styledCounterSection';
import StyledSection from '../styleditems/styledSection';
import StyledMainArea from '../styleditems/styledMainArea';
import StyledCounterSectionItem from '../styleditems/styledCounterSectionItem';

const Learn = () => {
    interface IState {
        userName: string
        counter: number
    }
    interface IUser {
        name: string
        count: number
    }
    interface IStyles {
        [key: string]: string
    }
    const sectionStyle: IStyles = style.section

    const {setTop, setMessage, setCorrecrtPopUp, positionFixed} = useContext(Context)
    const userData: IUser | any = useSelector<IState>((state) => state.userName);
    const name = userData.name
    const count: IUser | any = useSelector<IState>((state) => state.counter);
    const total = count.steps===0 ? 0 : Math.round(count.correct/count.steps*100)

    const restart = () => {
        SaveLearnToStorage(MODE.LEARN, name, count.steps, count.correct, count.errors, total)
        store.dispatch(resetCounter())
        store.dispatch(resetTypes({mode: MODE.LEARN}))
        setMessage(`Result was saved`)
        setCorrecrtPopUp(true)
        setTop('0')
    }
    const check = () => {
        setCorrecrtPopUp(false)
        setTop('0') 
        setMessage(ERROR)
    }
    const restartCheck = () => {
        name === 'User' ? check() : restart()
    }

    const restartButton = () =>{ if (count.steps>0){
        return (
            <StyledRestart onClick={restartCheck}>Save and try again</StyledRestart>
            )
        }
    }

    return(
        <div style={sectionStyle}>
            <StyledSection isPositionFixed={positionFixed}>
            <StyledCounterSection>
                <StyledCounterSectionItem>
                    {restartButton()}
                </StyledCounterSectionItem>
                <StyledCounterSectionItem>
                    <h5>Steps: {count.steps}</h5>
                    <h5>| Correct: {count.correct} (33)</h5>
                    <h5>| Errors: {count.errors}</h5>
                    <h5>| Total: {total} % </h5>
                </StyledCounterSectionItem>
            </StyledCounterSection>
            </StyledSection>
            <StyledMainArea isPositionFixed={positionFixed}>
                <List header = {LIST_TYPES.MUTATING} ismutable='true' mode={MODE.LEARN} checkHidden={false} isDisabledMove={false}/>
                <List header={LIST_TYPES.MAIN} ismain='true' mode={MODE.LEARN}  checkHidden='true' isDisabledMove={false}/>
                <List header = {LIST_TYPES.NON_MUTATING} mode={MODE.LEARN} checkHidden={false} isDisabledMove={false}/>
            </StyledMainArea>
        </div>
    )
}

export default Learn