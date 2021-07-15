import { createSlice } from "@reduxjs/toolkit";

export const counter = createSlice({
    name: 'counter',
    initialState: {
        steps: 0,
        correct: 0,
        errors: 0,
        gameCorrect: 0,
        gameErrors: 0,
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
            //Object.keys(state).map(item => state[item]=0)
            state.steps=0;
            state.correct=0;
            state.errors=0;
          },
        increaseGameCorrect: (state) => {
          state.gameCorrect ++
        },
        increaseGameErrors: (state) => {
          state.gameErrors ++
        },
        resetGame: (state) => {
          state.gameCorrect=0;
          state.gameErrors=0;
        },
    }
  });

    export const { 
      increaseSteps, increaseCorrect, decreaseCorrect, increaseErrors, resetCounter, increaseGameCorrect, increaseGameErrors, resetGame } = counter.actions;
    export default counter.reducer;



