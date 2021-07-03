const IncludeFilter = (data, filterValue) =>  data.filter(item => item.name.toLowerCase().includes(filterValue))

export default IncludeFilter