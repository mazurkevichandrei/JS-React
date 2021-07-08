import { createSlice } from "@reduxjs/toolkit";
import LIST_TYPES from '../const/indexConst';
import changeMethodType from '../const/changeMethodType';

export const methods = createSlice({
    name: 'methods',
    initialState:  {
        value: Object.getOwnPropertyNames(Array.prototype).map((item,index) =>({id:index+1,name:item,type:LIST_TYPES.MAIN})),
    },
    reducers: {
        changeType: (state, {payload}) => {
            const {name, type} = payload
            changeMethodType(state.value, name , type)
        },
        resetTypes: (state) => {
            state.value.map(item=> item.type=LIST_TYPES.MAIN)
        }
    }
});

export const { changeType, resetTypes } = methods.actions;
export default methods.reducer;