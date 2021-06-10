import React from 'react';
import Header from './Header';
import List from './List';
import ToolTip from './ToolTip';
import style from './style';
import LIST_TYPES from './const/indexConst';

function App (){

    const methods = Object.getOwnPropertyNames(Array.prototype);
    const mutable = ['pop', 'push', 'shift', 'unshift', 'splice'];
    const mutableData = []
    const unmutableData = []
    
    const allMethods = [] 
    const keyValues = {keyValue: 0}
    methods.map((item,index) => {
      allMethods.push({id:index+1,key:keyValues.keyValue+1,name:item,type:LIST_TYPES.MAIN})
      keyValues.keyValue++
    })
    
    
    methods.map((item,index) => {
      if (mutable.includes(item)) {
        mutableData.push({id:index+1,key:keyValues.keyValue+1,name:item,type:LIST_TYPES.MUTATING})
        keyValues.keyValue++
        } else {
          unmutableData.push({id:index+1,key:keyValues.keyValue+1,name:item,type:LIST_TYPES.NON_MUTATING})
          keyValues.keyValue++
          }
      })

    return (
      <div>
        <Header data='HEADER'/>
        <div style={style.container}>
            <List data={mutableData} header = {LIST_TYPES.MUTATING} isMutable/>
            <List data={allMethods} header={LIST_TYPES.MAIN} isMain/>
            <List data={unmutableData} header = {LIST_TYPES.NON_MUTATING}/>
            <ToolTip />
        </div>
      </div>
    )
}

export default App