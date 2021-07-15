import { createSlice } from "@reduxjs/toolkit";

export const buttonsProps = createSlice({
    name: 'buttonsProps',
    initialState: {
        checkHidden: true,
        changeTypesInactive: false,
        submitBtnInactive: true,
        flag: 0,
    }
    ,
    reducers: {
        turnCheckHidden: (state, {payload}) => {
            const {val} = payload
            state.checkHidden = val
          },
        turnChangeMethodBtn: (state, {payload}) => {
            const {val} = payload
            state.changeTypesInactive = val
        },
        turnsubmitBtn: (state, {payload}) => {
            const {val} = payload
            state.submitBtnInactive = val
        },
        turnFlag: (state, {payload}) => {
            const {val} = payload
            state.flag = val
        },
    }
  });

    export const { turnCheckHidden, turnChangeMethodBtn, turnsubmitBtn, turnFlag } = buttonsProps.actions;
    export default buttonsProps.reducer;