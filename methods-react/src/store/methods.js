import { createSlice } from "@reduxjs/toolkit";
import LIST_TYPES from '../const/indexConst';
import changeMethodType from '../const/changeMethodType';

export const methods = createSlice({
    name: 'methods',
    initialState:  {
        value: Object.getOwnPropertyNames(Array.prototype).map((item,index) =>({id:index+1,name:item,type:LIST_TYPES.MAIN})),
        // filteredValue: '',
        // filterValue: '',
    },
    reducers: {
        changeType: (state, {payload}) => {
            const {name, type} = payload
            changeMethodType(state.value, name , type)
            //state.filteredValue = [...state.value.filter(item => item.name.toLowerCase().includes(state.filterValue))]
        },
        // runFil: (state, {payload}) => {
        //     const {data, tt} = payload
        //     state.filteredValue = [...state.value.filter(item => item.name.toLowerCase().includes(data))]

        //     state.filterValue = data
        //     console.log(tt)
        // }
    }
});

export const { changeType, runFil } = methods.actions;
export default methods.reducer;