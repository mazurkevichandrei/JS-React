import React from 'react'
// import PropTypes from 'prop-types'
import List from './List'
import ToolTip from './ToolTip'

const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      maxWidth: '800px',
      width: '100%',
      margin: '0 auto',
      border: '1px solid black'
    }
  }


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
        <div style={styles.container}>
            <List data={mutableData} header = 'Mutable'/>
            <List data={unmutableData} header = 'Unmutable'/>
            <ToolTip />
        </div>
    )
}

export default App