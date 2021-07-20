interface IData {
    id: number
    name: string
    type: string
}

const CompareFilter = (data: Array<IData>, filterValue:string) => data.filter(item => (item.type)===(filterValue))

export default CompareFilter;