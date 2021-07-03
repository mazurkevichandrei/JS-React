import { createSlice } from "@reduxjs/toolkit";

export const counter = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    }
      //Object.getOwnPropertyNames(Array.prototype).map((item,index) =>({id:index+1,name:item,type:LIST_TYPES.MAIN}))
    ,
    reducers: {
        increaseState: (state) => {
            state.value++
          },
        decreaseState: (state) => {
            if(state.value === 0){
                
            }else{
                state.value--
            }
          },
        resetCounter: (state) => {
            state.value=0
          },
    }
  });

    export const { increaseState, decreaseState, resetCounter } = counter.actions;
    export default counter.reducer;



