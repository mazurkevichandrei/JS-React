
const SaveLearnToStorage = (mode, user, steps, correct, errors, total) => {
    const len =  {ll: localStorage.length} 
    let key = len.ll === 0 ? '1' : (len.ll+1).toString()
    localStorage.setItem(key, [mode, user, steps, correct, errors, total] )
}

export default SaveLearnToStorage