import React from 'react';
import List from './List';
import ToolTip from './ToolTip';
import style from './style';

function App (){
    const methods = Object.getOwnPropertyNames(Array.prototype);
    const mutable = ['pop', 'push', 'shift', 'unshift', 'splice'];
    const mutableData = []
    const unmutableData = []
    let keyValue = 0
    methods.map((item,index) => {
      if (mutable.includes(item)) {
        mutableData.push({id:index+1,key:keyValue+1,name:item,type:'mutable'})
        keyValue++
        } else {
          unmutableData.push({id:index+1,key:keyValue+1,name:item,type:'unmutable'})
          keyValue++
          }
      })

    return (
        <div style={style.container}>
            <List data={mutableData} header = 'Mutable' isMutable/>
            <List data={unmutableData} header = 'Unmutable'/>
            <ToolTip />
        </div>
    )
}

export default App