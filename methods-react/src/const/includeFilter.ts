interface IData {
    id: number
    name: string
    type: string
}

const IncludeFilter = (data: Array<IData>, filterValue: string) =>  data.filter(item => item.name.toLowerCase().includes(filterValue))

export default IncludeFilter