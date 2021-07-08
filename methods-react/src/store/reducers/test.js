import { createSlice } from "@reduxjs/toolkit";

export const counter = createSlice({
    name: 'counter',
    initialState: {
        steps: 0,
        correct: 0,
        errors: 0,
    }
    ,
    reducers: {
        increaseSteps: (state) => {
            state.steps ++
          },
        increaseCorrect: (state) => {
          state.correct ++
          },
        decreaseCorrect: (state) => {
            state.correct --
            },
        increaseErrors: (state) => {
          state.errors ++
          },
        resetCounter: (state) => {
            Object.keys(state).map(item => state[item]=0)
          },
    }
  });

    export const { increaseSteps, increaseCorrect, decreaseCorrect, increaseErrors, resetCounter } = counter.actions;
    export default counter.reducer;



