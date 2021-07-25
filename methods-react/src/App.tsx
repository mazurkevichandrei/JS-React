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

import { Provider } from 'react-redux';
import store from './store/store';
import PopUpWindow from './PopUpWindow/popUpWindow';
import Footer from './footer';


function App () {
  // const logo = LogoImage
  interface ITheme {
    [key: string]:string
  }
    const [isDayTheme, setIsDayTheme] = useState<boolean>(true)
    const theme:ITheme = isDayTheme ? themesList.dayTheme : themesList.nightTheme
    
    const changeTheme = ():any =>{
        setIsDayTheme(!isDayTheme);
    }

    const [takenMethod, setTakenMethod] = useState<string>('')
    const takeMethod = (evt: any) => setTakenMethod(evt.target.name)

    const [message, setMessage] = useState<string>('')
    const [top, setTop] = useState<string>('-200px')
    const [correcrtPopUp, setCorrecrtPopUp] = useState<true | false>()
    // const [mode, setMode] = useState('')
    // const setModeType = (modeType) => setMode(modeType)
    

    const [positionFixed, setPositionFixed] = useState<boolean>(false)
    const dd = () =>{
      window.scrollY > 80 ? setPositionFixed(true) : setPositionFixed(false)
    }
    window.onscroll=dd
     
    return (
      <ThemeProvider theme={theme}>
      <Context.Provider value={{takeMethod, changeTheme, isDayTheme, top, setTop, message, setMessage, correcrtPopUp, setCorrecrtPopUp, positionFixed }}>
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
          <Footer />
          </Router>
        </StyledDivMain>
        </Provider>
      </Context.Provider>
      </ThemeProvider>
    )
}

export default App