import React from 'react';
import {useState} from 'react';
import {Context} from './context';
import Header from './Header';
import ToolTip from './ToolTip';
import LIST_TYPES from './const/indexConst';
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


function App () {
    const [allMethods, setAllMethods] = useState(Object.getOwnPropertyNames(Array.prototype).map((item,index) =>({id:index+1,name:item,type:LIST_TYPES.MAIN})));
    
    const [isDayTheme, setIsDayTheme] = useState('true')
    const theme = isDayTheme ? themesList.dayTheme : themesList.nightTheme
    
    const changeTheme = () =>{
        setIsDayTheme(!isDayTheme);
    }

    const changeMethodType = (methodType, methodName) => {
        const allMethods1 = [...allMethods]
        const filteredIndex = allMethods1.findIndex(item => item.name===methodName)
        allMethods1[filteredIndex].type=methodType
        setAllMethods(allMethods1)
    }

    const [takenMethod, setTakenMethod] = useState('')
    const takeMethod = (evt) => {
      setTakenMethod(evt.target.name)
    }
    
    return (
      <ThemeProvider theme={theme}>
      <Context.Provider value={{takeMethod, changeMethodType, changeTheme, allMethods, theme}}>
        <StyledDivMain>
        <ToolTip />
          <Router>
          <Header data={HEADER.HEADER_NAME} />
          {/* <div style={style.container}> */}
            <Switch>
                <Route path='/Methods'><Methods /></Route>
                <Route path='/Test'><Test /></Route>
                <Route path='/MethodDesc'><MethodDesc method={takenMethod}/></Route>
                <Route exact path=''><Home /></Route>
            </Switch>
          {/* </div> */}
          </Router>
        </StyledDivMain>
      </Context.Provider>
      </ThemeProvider>
    )
}

export default App