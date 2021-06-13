import React from 'react';
import {useState} from 'react';
import {Context} from './context';
import Header from './Header';
import List from './List';
import ToolTip from './ToolTip';
import style from './style';
import LIST_TYPES from './const/indexConst';
import HEADER from './const/headerConst';

function App () {

    const [allMethods, setAllMethods] = useState(Object.getOwnPropertyNames(Array.prototype).map((item,index) =>({id:index+1,name:item,type:LIST_TYPES.MAIN})));
    
    const changeMethodType = (methodType, methodName) => {
        const allMethods1 = [...allMethods]
        const filteredIndex = allMethods1.findIndex(item => item.name===methodName)
        allMethods1[filteredIndex].type=methodType
        setAllMethods(allMethods1)
        // console.log(allMethods)   
    }
    
    return (
      <Context.Provider value={{changeMethodType, allMethods}}>
        <div>
        <ToolTip />
          <Header data={HEADER.HEADER_NAME} />
          <div style={style.container}>
              <List header = {LIST_TYPES.MUTATING} ismutable='true'/>
              <List header={LIST_TYPES.MAIN} ismain='true'/>
              <List header = {LIST_TYPES.NON_MUTATING}/>
          </div>
        </div>
      </Context.Provider>
    )
}

export default App