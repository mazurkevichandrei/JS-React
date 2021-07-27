import { createSlice } from "@reduxjs/toolkit";
import SaveToStorage from '../../SaveToStorage';
import METHODS from '../../const/methodsListMain';

export const counter = createSlice(
  {
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
        pubGameResult: (state, {payload}) => {
          const {mode, name} = payload
          const total = Math.round(state.gameCorrect/METHODS.All.length*100)
          SaveToStorage(mode, name, 'NA' ,state.gameCorrect, state.gameErrors, total)
        },
        resetGame: (state) => {
          state.gameCorrect=0;
          state.gameErrors=0;
        },
    }
  });

    export const { 
      increaseSteps, increaseCorrect, decreaseCorrect, increaseErrors, resetCounter, increaseGameCorrect, increaseGameErrors, pubGameResult, resetGame } = counter.actions;
    export default counter.reducer;



