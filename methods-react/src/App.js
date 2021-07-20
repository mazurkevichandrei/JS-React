import React from 'react';
import {useState} from 'react';
import {Context} from './context';
import Header from './Header';
import ToolTip from './ToolTip';
import HEADER from './const/headerConst';
import Learn from './pages/learn';
import Game from './pages/game';
import Home from './pages/home';
import Result from './pages/result';
import MethodDesc from './pages/methodDesc';
import { ThemeProvider } from "styled-components";
import themesList from './themeStyles';
import StyledDivMain from './styleditems/styledMainDiv';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
//REDUX
import { Provider } from 'react-redux';
import store from './store/store';
import PopUpWindow from './PopUpWindow/popUpWindow';

function App () {

    const [isDayTheme, setIsDayTheme] = useState('true')
    const theme = isDayTheme ? themesList.dayTheme : themesList.nightTheme
    
    const changeTheme = () =>{
        setIsDayTheme(!isDayTheme);
    }

    const [takenMethod, setTakenMethod] = useState('')
    const takeMethod = (evt) => setTakenMethod(evt.target.name)

    const [message, setMessage] = useState('')
    const [top, setTop] = useState('-200px')
    const [correcrtPopUp, setCorrecrtPopUp] = useState()
    // const [mode, setMode] = useState('')
    // const setModeType = (modeType) => setMode(modeType)
    
    return (
      <ThemeProvider theme={theme}>
      <Context.Provider value={{takeMethod, changeTheme, isDayTheme, top, setTop, message, setMessage, correcrtPopUp, setCorrecrtPopUp }}>
        <Provider store={store}>
        <StyledDivMain>
        <PopUpWindow/>
        <ToolTip />
          <Router>
          <Header data={HEADER.HEADER_NAME} />
            <Switch>
                <Route path='/Learn'><Learn /></Route>
                <Route path='/Game'><Game /></Route>
                <Route path='/Result'><Result /></Route>
                <Route path='/MethodDesc'><MethodDesc method={takenMethod}/></Route>
                <Route exact path=''><Home /></Route>
            </Switch>
          {/* </div> */}
          </Router>
        </StyledDivMain>
        </Provider>
      </Context.Provider>
      </ThemeProvider>
    )
}

export default App