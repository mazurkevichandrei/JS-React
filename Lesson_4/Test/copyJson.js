function copyObjectJson (data, target){
  const newObj = JSON.parse(JSON.stringify(data))
  Object.assign(target, newObj)
  return JSON.stringify(target)
}

module.exports = copyObjectJson;