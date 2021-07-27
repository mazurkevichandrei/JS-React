const changeMethodType = (data,methodName,methodType) => {
    const data1 = [...data]
    const filteredIndex = data1.findIndex(item => item.name===methodName)
    data1[filteredIndex].type=methodType
    data = [...data1]
}

export default changeMethodType