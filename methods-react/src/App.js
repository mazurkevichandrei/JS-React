import React from 'react';
import {useState} from 'react';
import {Context} from './context';
import Header from './Header';
import ToolTip from './ToolTip';
import HEADER from './const/headerConst';
import Methods from './pages/methods';
import Test from './pages/test';
import Home from './pages/home';
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

function App () {

    const [isDayTheme, setIsDayTheme] = useState('true')
    const theme = isDayTheme ? themesList.dayTheme : themesList.nightTheme
    
    const changeTheme = () =>{
        setIsDayTheme(!isDayTheme);
        console.log(isDayTheme)
    }

    const [takenMethod, setTakenMethod] = useState('')
    const takeMethod = (evt) => {
      setTakenMethod(evt.target.name)
    }
    
    return (
      <ThemeProvider theme={theme}>
      <Context.Provider value={{takeMethod, changeTheme, isDayTheme}}>
        <Provider store={store}>
        <StyledDivMain>
        <ToolTip />
          <Router>
          <Header data={HEADER.HEADER_NAME} />
            <Switch>
                <Route path='/Methods'><Methods /></Route>
                <Route path='/Test'><Test /></Route>
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