
const SaveLearnToStorage = (user, steps, correct, errors, total) => {
    const len =  {ll: localStorage.length} 
    let key = len.ll === 0 ? '1' : (len.ll+1).toString()
    console.log(len, key)
    localStorage.setItem(key, [user, steps, correct, errors, total] )
}

export default SaveLearnToStorage