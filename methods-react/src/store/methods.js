import { createSlice } from "@reduxjs/toolkit";
import LIST_TYPES from '../const/indexConst';
import MODE from '../const/mode';
import changeMethodType from '../const/changeMethodType';
//import IMethods from './methodsInterface';


export const methods = createSlice({
    name: 'methods',
    initialState:  {
        value: Object.getOwnPropertyNames(Array.prototype).map((item,index) =>({id:index+1,name:item,type:LIST_TYPES.MAIN})),
        gameValue: Object.getOwnPropertyNames(Array.prototype).map((item,index) =>({id:index+1,name:item,type:LIST_TYPES.MAIN})),
    },
    reducers: {
        changeType: (state, {payload}) => {
            const {name, type, mode} = payload
            const data = mode === MODE.LEARN ? state.value : state.gameValue;
            changeMethodType(data, name, type)
        },
        resetTypes: (state, {payload}) => {
            const {mode} = payload
            const data = mode === MODE.LEARN ? state.value : state.gameValue;
            data.map(item=> item.type=LIST_TYPES.MAIN)
        }
    }
});

export const { changeType, resetTypes } = methods.actions;
export default methods.reducer;